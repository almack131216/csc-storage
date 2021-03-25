import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import TitleSection from "../TitleSection/TitleSection";
import parse from "html-react-parser";

const contactList = props => {
  return (
    <ul id={props.id ? props.id : null} className="contact-list">
      {/* <a href="mailto:alex@amactive.net">{props.data.email}</a> */}
      <li><FontAwesomeIcon icon={faPhoneAlt} />{props.list.telephone}</li>
      <li><FontAwesomeIcon icon={faEnvelope} /><a href={`mailto:${props.list.emailMailto}`}>{props.list.email}</a></li>
      <li><FontAwesomeIcon icon={faMapMarkerAlt} />{props.list.address}</li>
    </ul>
  );
};

export default contactList;
