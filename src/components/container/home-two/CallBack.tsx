/* eslint-disable react/jsx-no-comment-textnodes */
import { useState, useRef } from "react";
import Image from "next/image";

import One from "public/images/bg/10.png";
import Two from "public/images/bg/9.png";
import Three from "public/images/bg/8.png";
import Four from "public/images/bg/6.png";
import Five from "public/images/bg/7.png";

const CallBack = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);


  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  
    // clear previous timer (important)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  
    setStatus("sending");
    setError(null);
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send");
      }
  
      // success
      setStatus("success");
  
      // reset form
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
  
      // auto-hide message after 3 sec
      timeoutRef.current = setTimeout(() => {
        setStatus("idle");
      }, 3000);
  
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send");
    }
  }

  return (
    <div className="contact-area pd-top-110 bg-cover pd-bottom-120">
      <Image className="bg-img-1" src={One} alt="img" />
      <Image className="bg-img-2" src={Two} alt="img" />
      <Image
        className="bg-img-3 "
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="300"
        src={Five}
        alt="img"
      />
      <Image className="bg-img-4 left_image_bounce" src={Three} alt="img" />
      <div className="container">
        <div className="contact-inner">
          <div className="row">
            <div className="col-xl-7 col-lg-7 offset-xl-5 offset-lg-5">
              <div className="contact-from-inner">
                <Image
                  className="ci-bg-img-1 top_image_bounce"
                  src={Four}
                  alt="img"
                />
                <div className="section-title mb-4">
                  <h6 className="sub-title">// SEND A MESSAGE</h6>
                  <h2 className="title">Request a call back</h2>
                </div>
                <form onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-input-inner">
                        <input
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input-inner">
                        <input
                          type="tel"
                          placeholder="Phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input-inner">
                        <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input-inner" aria-hidden="true" />
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input-inner">
                        <textarea
                          placeholder="Your Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
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
                      <button
                        className="btn btn-black border-radius"
                        type="submit"
                        disabled={status === "sending"}
                      >
                        {status === "sending" ? "Sending..." : "Send A Message"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallBack;
