import React, { useEffect } from "react";
// import parse from "html-react-parser";
import { Link } from "react-router-dom";


const Transport = props => {
  useEffect(() => {
    // ConsoleLog('[About]');
    window.scrollTo(0, 0);
    // setDocumentTitle(`About ${SiteData.brand.name}`);
  }, []);
  // (END) useEffect

  return (
    <React.Fragment>
      <section>
        <div className="content-inner">
          <h1>Transport</h1>

          <p>
            <strong>More information</strong> on our
            <Link
              className="margin-left-1"
              to="/history"
              title="Link to Classic & Sportscar Centre history page"
            >
              History Page{" "}
            </Link>
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Transport;
