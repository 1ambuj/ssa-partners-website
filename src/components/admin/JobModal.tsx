"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { JobPost } from "@/lib/types";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const JOB_TYPE_OPTIONS = ["Full-time", "Part-time", "Contract", "Internship", "Remote", "Hybrid"];
const EXPERIENCE_OPTIONS = ["Fresher", "0-1 years", "1-3 years", "3-5 years", "5-8 years", "8+ years"];
const LOCATION_OPTIONS = ["Delhi", "Gurgaon", "Remote", "Hybrid", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Pune"];

interface JobModalProps {
  show: boolean;
  job: Partial<JobPost>;
  onHide: () => void;
  onSave: (job: Partial<JobPost>) => Promise<void>;
}

const JobModal: React.FC<JobModalProps> = ({ show, job, onHide, onSave }) => {
  const [formData, setFormData] = useState<Partial<JobPost>>({
    title: "",
    type: "",
    location: "",
    experience: "",
    summary: "",
    description: "",
    salary: "",
    deadline: "",
    featured: false,
    active: true,
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (show) {
      setFormData({
        id: job.id,
        title: job.title ?? "",
        type: job.type ?? "",
        location: job.location ?? "",
        experience: job.experience ?? "",
        summary: job.summary ?? "",
        description: job.description ?? "",
        salary: job.salary ?? "",
        deadline: job.deadline ?? "",
        featured: job.featured ?? false,
        active: job.active !== false,
      });
    }
  }, [show, job]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.type || !formData.location || !formData.experience || !formData.summary) {
      alert("Please fill in all required fields");
      return;
    }
    setSaving(true);
    try {
      await onSave(formData);
      onHide();
    } catch (err) {
      console.error(err);
      alert("Failed to save job");
    } finally {
      setSaving(false);
    }
  };

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop fade show" style={{ display: "block" }} onClick={onHide} />
      <div className="modal fade show d-block admin-job-modal" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-lg modal-dialog-scrollable" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content admin-job-modal-content">
            <div className="modal-header admin-job-modal-header">
              <h5 className="modal-title">{job.id ? "Edit Job" : "Add Job"}</h5>
              <button type="button" className="btn-close" onClick={onHide} disabled={saving} />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body admin-job-modal-body" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Job Title *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.title}
                      onChange={(e) => setFormData((s) => ({ ...s, title: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Job Type *</label>
                    <select
                      className="form-select"
                      value={formData.type}
                      onChange={(e) => setFormData((s) => ({ ...s, type: e.target.value }))}
                      required
                    >
                      <option value="">Select type</option>
                      {JOB_TYPE_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Location *</label>
                    <select
                      className="form-select"
                      value={formData.location}
                      onChange={(e) => setFormData((s) => ({ ...s, location: e.target.value }))}
                      required
                    >
                      <option value="">Select location</option>
                      {LOCATION_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Experience *</label>
                    <select
                      className="form-select"
                      value={formData.experience}
                      onChange={(e) => setFormData((s) => ({ ...s, experience: e.target.value }))}
                      required
                    >
                      <option value="">Select experience</option>
                      {EXPERIENCE_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Job Summary *</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      value={formData.summary}
                      onChange={(e) => setFormData((s) => ({ ...s, summary: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Detailed Description</label>
                    <div style={{ minHeight: 200 }}>
                      <ReactQuill
                        theme="snow"
                        value={formData.description || ""}
                        onChange={(html) => setFormData((s) => ({ ...s, description: html }))}
                        style={{ minHeight: 180 }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Salary Range</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.salary || ""}
                      onChange={(e) => setFormData((s) => ({ ...s, salary: e.target.value }))}
                      placeholder="e.g., 3-5 LPA"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Application Deadline</label>
                    <input
                      type="date"
                      className="form-control"
                      value={formData.deadline || ""}
                      onChange={(e) => setFormData((s) => ({ ...s, deadline: e.target.value }))}
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="jobFeatured"
                        checked={!!formData.featured}
                        onChange={(e) => setFormData((s) => ({ ...s, featured: e.target.checked }))}
                      />
                      <label className="form-check-label" htmlFor="jobFeatured">Featured Job</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="jobActive"
                        checked={formData.active !== false}
                        onChange={(e) => setFormData((s) => ({ ...s, active: e.target.checked }))}
                      />
                      <label className="form-check-label" htmlFor="jobActive">Active (Job is live and accepting applications)</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer admin-job-modal-footer">
                <button type="button" className="btn btn-border-black border-radius" onClick={onHide} disabled={saving}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-base border-radius" disabled={saving}>
                  {saving ? "Saving..." : job.id ? "Update Job" : "Add Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobModal;
