import React, { useEffect } from "react";
// import parse from "html-react-parser";
// import { Link } from "react-router-dom";
import TitleTextImg from "../../components/TitleTextImg/TitleTextImg";

const About = props => {
  const siteData = props.siteData;

  useEffect(() => {
    // ConsoleLog('[About]');
    window.scrollTo(0, 0);
    // setDocumentTitle(`About ${SiteData.brand.name}`);
  }, []);
  // (END) useEffect

  return (
    <React.Fragment>
      <TitleTextImg 
        id="home"
        title={siteData.home.title}
        body={siteData.home.body}
        contact={siteData.contact}
        class="bg-primary"
      />
      <section>
        <div className="content-inner body-text">
          <h1>Why choose us?</h1>

          <p>We provide maintained long and short term secure indoor storage for classic and modern cars. With 30 years' experience in the classic car industry, we are well placed to understand exactly how to keep your car in optimum condition whilst not in regular use.</p>
          <p>Our purpose-built enclosed transporters can collect your vehicle, or you can deliver your car to any of our sites in the Malton area. On arrival your car will be cleaned, photographed, and inspected before being placed into our secure facility. Once in storage, it will be protected using a high-quality soft cover with regular battery checks and conditioning. Your vehicle will be comprehensively insured whilst in our possession and our secure premises are alarmed and under manned surveillance 24 hours a day.</p>
          <p>Whilst in our care, we can arrange various lubrication and maintenance packages and regular road testing should you require this service. Prior to your car being returned to you it will receive a complimentary valet, with all levels checked.</p>
          <p>We offer competitive storage rates, so please contact us if you wish to discuss storing your vehicle with us or are interested in any of the other services we offer.</p>
          {/* <p>
            <strong>More information</strong> on our
            <Link
              className="margin-left-1"
              to="/history"
              title="Link to Classic & Sportscar Centre history page"
            >
              History Page{" "}
            </Link>
          </p> */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
