import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import TitleSection from "../TitleSection/TitleSection";
import parse from "html-react-parser";

const contact = props => {
  return (
    <footer id={props.id ? props.id : null} className="bg-fourth">
      <TitleSection title="Contact" class="bg-fourth" />
      <h4>{props.data.name}</h4>
      
      {/* <a href="mailto:alex@amactive.net">{props.data.email}</a> */}
      <p><FontAwesomeIcon icon={faEnvelope} />{props.data.email}</p>
      {/* // <p className="email">
      //   <FontAwesomeIcon icon={faEnvelope} />
      //   {props.data.email}
      // </p> */}
      <hr className="dotted" />
      <p className="copyright">{parse(props.data.copyright)}</p>
      {/* <a id="to-top" href="#top" className="btn btn-dark btn-lg">
        <i className="fa fa-chevron-up fa-fw fa-1x"></i>
      </a> */}
    </footer>
  );
};

export default contact;
