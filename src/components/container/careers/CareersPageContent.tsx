"use client";

import React, { useState, useEffect } from "react";
import { JobService, formatJobDate } from "@/lib/jobService";
import { JobPost } from "@/lib/types";
import { siteConfig } from "@/data/siteConfig";

const cvEmail = siteConfig.email.sandeep;
const mailtoCvUrl = (subject?: string) => {
  const subj = subject
    ? encodeURIComponent(`CV Application - ${subject}`)
    : encodeURIComponent("CV - Job Application");
  const body = encodeURIComponent(
    "Dear Hiring Team,\n\nPlease find my CV attached. I am interested in opportunities at SS Partners.\n\nThank you."
  );
  return `mailto:${cvEmail}?subject=${subj}&body=${body}`;
};

const benefits = [
  {
    title: "Professional Growth",
    tag: "Develop your expertise",
    body: "Continuous learning, certifications, and mentorship from industry experts.",
    point: "Structured learning paths",
  },
  {
    title: "Collaborative Culture",
    tag: "Work with the best",
    body: "Flat hierarchy with open communication and a supportive team environment.",
    point: "Open feedback & teamwork",
  },
  {
    title: "Global Exposure",
    tag: "Real client work",
    body: "Cross-border projects and international clients across industries.",
    point: "Diverse engagements",
  },
  {
    title: "Work–Life Balance",
    tag: "Sustainable pace",
    body: "Flexible arrangements and understanding management when it matters.",
    point: "Flexibility where possible",
  },
];

/**
 * Firebase-driven careers UI (pricing-style cards). Route: `/carrer`.
 * Uses real-time Firestore subscription (same approach as blog).
 */
