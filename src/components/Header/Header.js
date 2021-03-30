import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// import parse from "html-react-parser";

const header = props => {
  return (
    <section className="header-banner bg-white">
      <div className="section-inner">
        <a href="/" className="logo-img">
          <img src={props.data.img.src} alt={props.data.img.alt} />
        </a>
      </div>
    </section>
  );
};

export default header;
