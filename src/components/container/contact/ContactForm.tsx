/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import SsaBrochureMark from "@/components/ui/SsaBrochureMark";

const ContactForm = () => {
  const { addresses, email, phone, contact } = siteConfig;
  const subjects = contact.subjects;

  const initial = {
    name: "",
    designation: "",
    organisation: "",
    officeAddress: "",
    city: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  };

  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send");
      }
      setStatus("success");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send message.");
    }
  }

  return (
    <div
      id="contact-page-area"
      className="contact-page-area bg-sky pd-top-120 pd-bottom-120 bg-relative"
    >
      <SsaBrochureMark
        className="left_image_bounce position-top-right"
        size="lg"
        tone="blue"
      />
      <div className="container">
        <div className="contact-page-inner">
          <div className="row justify-content-center">
            <div className="col-lg-6 pe-xl-5" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
              <h3 className="mb-xl-5 mb-4">Write a message</h3>
              <form onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-input-inner style-bg">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name *"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner style-bg">
                      <input
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        value={form.designation}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner style-bg">
                      <input
                        type="text"
                        name="organisation"
                        placeholder="Organisation"
                        value={form.organisation}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner style-bg">
                      <input
                        type="text"
                        name="officeAddress"
                        placeholder="Office Address"
                        value={form.officeAddress}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner style-bg">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={form.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner style-bg">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner style-bg">
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile"
                        value={form.mobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner style-bg">
                      <select
                        className="contact-subject-select"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                      >
                        <option value="">Subject of Query</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="single-input-inner style-bg">
                  <textarea
                    name="message"
                    placeholder="Message *"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                {status === "success" ? (
                  <div className="alert alert-success mt-3" role="status">
                    Message sent successfully.
                  </div>
                ) : null}
                {status === "error" ? (
                  <div className="alert alert-danger mt-3" role="alert">
                    {error || "Failed to send message."}
                  </div>
                ) : null}
                <div className="btn-wrap">
                  <button
                    className="btn btn-black border-radius"
                    type="submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send A Message"}
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
              <div className="section-title mb-0 mt-5 mt-lg-0">
                <h6 className="sub-title">// Quick Contact</h6>
                <h2 className="title">Get in touch with us</h2>
                <p className="content">
                  Have a question or want to work with us? Reach out via phone,
                  email or visit our offices.
                </p>
                <div className="media single-list-media style-3 mt-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                  <div className="media-left">
                    <i className="fa fa-phone" aria-hidden="true" />
                  </div>
                  <div className="media-body align-self-center">
                    <p>Call us</p>
                    <h4>
                      <a href={`tel:${phone.main.replace(/\s/g, "")}`}>{phone.main}</a>
                    </h4>
                  </div>
                </div>
                <div className="media single-list-media style-3 mt-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                  <div className="media-left">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </div>
                  <div className="media-body align-self-center">
                    <p>Email us</p>
                    <h4>
                      <a href={`mailto:${email.info}`}>{email.info}</a>
                    </h4>
                  </div>
                </div>
                <div className="media single-list-media style-3 mt-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                  <div className="media-left">
                    <i className="fa fa-map-marker-alt" aria-hidden="true" />
                  </div>
                  <div className="media-body align-self-center">
                    <p>Gurgaon Office</p>
                    <h4>{addresses.gurgaon.full}</h4>
                    <p className="mb-1 mt-1">
                      <a href={`tel:${addresses.gurgaon.phone.replace(/\s/g, "")}`}>{addresses.gurgaon.phone}</a>
                      {" · "}
                      <a href={`mailto:${addresses.gurgaon.email}`}>{addresses.gurgaon.email}</a>
                    </p>
                  </div>
                </div>
                <div className="media single-list-media style-3 mt-4 mb-0" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="700">
                  <div className="media-left">
                    <i className="fa fa-map-marker-alt" aria-hidden="true" />
                  </div>
                  <div className="media-body align-self-center">
                    <p>Delhi Office</p>
                    <h4>{addresses.delhi.full}</h4>
                    <p className="mb-0 mt-1">
                      <a href={`tel:${addresses.delhi.phone.replace(/\s/g, "")}`}>{addresses.delhi.phone}</a>
                      {" · "}
                      <a href={`mailto:${addresses.delhi.email}`}>{addresses.delhi.email}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
