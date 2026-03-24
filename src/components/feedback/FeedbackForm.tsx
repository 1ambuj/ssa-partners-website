"use client";

import React, { useState, useEffect } from "react";
import { FeedbackForm as FeedbackFormType } from "@/lib/types";
import { FeedbackService } from "@/lib/feedbackService";
import { useAuth } from "@/lib/AuthContext";

const FeedbackForm: React.FC = () => {
  const { userData } = useAuth();
  const [formData, setFormData] = useState<FeedbackFormType>({
    clientName: "",
    email: "",
    phone: "",
    company: "",
    overallRating: 5,
    serviceQuality: 5,
    communication: 5,
    timeliness: 5,
    costValue: 5,
    wouldRecommend: 5,
    comments: "",
    service: "",
    serviceRating: 5,
    createdAt: new Date(),
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (userData?.email) {
      setFormData((prev) => ({
        ...prev,
        email: userData.email || prev.email,
        clientName: userData.name || prev.clientName,
        company: userData.company || prev.company,
      }));
    }
  }, [userData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const numVal = parseInt(value, 10);
    setFormData({
      ...formData,
      [name]: name.includes("Rating") && !isNaN(numVal) ? numVal : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Please enter a valid email address");
        setLoading(false);
        return;
      }

      // Validate phone
      if (formData.phone.replace(/\D/g, "").length < 10) {
        setError("Please enter a valid phone number");
        setLoading(false);
        return;
      }

      // Submit to Firebase
      const firebaseResult = await FeedbackService.submitFeedback(formData);

      if (firebaseResult.success) {
        // Also send to API for email notification
        const apiResponse = await fetch("/api/feedback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!apiResponse.ok) {
          console.error("Failed to send email notification");
        }

        setSubmitted(true);
        setFormData({
          clientName: "",
          email: "",
          phone: "",
          company: "",
          overallRating: 5,
          serviceQuality: 5,
          communication: 5,
          timeliness: 5,
          costValue: 5,
          wouldRecommend: 5,
          comments: "",
          service: "",
          serviceRating: 5,
          createdAt: new Date(),
        });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(firebaseResult.error || "Failed to submit feedback");
      }
    } catch (err: any) {
      setError(err.message || "Failed to submit feedback");
      console.error("Feedback submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const RatingSelect: React.FC<{
    label: string;
    name: keyof FeedbackFormType;
  }> = ({ label, name }) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className="form-select"
        id={name}
        name={name}
        value={
          typeof formData[name] === "number" ? String(formData[name]) : ""
        }
        onChange={handleChange}
      >
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>
    </div>
  );

  return (
    <div className="feedback-form">
      <div className="banner-area pd-bottom-60 banner-small-inner bg-light bg-relative bg-cover">
        <div className="container">
          <h4>Client Feedback</h4>
          <h3>Share Your Feedback</h3>
          <p className="col-lg-6 px-0">
            We value your feedback and would like to hear about your experience with our services.
          </p>
        </div>
      </div>

      <div className="container pd-top-80 pd-bottom-120">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {submitted && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Thank you!</strong> Your feedback has been submitted successfully.
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSubmitted(false)}
                ></button>
              </div>
            )}

            {error && (
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {error}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setError("")}
                ></button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="feedback-form-inner">
              <h5 className="mb-3">Your Information</h5>

              <div className="row">
                <div className="col-md-6">
                  <div className="single-input-inner style-bg mb-4">
                    <label htmlFor="clientName" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="clientName"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-input-inner style-bg mb-4">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="single-input-inner style-bg mb-4">
                    <label htmlFor="phone" className="form-label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-input-inner style-bg mb-4">
                    <label htmlFor="company" className="form-label">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Optional"
                    />
                  </div>
                </div>
              </div>

              <div className="single-input-inner style-bg mb-4">
                <label htmlFor="service" className="form-label">
                  Service Used
                </label>
                <select
                  className="form-select"
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service...</option>
                  <option value="Audit">Audit</option>
                  <option value="Advisory">Advisory</option>
                  <option value="Taxation">Taxation</option>
                  <option value="GST">GST</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <hr className="my-4" />
              <h5 className="mb-3">Rate Your Experience</h5>

              <RatingSelect label="Overall Rating *" name="overallRating" />
              <RatingSelect
                label="Service Quality"
                name="serviceQuality"
              />
              <RatingSelect label="Communication" name="communication" />
              <RatingSelect label="Timeliness" name="timeliness" />
              <RatingSelect label="Cost Value" name="costValue" />
              <RatingSelect label="Would Recommend" name="wouldRecommend" />

              {formData.service && (
                <RatingSelect
                  label={`Rating for ${formData.service}`}
                  name="serviceRating"
                />
              )}

              <div className="single-input-inner style-bg mb-4">
                <label htmlFor="comments" className="form-label">
                  Additional Comments *
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={5}
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Please share any additional feedback, suggestions, or comments..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-base border-radius w-100"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Feedback"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
