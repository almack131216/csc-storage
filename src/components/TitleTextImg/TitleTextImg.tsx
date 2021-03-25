import * as React from "react";
import parse from "html-react-parser";
import ContactList from "../ContactList/ContactList";

class titleTextImg extends React.Component<any, any> {
  render() {
    const myBody = this.props.body
      ? parse('<div class="body">' + this.props.body + "</div")
      : null;
    const mySubtitle = this.props.bodyStrong
      ? parse("<h3>" + this.props.bodyStrong + "</h3>")
      : null;
    const myClass = this.props.class ? this.props.class : "";
    const myContact = this.props.contact ? true : false;

    return (
      <section
        id={this.props.id ? this.props.id : null}
        className={"img-text " + myClass}
      >
        <div className="section-inner-img">
          &nbsp;
        </div>
        <div className="section-inner-text">
          <div className="inner">
            <h2>{parse(this.props.title)}</h2>
            {mySubtitle}
            {myBody}
            {myContact}
            {myContact ? <ContactList list={this.props.contact}/> : null}
          </div>
        </div>
      </section>
    );
  }
}

export default titleTextImg;
