import React from "react";
import { Link } from "react-router-dom";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  const navLinks = props.navigation.map((link, index) => {
    return link.navSide ? (
      <li key={index}>
        {link.url === "#contact" ? 
          (
            <a
          onClick={props.clicked}
          href={link.url}
          title={"Link to " + link.title}
        >
          {link.title}
        </a>
          )

          :
          <Link
          onClick={props.clicked}
          to={link.url}
          title={"Link to " + link.title}
        >
          {link.title}
        </Link>
      
        }
        {/* <a
          onClick={props.clicked}
          href={link.url}
          title={"Link to " + link.title}
        >
          {link.title}
        </a> */}
        {/* <Link
          onClick={props.clicked}
          to={link.url}
          title={"Link to " + link.title}
        >
          {link.title}
        </Link> */}
      </li>
    ) : null;
  });

  return (
    <nav className={drawerClasses}>
      <ul>{navLinks}</ul>
    </nav>
  );
};

export default sideDrawer;
