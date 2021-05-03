import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import parse from "html-react-parser";
import ContactList from "../ContactList/ContactList";

const contact = props => {
  return (
    <footer id="contact" className="bg-secondary">
      {/* <Link id={props.id ? props.id : null}>XXX</Link> */}
      <section>
        <div className="content-inner">
          <h2>{props.data.title}</h2>
          <p>{props.data.body}</p>
          <ContactList list={props.data} classes="inline" />
        </div>
      </section>
      <hr className="dotted" />
      <p className="copyright">
        {parse(props.data.copyright)}
        &nbsp;-&nbsp;
        <Link to="/privacy">Privacy</Link>
      </p>
    </footer>
  );
};

export default contact;
