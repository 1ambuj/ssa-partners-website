import Link from "next/link";

const AboutTopStrip = () => {
  return (
    <section className="about-top-strip">
      <div className="container">
        <div className="about-top-strip-inner">
          <div>
            <p className="about-top-strip-kicker">About</p>
            <h1>About Us</h1>
          </div>
          <div className="about-top-strip-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTopStrip;
