import * as React from "react";
import parse from "html-react-parser";
import ContactList from "../ContactList/ContactList";
class titleSection extends React.Component<any, any> {
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
        className={"title " + myClass}
      >
        <div className="section-inner">
          <h2>{parse(this.props.title)}</h2>
          {mySubtitle}
          {myBody}
          {myContact ? <ContactList list={this.props.contact}/> : null}
        </div>
      </section>
    );
  }
}

export default titleSection;
