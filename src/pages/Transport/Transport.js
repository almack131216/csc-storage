import React, { useEffect } from "react";
// import parse from "html-react-parser";
import { Link } from "react-router-dom";
import TitleTextImg from "../../components/TitleTextImg/TitleTextImg";
import TitleSection from "../../components/TitleSection/TitleSection";
import Services from "../../components/Services/Services";

const Transport = props => {
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
        id="transport"
        title={siteData.transport.title}
        body={siteData.transport.body}
        contact={siteData.contact}
        class="bg-primary"
      />
      <section>
        <div className="content-inner body-text">
          <h1>Logistics</h1>
          <p>Collection and drop off can be made with as little as 24 hours’ notice from our main site at Corner Farm, West Knapton, Malton. If you would prefer to have your vehicle collected or delivered, our purpose built versatile enclosed car transporters are tailored to our specific needs.</p>
          <p>We have a state of the art 12-metre vehicle featuring adjustable air suspension, hydraulic rear door/ramp, winch, vehicle lift, height sensors and adaptive cruise control. This very capable 16-ton DAF LF55 can carry up to three vehicles. We also have a lightweight enclosed single car transporter ideal for smaller sports cars and individual car collections.</p>
          <p>This summer a third fully enclosed 7.2 ton transporter will arrive. This will be capable of making larger vehicle deliveries into less accessible locations which are unsuitable for HGV access.</p>          
        </div>
      </section>
      {servicesBlocks && <Services id="services-list" data={servicesBlocks} />}
    </React.Fragment>
  );
};

export default Transport;
