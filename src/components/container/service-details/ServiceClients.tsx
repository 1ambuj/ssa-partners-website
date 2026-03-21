import React from "react";
import Image from "next/image";

import one from "public/images/client/1.png";
import two from "public/images/client/2.png";
import three from "public/images/client/3.png";
import four from "public/images/client/4.png";
import five from "public/images/client/5.png";

const clientImages = [one, two, three, four, five];

const ServiceClients = () => {
  return (
    <div className="client-area bg-light pd-top-90 pd-bottom-90">
      <div className="container text-center">
        <h2 className="mb-4">Our Clients</h2>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {clientImages.map((img, idx) => (
            <div key={idx} className="col-6 col-md-4 col-lg text-center mb-4 mb-lg-0">
              <div className="thumb">
                <Image src={img} alt="Client" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceClients;
