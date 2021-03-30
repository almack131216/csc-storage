import React, { useEffect } from "react";
// import parse from "html-react-parser";
import { Link } from "react-router-dom";
import TitleTextImg from "../../components/TitleTextImg/TitleTextImg";
import TitleSection from "../../components/TitleSection/TitleSection";
import Services from "../../components/Services/Services";

const Accessories = props => {
  const siteData = props.siteData;
  siteData && console.log('1. ', siteData.services);
  const servicesBlocks = {
    // "id": "servicesTransport",
    // "class": "bg-white",
    // "title": "Services",
    "items": [siteData.services.items[0],siteData.services.items[1]]
  };
  // servicesBlocks.push(siteData.services.items[0]);
  // servicesBlocks.push(siteData.services.checked);//[siteData.services.about,siteData.services.checked];
  servicesBlocks && console.log('2. ', servicesBlocks);

  useEffect(() => {
    // ConsoleLog('[About]');
    window.scrollTo(0, 0);
    // setDocumentTitle(`About ${SiteData.brand.name}`);
  }, []);
  // (END) useEffect

  return (
    <React.Fragment>
      <TitleTextImg 
        id="accessories"
        title={siteData.accessories.title}
        body={siteData.accessories.body}
        // contact={siteData.contact}
        class="bg-primary"
      />
      <section>
        <div className="content-inner body-text">
          <h1>Accessories</h1>
          <p>We offer high quality indoor car covers at competitive prices, plus basic and luxury car maintenance kits, full of essentials like classic lubricants, fuel additives, anti-freeze, screen wash and brake fluid.</p>
        </div>
      </section>
      {/* {servicesBlocks && <Services id="services-list" data={servicesBlocks} />} */}
    </React.Fragment>
  );
};

export default Accessories;
