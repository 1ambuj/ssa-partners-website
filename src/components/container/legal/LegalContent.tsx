import React from "react";
import type { LegalSection } from "@/data/terms";

type LegalContentProps = {
  title: string;
  intro?: string;
  sections: LegalSection[];
};

const LegalContent = ({ title, intro, sections }: LegalContentProps) => {
  return (
    <section className="legal-page">
      <div className="container">
        <div className="legal-page-card">
          <h1>{title}</h1>
          {intro ? <p className="legal-intro">{intro}</p> : null}

          {sections.map((section) => (
            <div key={section.heading} className="legal-section">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, idx) => (
                <p key={`${section.heading}-${idx}`}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalContent;
