import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import { JobPost, ApiResponse } from "./types";

const JOBS_COLLECTION = "jobs";
const JOB_APPLICATIONS_COLLECTION = "job_applications";

/** Format Firestore Timestamp or date value for display */
export function formatJobDate(val: unknown): string {
  if (!val) return "N/A";
  let ms = 0;
  if (typeof val === "object" && val !== null) {
    const o = val as Record<string, unknown>;
    if (typeof o.toDate === "function") ms = (o.toDate() as Date).getTime();
    else {
      const sec = o.seconds ?? (o as { _seconds?: number })._seconds;
      if (typeof sec === "number") ms = sec * 1000;
    }
  }
  if (!ms) {
    try {
      ms = new Date(val as string | number).getTime();
    } catch {
      return "N/A";
    }
  }
  return isNaN(ms) ? "N/A" : new Date(ms).toLocaleDateString();
}

/** Strip undefined and Firestore-invalid fields from object */
function sanitizeForFirestore(obj: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || k === "id") continue;
    if (typeof v === "object" && v !== null && "toDate" in (v as object)) continue; // skip Timestamp
    out[k] = v;
  }
  return out;
}

function toTimestamp(val: unknown): number {
  if (!val) return 0;
  if (typeof val === "object" && val !== null) {
    const o = val as Record<string, unknown>;
    if (typeof o.toDate === "function") return (o.toDate() as Date).getTime();
    const sec = o.seconds ?? (o as { _seconds?: number })._seconds;
    if (typeof sec === "number") return sec * 1000;
  }
  try {
    return new Date(val as string | number).getTime();
  } catch {
    return 0;
  }
}

function formatForDateInput(val: unknown): string | undefined {
  if (!val) return undefined;
  if (typeof val === "string" && /^\d{4}-\d{2}-\d{2}/.test(val)) return val;
  const ts = toTimestamp(val);
  if (!ts) return undefined;
  return new Date(ts).toISOString().slice(0, 10);
}

/** Map Firestore doc to JobPost, normalizing Timestamp fields */
function mapDocToJob(docSnap: { id: string; data: () => Record<string, unknown> }): JobPost {
  const data = docSnap.data();
  return {
    id: docSnap.id,
    title: String(data.title ?? ""),
    type: String(data.type ?? ""),
    location: String(data.location ?? ""),
    experience: String(data.experience ?? ""),
    summary: String(data.summary ?? ""),
    description: data.description ? String(data.description) : undefined,
    salary: data.salary ? String(data.salary) : undefined,
    deadline: formatForDateInput(data.deadline) ?? (data.deadline ? String(data.deadline) : undefined),
    featured: Boolean(data.featured),
    active: data.active !== false,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  } as JobPost;
}

export const JobService = {
  async createJob(job: Omit<JobPost, "id">): Promise<ApiResponse> {
    try {
      const payload = sanitizeForFirestore(job as unknown as Record<string, unknown>);
      const docRef = await addDoc(collection(db, JOBS_COLLECTION), {
        ...payload,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      return {
        success: true,
        message: "Job posted successfully",
        data: { id: docRef.id },
      };
    } catch (error: unknown) {
      console.error("Error creating job:", error);
      return {
        success: false,
        message: "Failed to create job posting",
        error: error instanceof Error ? error.message : String(error),
      };
    }
  },

  async updateJob(id: string, job: Partial<JobPost>): Promise<ApiResponse> {
    try {
      const docRef = doc(db, JOBS_COLLECTION, id);
      const payload = sanitizeForFirestore(job as unknown as Record<string, unknown>);
      delete payload.createdAt; // never update createdAt
      await updateDoc(docRef, {
        ...payload,
        updatedAt: serverTimestamp(),
      });
      return {
        success: true,
        message: "Job updated successfully",
      };
    } catch (error: unknown) {
      console.error("Error updating job:", error);
      return {
        success: false,
        message: "Failed to update job posting",
        error: error instanceof Error ? error.message : String(error),
      };
    }
  },

  async deleteJob(id: string): Promise<ApiResponse> {
    try {
      await deleteDoc(doc(db, JOBS_COLLECTION, id));
      return { success: true, message: "Job deleted successfully" };
    } catch (error: unknown) {
      console.error("Error deleting job:", error);
      return {
        success: false,
        message: "Failed to delete job posting",
        error: error instanceof Error ? error.message : String(error),
      };
    }
  },

  async getAllJobs(): Promise<JobPost[]> {
    try {
      const q = query(
        collection(db, JOBS_COLLECTION),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((d) => mapDocToJob({ id: d.id, data: d.data }));
    } catch (error) {
      console.error("Error fetching jobs (indexed query):", error);
      try {
        const snapshot = await getDocs(collection(db, JOBS_COLLECTION));
        const jobs = snapshot.docs.map((d) => mapDocToJob({ id: d.id, data: d.data }));
        jobs.sort((a, b) => {
          const aT = toTimestamp(a.createdAt);
          const bT = toTimestamp(b.createdAt);
          return bT - aT;
        });
        return jobs;
      } catch (fallbackError) {
        console.error("Error fetching jobs (fallback):", fallbackError);
        return [];
      }
    }
  },

  async getActiveJobs(): Promise<JobPost[]> {
    try {
      const allJobs = await this.getAllJobs();
      return allJobs.filter((job) => job.active !== false);
    } catch (error) {
      console.error("Error fetching active jobs:", error);
      return [];
    }
  },

  async getJobById(id: string): Promise<JobPost | null> {
    try {
      const docRef = doc(db, JOBS_COLLECTION, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const d = docSnap.data();
        return mapDocToJob({ id: docSnap.id, data: () => (d ?? {}) as Record<string, unknown> });
      }
      return null;
    } catch (error) {
      console.error("Error fetching job:", error);
      return null;
    }
  },

  async saveApplication(data: {
    firstName: string;
    lastName: string;
    email: string;
    mobile?: string;
    position: string;
    lastCompany?: string;
    qualification?: string;
    overallExperience?: string;
    message?: string;
    jobId?: string;
  }): Promise<ApiResponse> {
    try {
      await addDoc(collection(db, JOB_APPLICATIONS_COLLECTION), {
        ...data,
        createdAt: serverTimestamp(),
      });
      return { success: true, message: "Application submitted" };
    } catch (error: unknown) {
      console.error("Error saving application:", error);
      return {
        success: false,
        message: "Failed to save application",
        error: error instanceof Error ? error.message : String(error),
      };
    }
  },

  subscribeToJobs(callback: (jobs: JobPost[]) => void) {
    try {
      const q = query(
        collection(db, JOBS_COLLECTION),
        orderBy("createdAt", "desc")
      );
      return onSnapshot(
        q,
        (snapshot) => {
          const jobs = snapshot.docs.map((d) => mapDocToJob({ id: d.id, data: d.data }));
          callback(jobs);
        },
        (err) => {
          console.error("Jobs subscription error:", err);
          getDocs(collection(db, JOBS_COLLECTION)).then((snap) => {
            const jobs = snap.docs.map((d) => mapDocToJob({ id: d.id, data: d.data }));
            jobs.sort((a, b) => toTimestamp(b.createdAt) - toTimestamp(a.createdAt));
            callback(jobs);
          }).catch(() => callback([]));
        }
      );
    } catch (error) {
      console.error("Error subscribing to jobs:", error);
      return () => {};
    }
  },
};
