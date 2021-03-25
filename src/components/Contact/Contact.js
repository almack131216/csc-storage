import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import TitleSection from "../TitleSection/TitleSection";
import parse from "html-react-parser";
import ContactList from "../ContactList/ContactList";

const contact = props => {
  return (
    <footer id={props.id ? props.id : null} className="bg-secondary">
      <div className="inner">
        <TitleSection title={props.data.title} class="bg-secondary" />
        <p>{props.data.body}</p>
        <ContactList list={props.data}/>
      </div>
      <hr className="dotted" />
      <p className="copyright">{parse(props.data.copyright)}</p>
    </footer>
  );
};

export default contact;
