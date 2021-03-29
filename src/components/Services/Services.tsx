import * as React from "react";
import { Link } from "react-router-dom";
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
    // const myServices = ...this.props.data.items;
    const myServices = this.props.data.items.map(
      (item: { title: string; icon: string; text: string, img: any, more: string  }, index: number) => {
        return (
          <div className="item" key={index}>
            <div className="img-area">
              <img src={item.img.src} />
            </div>
            <div className="text-area">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {/* <a href={item.more} className="btn btn-light">More Information</a> */}
              <Link
                className="margin-left-1"
                to={item.more}
                title="Link to more information page"
              >
                More Information
              </Link>
            </div>
          </div>
        );
      }
    );

    return (
      <section id={this.props.id ? this.props.id : null} className={myClass}>
        <div className="section-inner">
          <div className="css-grid services">{myServices}</div>
        </div>
      </section>
    );
  }
}

export default services;
