import React, { useEffect } from "react";
import TitleTextImg from "../../components/TitleTextImg/TitleTextImg";
import Services from "../../components/Services/Services";
import { setDocumentTitle, ConsoleLog } from "../../assets/js/Helpers";

const Accessories = props => {
  const siteData = props.siteData;
  // siteData && ConsoleLog('1. ', siteData.services);
  const servicesBlocks = {
    "items": [siteData.services.items[0],siteData.services.items[1]]
  };
  servicesBlocks && ConsoleLog('2. ', servicesBlocks);

  useEffect(() => {
    ConsoleLog('[Accessories]');
    window.scrollTo(0, 0);
    setDocumentTitle('Accessories | Classic Car Storage');
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
          <h1>Maintenance kits</h1>
          <p>We offer high quality indoor car covers at competitive prices, plus basic and luxury car maintenance kits, full of essentials like classic lubricants, fuel additives, anti-freeze, screen wash and brake fluid.</p>
        </div>
      </section>
      {servicesBlocks && <Services id="services-list" data={servicesBlocks} />}
    </React.Fragment>
  );
};

export default Accessories;
