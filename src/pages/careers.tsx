"use client";

import React, { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { JobService, formatJobDate } from "@/lib/jobService";
import { JobPost } from "@/lib/types";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const cvEmail = siteConfig.email.sandeep;
const mailtoCvUrl = (subject?: string) => {
  const subj = subject ? encodeURIComponent(`CV Application - ${subject}`) : encodeURIComponent("CV - Job Application");
  const body = encodeURIComponent(
    "Dear Hiring Team,\n\nPlease find my CV attached. I am interested in opportunities at SS Partners.\n\nThank you."
  );
  return `mailto:${cvEmail}?subject=${subj}&body=${body}`;
};

const CareersPage: React.FC = () => {
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<JobPost | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [applyingJob, setApplyingJob] = useState<JobPost | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    position: "",
    lastCompany: "",
    qualification: "",
    overallExperience: "",
    message: "",
  });
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      setLoadError("");
      try {
        const activeJobs = await JobService.getActiveJobs();
        setJobs(activeJobs);
      } catch (err) {
        console.error("Failed to load jobs:", err);
        setLoadError("Unable to load openings. Please check your connection or try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  const handleApply = (job: JobPost) => {
    setApplyingJob(job);
    setForm((f) => ({ ...f, position: job.title || "" }));
    setFormOpen(true);
    setSelectedJob(null);
    setSubmitError("");
    setSubmitSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);
    const position = form.position || applyingJob?.title || "General";
    try {
      // Save to Firestore
      const dbResult = await JobService.saveApplication({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        mobile: form.mobile || undefined,
        position,
        lastCompany: form.lastCompany || undefined,
        qualification: form.qualification || undefined,
        overallExperience: form.overallExperience || undefined,
        message: form.message || undefined,
        jobId: applyingJob?.id,
      });

      // Send email notification via API
      const res = await fetch("/api/job-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          mobile: form.mobile,
          position,
          lastCompany: form.lastCompany,
          qualification: form.qualification,
          overallExperience: form.overallExperience,
          message: form.message,
          jobId: applyingJob?.id,
        }),
      });
      const json = await res.json().catch(() => ({}));

      if (!dbResult.success && !json.ok) {
        setSubmitError("Could not submit. Please try emailing your CV directly.");
        return;
      }
      setSubmitSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        position: "",
        lastCompany: "",
        qualification: "",
        overallExperience: "",
        message: "",
      });
      setTimeout(() => {
        setApplyingJob(null);
        setFormOpen(false);
        setSubmitSuccess(false);
      }, 2000);
    } catch (err) {
      console.error("Apply error:", err);
      setSubmitError("Something went wrong. Please try again or email your CV.");
    }
  };

  const formatDate = (d: JobPost["createdAt"]) => formatJobDate(d);

  return (
    <Layout
      meta="Careers - Join Our Team | SSA Chartered Accountants"
      header={true}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <div className="banner-area pd-bottom-120 banner-small-inner bg-light bg-relative bg-cover">
        <div className="container">
          <h4>Careers</h4>
          <h3>Join Our Team</h3>
          <p className="col-lg-8 px-0">
            Build your career with a forward-thinking firm that values innovation,
            professional growth, and work-life balance.
          </p>
        </div>
      </div>

      <div className="container pd-top-90 pd-bottom-90">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h6 className="sub-title left-line">{/* Current Openings */}</h6>
              <h2 className="title">We&apos;re Hiring</h2>
              <p className="content mt-3 mb-0">
                We&apos;re looking for talented professionals to join our growing team.
                Explore our current opportunities and find your perfect fit.
              </p>
            </div>
          </div>
        </div>

          {loadError ? (
          <div className="text-center py-5">
            <i className="fas fa-exclamation-triangle fa-3x text-warning mb-3" />
            <h5>Could not load openings</h5>
            <p className="text-muted mb-4">{loadError}</p>
            <p className="small text-muted">
              You can still send your CV. We&apos;ll review it for future opportunities.
            </p>
            <a href={mailtoCvUrl()} className="btn btn-base border-radius">
              <i className="fas fa-envelope me-2" /> Email Your CV
            </a>
          </div>
        ) : loading ? (
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border" style={{ color: "var(--main-color)" }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : jobs.length > 0 ? (
          <div className="row g-4">
            {jobs.map((job) => (
              <div key={job.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 careers-card border">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="badge rounded-pill px-3 py-2 careers-badge">{job.type}</span>
                      {job.featured && <span className="badge rounded-pill px-3 py-2" style={{ background: "var(--main-color)", color: "#fff" }}>Featured</span>}
                    </div>
                    <h5 className="card-title" style={{ color: "var(--heading-color)" }}>{job.title}</h5>
                    <div className="mb-2">
                      <span className="badge rounded-pill px-3 py-1 me-1 careers-badge">{job.location}</span>
                      {job.experience && <span className="badge rounded-pill px-3 py-1 careers-badge">{job.experience}</span>}
                    </div>
                    <p
                      className="card-text text-muted small"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {job.summary}
                    </p>
                    <small className="text-muted d-block mb-3">{formatDate(job.createdAt)}</small>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-sm btn-border-black border-radius"
                        onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                      >
                        View Details
                      </button>
                      <button className="btn btn-sm btn-base border-radius" onClick={() => handleApply(job)}>
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <i className="fas fa-briefcase fa-3x text-muted mb-3" />
            <h5>No current openings</h5>
            <p className="text-muted">
              We&apos;re not actively hiring at the moment. Send your CV and we&apos;ll keep you in mind.
            </p>
            <a href={mailtoCvUrl()} className="btn btn-base border-radius">
              <i className="fas fa-envelope me-2" /> Email Your CV
            </a>
          </div>
        )}

        <div className="row mt-5 pt-5 pd-top-60">
          <div className="col-lg-10 mx-auto">
            <div className="section-title text-center mb-4">
              <h6 className="sub-title left-line">{/* Why Join Us */}</h6>
              <h2 className="title">Build Your Career With Us</h2>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-5">
                  <div className="d-flex gap-3 p-3 p-lg-4 rounded bg-light">
                    <div className="flex-shrink-0 color-main">
                      <i className="fas fa-chart-line" style={{ fontSize: "1.5rem" }} />
                    </div>
                    <div>
                      <h5 className="mb-2">Professional Growth</h5>
                      <p className="content mb-0 small">
                        Continuous learning, certifications, and mentorship from industry experts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="d-flex gap-3 p-3 p-lg-4 rounded bg-light">
                    <div className="flex-shrink-0 color-main">
                      <i className="fas fa-users" style={{ fontSize: "1.5rem" }} />
                    </div>
                    <div>
                      <h5 className="mb-2">Collaborative Culture</h5>
                      <p className="content mb-0 small">
                        Flat hierarchy with open communication and supportive team environment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="d-flex gap-3 p-3 p-lg-4 rounded bg-light">
                    <div className="flex-shrink-0 color-main">
                      <i className="fas fa-globe" style={{ fontSize: "1.5rem" }} />
                    </div>
                    <div>
                      <h5 className="mb-2">Global Exposure</h5>
                      <p className="content mb-0 small">
                        Work on real-world, cross-border projects with international clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="d-flex gap-3 p-3 p-lg-4 rounded bg-light">
                    <div className="flex-shrink-0 color-main">
                      <i className="fas fa-balance-scale" style={{ fontSize: "1.5rem" }} />
                    </div>
                    <div>
                      <h5 className="mb-2">Work-Life Balance</h5>
                      <p className="content mb-0 small">
                        Flexible working hours, remote options, and understanding management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            <div className="text-center mt-5">
              <p className="content mb-3">
                Don&apos;t see a perfect match? Send us your CV and we&apos;ll keep you in mind.
              </p>
              <a href={mailtoCvUrl()} className="btn btn-base border-radius">
                <i className="fas fa-envelope me-2" /> Email Your CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {selectedJob && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setSelectedJob(null)}
        >
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedJob.title}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedJob(null)} />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <span className="badge rounded-pill me-1 careers-badge">{selectedJob.type}</span>
                  <span className="badge rounded-pill me-1 careers-badge">{selectedJob.location}</span>
                  {selectedJob.experience && <span className="badge rounded-pill careers-badge">{selectedJob.experience}</span>}
                </div>
                <p>{selectedJob.summary}</p>
                {selectedJob.description && (
                  <div
                    className="small"
                    dangerouslySetInnerHTML={{ __html: selectedJob.description }}
                  />
                )}
                {selectedJob.salary && (
                  <p className="mb-1"><strong>Salary:</strong> {selectedJob.salary}</p>
                )}
                {selectedJob.deadline && (
                  <p className="mb-0"><strong>Deadline:</strong> {new Date(selectedJob.deadline).toLocaleDateString()}</p>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-border-black border-radius" onClick={() => setSelectedJob(null)}>Close</button>
                <button className="btn btn-base border-radius" onClick={() => handleApply(selectedJob)}>
                  Apply for this Position
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {formOpen && applyingJob && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setFormOpen(false)}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{ color: "var(--heading-color)" }}>Apply for {applyingJob.title}</h5>
                <button type="button" className="btn-close" onClick={() => setFormOpen(false)} />
              </div>
              <form onSubmit={handleSubmit} className="modal-body">
                {submitSuccess && (
                  <div className="alert alert-success py-3">
                    Thank you! Your application has been submitted. We&apos;ll be in touch soon.
                  </div>
                )}
                {submitError && (
                  <div className="alert alert-danger py-3">{submitError}</div>
                )}
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      value={form.firstName}
                      onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.lastName}
                      onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Mobile</label>
                    <input
                      type="tel"
                      className="form-control"
                      value={form.mobile}
                      onChange={(e) => setForm((f) => ({ ...f, mobile: e.target.value }))}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Position Applied For</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.position}
                      onChange={(e) => setForm((f) => ({ ...f, position: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Current/Last Company</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.lastCompany}
                      onChange={(e) => setForm((f) => ({ ...f, lastCompany: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Qualification</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.qualification}
                      onChange={(e) => setForm((f) => ({ ...f, qualification: e.target.value }))}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Experience</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.overallExperience}
                      onChange={(e) => setForm((f) => ({ ...f, overallExperience: e.target.value }))}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Cover Letter / Message</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="mt-4 d-flex gap-2">
                  <button type="submit" className="btn btn-base border-radius">Submit Application</button>
                  <button type="button" className="btn btn-border-black border-radius" onClick={() => setFormOpen(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CareersPage;
