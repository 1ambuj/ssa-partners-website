import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  Timestamp,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import { FeedbackForm, ApiResponse } from "./types";

export const FeedbackService = {
  // Submit feedback
  async submitFeedback(feedback: FeedbackForm): Promise<ApiResponse> {
    try {
      await addDoc(collection(db, "feedback"), {
        ...feedback,
        createdAt: Timestamp.now(),
      });

      return {
        success: true,
        message: "Feedback submitted successfully",
      };
    } catch (error: any) {
      console.error("Error submitting feedback:", error);
      return {
        success: false,
        message: "Failed to submit feedback",
        error: error.message,
      };
    }
  },

  // Get all feedback
  async getAllFeedback(): Promise<FeedbackForm[]> {
    try {
      const q = query(collection(db, "feedback"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as FeedbackForm));
    } catch (error) {
      console.error("Error fetching feedback:", error);
      return [];
    }
  },

  // Subscribe to real-time feedback updates
  subscribeToFeedback(callback: (feedback: FeedbackForm[]) => void) {
    try {
      const q = query(collection(db, "feedback"), orderBy("createdAt", "desc"));
      return onSnapshot(q, (querySnapshot) => {
        const feedback = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        } as FeedbackForm));
        callback(feedback);
      });
    } catch (error) {
      console.error("Error subscribing to feedback:", error);
      return () => {};
    }
  },
};
