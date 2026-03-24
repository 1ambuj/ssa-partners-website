"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/router";
import BlogDashboard from "@/components/blog/BlogDashboard";
import JobList from "@/components/admin/JobList";
import JobModal from "@/components/admin/JobModal";
import { JobService } from "@/lib/jobService";
import { JobPost } from "@/lib/types";

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"blogs" | "jobs">("blogs");
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Partial<JobPost> | null>(null);
  const { isAdmin, currentUser, loading: authLoading, logout } = useAuth();
  const router = useRouter();

  const canAccess = isAdmin && currentUser;

  useEffect(() => {
    if (!authLoading && !canAccess && !currentUser) {
      router.replace("/login?role=admin");
    }
  }, [authLoading, canAccess, currentUser, router]);

  useEffect(() => {
    if (activeTab === "jobs") loadJobs();
  }, [activeTab]);

  const loadJobs = async () => {
    setJobsLoading(true);
    const allJobs = await JobService.getAllJobs();
    setJobs(allJobs);
    setJobsLoading(false);
  };

  const handleNewJob = () => {
    setEditingJob(null);
    setJobModalOpen(true);
  };

  const handleEditJob = (job: JobPost) => {
    setEditingJob(job);
    setJobModalOpen(true);
  };

  const handleDeleteJob = async (id: string) => {
    if (!window.confirm("Delete this job posting?")) return;
    const result = await JobService.deleteJob(id);
    if (result.success) {
      setJobs(jobs.filter((j) => j.id !== id));
    } else {
      alert(result.message);
    }
  };

  const handleSaveJob = async (job: Partial<JobPost>) => {
    if (job.id) {
      const result = await JobService.updateJob(job.id, job);
      if (result.success) {
        setJobModalOpen(false);
        setEditingJob(null);
        await loadJobs();
      } else {
        alert(result.message);
      }
    } else {
      const result = await JobService.createJob({
        title: job.title!,
        type: job.type!,
        location: job.location!,
        experience: job.experience!,
        summary: job.summary!,
        description: job.description,
        salary: job.salary,
        deadline: job.deadline,
        featured: !!job.featured,
        active: job.active !== false,
      });
      if (result.success) {
        setJobModalOpen(false);
        setEditingJob(null);
        await loadJobs();
      } else {
        alert(result.message);
      }
    }
  };

  if (authLoading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!canAccess && !currentUser) {
    return (
      <div className="alert alert-danger">Access denied. Please log in as Admin or Partner.</div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Admin Dashboard</h1>
        <div className="d-flex align-items-center gap-2">
          <div className="btn-group" role="group">
            <button
              type="button"
              className={`btn btn-sm ${activeTab === "blogs" ? "btn-base border-radius" : "btn-border-black border-radius"}`}
              onClick={() => setActiveTab("blogs")}
            >
              Blogs
            </button>
            <button
              type="button"
              className={`btn btn-sm ${activeTab === "jobs" ? "btn-black border-radius" : "btn-border-black border-radius"}`}
              onClick={() => setActiveTab("jobs")}
            >
              Jobs
            </button>
          </div>
          <button className="btn btn-border-black border-radius btn-sm" onClick={() => logout().then(() => router.push("/login"))}>
            Logout
          </button>
        </div>
      </div>

      {activeTab === "blogs" && <BlogDashboard />}

      {activeTab === "jobs" && (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Manage Job Postings</h5>
            <button className="btn btn-base border-radius" onClick={handleNewJob}>
              + New Job Post
            </button>
          </div>
          <JobList
            jobs={jobs}
            loading={jobsLoading}
            onEdit={handleEditJob}
            onDelete={handleDeleteJob}
          />
        </div>
      )}

      <JobModal
        show={jobModalOpen}
        job={editingJob || {}}
        onHide={() => {
          setJobModalOpen(false);
          setEditingJob(null);
        }}
        onSave={handleSaveJob}
      />
    </div>
  );
};

export default AdminDashboard;
