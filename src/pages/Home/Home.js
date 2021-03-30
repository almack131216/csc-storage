import React, { useEffect } from "react";
// import parse from "html-react-parser";
// import { Link } from "react-router-dom";
import TitleTextImg from "../../components/TitleTextImg/TitleTextImg";
import TitleSection from "../../components/TitleSection/TitleSection";
import Services from "../../components/Services/Services";

const Home = props => {
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
      <TitleSection
            id={siteData.services.id}
            title={siteData.services.title}
            class="bg-white"
          />
      <Services id="services-list" data={siteData.services} />
    </React.Fragment>
  );
};

export default Home;
