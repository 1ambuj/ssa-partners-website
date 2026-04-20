"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/router";
import Image from "next/image";
import BlogDashboard from "@/components/blog/BlogDashboard";
import JobList from "@/components/admin/JobList";
import JobModal from "@/components/admin/JobModal";
import SsaBrochureMark from "@/components/ui/SsaBrochureMark";
import { JobService } from "@/lib/jobService";
import { JobPost } from "@/lib/types";
import One from "public/images/about/4.png";

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"blogs" | "jobs">("blogs");
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Partial<JobPost> | null>(null);
  const { isAdmin, currentUser, loading: authLoading, logout } = useAuth();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const canAccess = isAdmin && !!currentUser;
  const sectionTitle = activeTab === "blogs" ? "Blog Management" : "Job Management";

  useEffect(() => {
    if (authLoading) return;
    if (!canAccess) {
      const timer = setTimeout(() => {
        setChecked(true);
      }, 600);
      return () => clearTimeout(timer);
    }
    setChecked(true);
  }, [authLoading, canAccess]);

  useEffect(() => {
    if (checked && !canAccess) {
      router.replace("/login?role=admin");
    }
  }, [checked, canAccess, router]);

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

  if (authLoading || !checked) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!canAccess) {
    return (
      <div className="alert alert-danger m-4">
        Access denied. Only admin users can access this dashboard.
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="banner-area bg-relative pd-bottom-120 banner-small-inner bg-light bg-relative bg-cover text-center">
        <SsaBrochureMark
          className="left_image_bounce position-bottom-left"
          size="lg"
          tone="blue"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4
                className=""
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
               Admin Dashboard
              </h4>
              <h3
                className=""
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="400"
              >
                Blog And Job Management
              </h3>

              <div
                className="scroll-down top_image_bounce"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                <a href="#admin-dashboard-controls">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="40"
                    height="80"
                    viewBox="0 0 40 80"
                  >
                    <image
                      id="scroll"
                      width="40"
                      height="80"
                      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABQCAYAAABrjzfBAAADwElEQVRoge2bP1LbQBTGP5xQsCoiThD7BIgTxL5BOEGcE0CqlIaSytClg5wA0qUzOQHmBEY3EIW2JfM833oW2bIl78rSJPpmdjwGefent3/13tOeOjjAluoDiAB84mfIIkoAPLM8AXhgWVKq9drWywIKwCmAMwBTq/EpoRLrui5LnzcR8toLgs/lC1AqHwEYArgGcGs3UlACe07YBegmwE6BusViMwAvAHpspCwc+Bu5wQGAGMCE39dqkwXHAD4DOGE3+lSXkPep1t/y6s2zYMgfHwI4rgAOtKjU3Q2UegyUClddlAc4YTcMrYFfhZJU6xNOtruigGNrvOxEqdbSVhwoNc629z7zfcgxd7wrOEuydElXx6nWV+bP9iQxg3aw5SzdSvYyEygVkaGXaj0fWnYXyzr3c5dwWaVaT7nOjsy/jAVrsR5W7CSczTNjRWPBEVf32qxnxK695phcWHBWh/WQsxcHSkmPPqZaH3a4mSdNsJ5RqrWwTAOl+gbwTzPQ3kgW70gAj/LOajVLmOYW7Dapey3JknPUZECZF6HM4leZzXVRrDuwBkq9Fjmw1qoW0FUtoKv+O8CZ5/raLnZWC+iqFtBVLaCrWkBXtYCuagFd9c8BRg5tmeBOKZUFfAQgz9E3JRqL6CCfbXOgLQu4R//1Hhsbbbj+lDcVM9ZS2kGQdaIX0ZTOdok4TXj9xYrfmdBZz8W14jJJpNGBFRmwNbTCXk5+H9dZbCDHVigWtJ4Xj62PZeaZ0YEzfh/6jBb48m6FnKlmZhe23q68W3Yg+8mnv9HnTvKLgPce6/QKaPzcXkO3PgGfM59etM1CnaekCldye9xyVQvoqhbQVR0TcmoaGCPviQH80ACmrOYxxA63pjrSUDZJAOMOg9n9BgIK09RY8KgBQFnN0/g6PIXIo+HHppAxqSJMtX4wy4ykgXytmcuWSZNZpKUskmkqznZb0orEnkWSkWR/GAsmmQefOvVFrMfUlDfJZaGV4FNFQuNGC2ath8xWl9BDcFfHzsKdQ+AuDBxyclivuLPsZNIYCwZKiWEkd/DNMMtLsp3wGaNySAEMlBJvWZRqvbSj5Z1mTiy3WZXdHRKuy7G/pDzAhPtzTPdZacdjAUWs+yXVemAyLrN6t7+/v66q30zwvqElYw/rpNTzHcAPAJep1ufrLi5yYL2l+Xscm2W8q7a63CFmzM/ucUKuVdHnYpO23LUcl2JJ2Y7kNGTefLB9NFLstyWkyJZaardyfV1DipyEzJsP9usaUmTBlxuQz/KvawD4CybGJEiPys7UAAAAAElFTkSuQmCC"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4 mb-4" id="admin-dashboard-controls">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <h6 className="mb-0">{sectionTitle}</h6>
          <div className="d-flex align-items-center gap-2">
            <div
              className="btn-group"
              role="group"
              aria-label="Admin dashboard tabs"
            >
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
      </div>

      {activeTab === "blogs" && <BlogDashboard />}

      {activeTab === "jobs" && (
        <div>
          <div className="d-column justify-content-between align-items-center mb-3">
            <h1 className="mb-4">Manage Job Postings</h1>
            <button className="btn btn-base border-radius btn-sm px-5 py-2" onClick={handleNewJob}>
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
