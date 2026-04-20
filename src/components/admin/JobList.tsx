"use client";

import React from "react";
import { JobPost } from "@/lib/types";
import { formatJobDate } from "@/lib/jobService";

interface JobListProps {
  jobs: JobPost[];
  loading: boolean;
  onEdit: (job: JobPost) => void;
  onDelete: (id: string) => void;
  onView?: (job: JobPost) => void;
}

const JobList: React.FC<JobListProps> = ({
  jobs,
  loading,
  onEdit,
  onDelete,
}) => {
  if (loading) {
      return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border" style={{ color: "var(--main-color)" }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="alert alert-info">
        <i className="fas fa-briefcase me-2" /> No jobs posted yet. Get started by adding your first job posting.
      </div>
    );
  }

  return (
    <div className="table-responsive admin-job-table-wrap">
      <table className="table table-hover admin-job-table">
        <thead className="table-light">
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Location</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>
                <strong>{job.title}</strong>
                {job.featured && (
                  <span className="badge rounded-pill ms-2" style={{ background: "var(--main-color)", color: "#fff" }}>Featured</span>
                )}
              </td>
              <td>{job.type}</td>
              <td>{job.location}</td>
              <td>
                {job.active !== false ? (
                  <span className="badge rounded-pill px-2" style={{ background: "var(--main-color)", color: "#fff" }}>Active</span>
                ) : (
                  <span className="badge rounded-pill bg-secondary">Inactive</span>
                )}
              </td>
              <td>{formatJobDate(job.createdAt)}</td>
              <td className="text-end align-middle">
                <div className="admin-job-actions">
                  <button
                    className="btn btn-sm btn-border-black border-radius"
                    onClick={() => onEdit(job)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger border-radius"
                    onClick={() => job.id && onDelete(job.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
