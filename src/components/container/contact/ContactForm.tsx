/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import Image from "next/image";

import One from "public/images/about/4.png";
import Two from "public/images/icon/8.png";
import Three from "public/images/icon/9.png";
import Four from "public/images/icon/10.png";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send");
      }
      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send");
    }
  }

  return (
    <div
      id="contact-page-area"
      className="contact-page-area bg-sky pd-top-120 pd-bottom-120 bg-relative"
    >
      <Image
        className="left_image_bounce position-top-right"
        src={One}
        alt="img"
      />
      <div className="container">
        <div className="contact-page-inner">
          <div className="row justify-content-center">
            <div className="col-lg-6 pe-xl-5">
              <h3 className="mb-xl-5 mb-4">Write a message</h3>
              <form onSubmit={onSubmit}>
                <div className="single-input-inner style-bg">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="single-input-inner style-bg">
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="single-input-inner style-bg">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="single-input-inner style-bg">
                  <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
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
            <div className="col-lg-6">
              <div className="section-title mb-0 mt-5 mt-lg-0">
                <h6 className="sub-title">// Quick Contact</h6>
                <h2 className="title">
                  Solutions: all your questions answered
                </h2>
                <p className="content">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione
                </p>
                <div className="media single-list-media style-3 mt-4">
                  <div className="media-left">
                    <Image src={Two} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <p>Have any question?</p>
                    <h4>Free +88 (7800) 0002</h4>
                  </div>
                </div>
                <div className="media single-list-media style-3 mt-4">
                  <div className="media-left">
                    <Image src={Three} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <p>Write email</p>
                    <h4>wostix@gmail.com</h4>
                  </div>
                </div>
                <div className="media single-list-media style-3 mt-4 mb-0">
                  <div className="media-left">
                    <Image src={Four} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <p>Visit anytime</p>
                    <h4>30 golden street. New York</h4>
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
