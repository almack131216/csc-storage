import * as React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import {
  faCircle,
  faCode,
  faPencilAlt,
  faTerminal,
  faShapes
} from "@fortawesome/free-solid-svg-icons";
// import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

library.add(faCircle, faCode, faPencilAlt, faTerminal, faShapes);

class services extends React.Component<any, any> {
  render() {
    const myClass = this.props.data.class ? this.props.data.class : "";
    // const mySkills = ...this.props.data.items;
    const mySkills = this.props.data.items.map(
      (item: { title: string; icon: string; text: string }, index: number) => {
        return (
          <div className="item" key={index}>
            <div className="icon-area">
              <span className="fa-stack">
                <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                <FontAwesomeIcon
                  icon={item.icon as IconName}
                  className="fa-stack-1x text-primary"
                />
              </span>
            </div>
            <div className="text-area">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {/* <!--<a href="#" className="btn btn-light">Learn More</a>--> */}
            </div>
          </div>
        );
      }
    );

    return (
      <section id={this.props.id ? this.props.id : null} className={myClass}>
        <div className="section-inner">
          <div className="css-grid services">{mySkills}</div>
        </div>
      </section>
    );
  }
}

export default services;
