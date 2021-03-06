import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import parse from "html-react-parser";

const contactList = props => {
  let classes = ["contact-list"];
  if (props.classes) {
    classes.push(props.classes);
  }

  return (
    <ul id={props.id ? props.id : null} className={classes.join(" ")}>
      {/* <a href={`mailto:${props.list.emailMailto}`}>{props.data.email}</a> */}
      <li><FontAwesomeIcon icon={faPhoneAlt} />{props.list.telephone}</li>
      <li><FontAwesomeIcon icon={faEnvelope} /><a href={`mailto:${props.list.emailMailto}`}>Send Email</a></li>
      {/* <li className="email-full"><FontAwesomeIcon icon={faEnvelope} /><a href={`mailto:${props.list.emailMailto}`}>{props.list.email}</a></li>
      <li className="email-compact"><FontAwesomeIcon icon={faEnvelope} /><a href={`mailto:${props.list.emailMailto}`}>Email</a></li> */}
      <li><FontAwesomeIcon icon={faMapMarkerAlt} />{props.list.address}</li>
    </ul>
  );
};

export default contactList;
