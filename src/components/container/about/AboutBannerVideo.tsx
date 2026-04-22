import Image from "next/image";

import One from "public/images/bg/shape1.png";

const ABOUT_VIDEO_SRC = "/videos/220941_medium.mp4";

const AboutBannerVideo = () => {
  return (
    <div className="bg-light cus-abo-vid about-video-showcase-outer about-video-showcase-full">
      <div className="banner-video-area banner-video-area-2 about-video-showcase">
        <Image
          className="top_image_bounce banner-animate-image-1"
          src={One}
          alt=""
        />
        <div className="about-video-showcase-frame">
          <div className="slider banner-slider about-banner-single-video">
            <div className="slide-item text-center about-banner-video-slide">
              <video
                className="about-banner-video-media"
                src={ABOUT_VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="About SSA — firm highlight"
              />
            </div>
          </div>
          <div className="banner-content-area about-video-showcase-cta">
            <p>From</p>
            <h2>2010</h2>
          </div>
        </div>
        <Image
          className="top_image_bounce banner-animate-image"
          src={One}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutBannerVideo;