const CareersPageContent: React.FC = () => {
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
    setLoading(true);
    setLoadError("");

    const unsubscribe = JobService.subscribeToJobs((allJobs) => {
      console.log("[Careers] Firestore returned", allJobs.length, "jobs");
      const active = allJobs.filter((j) => j.active !== false);
      setJobs(active);
      setLoading(false);
    });

    const fallbackTimer = setTimeout(async () => {
      if (loading) {
        try {
          const activeJobs = await JobService.getActiveJobs();
          setJobs(activeJobs);
        } catch (err) {
          console.error("Fallback job fetch failed:", err);
          setLoadError("Unable to load openings. Please try again later.");
        } finally {
          setLoading(false);
        }
      }
    }, 5000);

    return () => {
      if (typeof unsubscribe === "function") unsubscribe();
      clearTimeout(fallbackTimer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <>
      <div
        id="careers-openings"
        className="careers-page-area pricing-area bg-relative bg-sky pd-top-115 pd-bottom-90 "
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h6 className="sub-title">{"// Careers"}</h6>
                <h2 className="title">Join Our Team</h2>
                <p className="content mt-3 mb-0">
                  Explore current openings and apply in a few clicks. Cards use our polished pricing-style layout—hover
                  for the accent border and button feedback.
                </p>
              </div>
            </div>
          </div>

          {loadError ? (
            <div className="row justify-content-center pd-top-60">
              <div className="col-lg-8 text-center">
                <div className="single-pricing-inner text-center career-state-card">
                  <h4>Could not load openings</h4>
                  <p className="month">Something went wrong</p>
                  <p>{loadError}</p>
                  <p className="small" style={{ color: "#65645f" }}>
                    You can still send your CV—we&apos;ll review it for future opportunities.
                  </p>
                  <a href={mailtoCvUrl()} className="btn btn-black border-radius mt-2">
                    <i className="fas fa-envelope me-2" /> Email Your CV
                  </a>
                </div>
              </div>
            </div>
          ) : loading ? (
            <div className="d-flex justify-content-center pd-top-60">
              <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : jobs.length > 0 ? (
            <div className="row pd-top-60">
              {jobs.map((job) => (
                <div key={job.id} className="col-lg-4 col-md-6 mb-5">
                  <div
                    className={`single-pricing-inner career-job-card${job.featured ? " featured-job" : ""}`}
                  >
                    {job.featured ? <span className="career-featured-ribbon">Featured</span> : null}
                    <h4>{job.title}</h4>
                    <h2 className="career-job-type">{job.type}</h2>
                    <div className="career-meta-chips">
                      <span className="career-chip">{job.location}</span>
                      {job.experience ? <span className="career-chip">{job.experience}</span> : null}
                    </div>
                    <p className="career-summary">{job.summary}</p>
                    <ul>
                      <li>Posted {formatDate(job.createdAt)}</li>
                      {job.salary && <li>{job.salary}</li>}
                    </ul>
                    <div className="career-actions">
                      <button
                        type="button"
                        className="btn btn-black border-radius"
                        onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                      >
                        View Details
                      </button>
                      <button
                        type="button"
                        className="btn btn-base border-radius"
                        onClick={() => handleApply(job)}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="row justify-content-center pd-top-60">
              <div className="col-lg-8 text-center">
                <div className="single-pricing-inner text-center career-state-card">
                  <h4>No current openings</h4>
                  <p className="month">Check back soon</p>
                  <p>
                    We&apos;re not actively hiring right now. Send your CV and we&apos;ll keep you in mind for future
                    roles.
                  </p>
                  <a href={mailtoCvUrl()} className="btn btn-black border-radius mt-2">
                    <i className="fas fa-envelope me-2" /> Email Your CV
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="careers-page-area pricing-area bg-relative pd-top-90 pd-bottom-90 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h6 className="sub-title">{"// Why SSA"}</h6>
                <h2 className="title">Build Your Career With Us</h2>
              </div>
            </div>
          </div>
          <div className="row pd-top-60">
            {benefits.map((b) => (
              <div key={b.title} className="col-lg-3 col-md-6">
                <div className="single-pricing-inner text-center career-benefit-card">
                  <h4>{b.title}</h4>
                  <p className="month">{b.tag}</p>
                  <p>{b.body}</p>
                  <ul>
                    <li>{b.point}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pd-top-60">
            <p className="content mb-3">Don&apos;t see a perfect match? Send us your CV anyway.</p>
            <a href={mailtoCvUrl()} className="btn btn-black border-radius">
              <i className="fas fa-envelope me-2" /> Email Your CV
            </a>
          </div>
        </div>
      </div>

      {selectedJob && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setSelectedJob(null)}
          role="presentation"
        >
          <div className="modal-dialog modal-dialog-centered career-detail-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content border-0 career-modal-shell">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title" style={{ color: "var(--heading-color)" }}>
                  {selectedJob.title}
                </h5>
                <button type="button" className="btn-close" onClick={() => setSelectedJob(null)} aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="career-meta-chips mb-3">
                  <span className="career-chip">{selectedJob.type}</span>
                  <span className="career-chip">{selectedJob.location}</span>
                  {selectedJob.experience ? (
                    <span className="career-chip">{selectedJob.experience}</span>
                  ) : null}
                </div>
                <p>{selectedJob.summary}</p>
                {selectedJob.description && (
                  <div className="small mt-3" dangerouslySetInnerHTML={{ __html: selectedJob.description }} />
                )}
                {selectedJob.salary && (
                  <p className="mb-1 mt-3">
                    <strong>Salary:</strong> {selectedJob.salary}
                  </p>
                )}
                {selectedJob.deadline && (
                  <p className="mb-0">
                    <strong>Deadline:</strong> {new Date(selectedJob.deadline).toLocaleDateString()}
                  </p>
                )}
              </div>
              <div className="modal-footer border-0 pt-0">
                <button type="button" className="btn btn-black border-radius" onClick={() => setSelectedJob(null)}>
                  Close
                </button>
                <button type="button" className="btn btn-base border-radius" onClick={() => handleApply(selectedJob)}>
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
          role="presentation"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content border-0 career-modal-shell">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title" style={{ color: "var(--heading-color)" }}>
                  Apply for {applyingJob.title}
                </h5>
                <button type="button" className="btn-close" onClick={() => setFormOpen(false)} aria-label="Close" />
              </div>
              <form onSubmit={handleSubmit} className="modal-body">
                {submitSuccess && (
                  <div className="alert alert-success py-3">
                    Thank you! Your application has been submitted. We&apos;ll be in touch soon.
                  </div>
                )}
                {submitError && <div className="alert alert-danger py-3">{submitError}</div>}
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
                <div className="mt-4 d-flex gap-2 flex-wrap">
                  <button type="submit" className="btn btn-black border-radius">
                    Submit Application
                  </button>
                  <button type="button" className="btn btn-base border-radius" onClick={() => setFormOpen(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CareersPageContent;
