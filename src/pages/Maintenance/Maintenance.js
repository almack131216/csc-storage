import React, { useEffect } from "react";
// import parse from "html-react-parser";
// import { Link } from "react-router-dom";
import TitleTextImg from "../../components/TitleTextImg/TitleTextImg";
import Services from "../../components/Services/Services";
import { setDocumentTitle, ConsoleLog } from "../../assets/js/Helpers";

const Maintenance = props => {
  const siteData = props.siteData;
  siteData && ConsoleLog('1. ', siteData.services);
  const servicesBlocks = {
    "items": [siteData.services.items[2],siteData.services.items[5]]
  };
  // servicesBlocks.push(siteData.services.items[0]);
  // servicesBlocks.push(siteData.services.checked);//[siteData.services.about,siteData.services.checked];
  servicesBlocks && ConsoleLog('2. ', servicesBlocks);

  useEffect(() => {
    ConsoleLog('[Maintenance]');
    window.scrollTo(0, 0);
    setDocumentTitle(`Maintenance | Classic Car Storage`);
  }, []);
  // (END) useEffect

  return (
    <React.Fragment>
      <TitleTextImg 
        id="maintenance"
        title={siteData.maintenance.title}
        body={siteData.maintenance.body}
        // contact={siteData.contact}
        class="bg-primary"
      />
      <section>
        <div className="content-inner body-text">
          <h1>Preparation & Maintenance</h1>
          <p>Once your vehicle is in our care, it will be anti-freeze checked, cleaned and placed under a dust cover in our secured indoor unit. We then carry out regular battery conditioning, tyre pressure checks and if required we can periodically road test your car to ensure it remains in good driving condition.</p>
          <p>With our own in house Bodyshop, Trim Shop and Service Garage, we have become a one-stop-shop for the classic car enthusiast.  We can carry out all types of repairs and improvements to your car including paintwork, dealing with rust issues, dents, scratches, upholstery work, service and maintenance.</p>
          <p>You may wish to have your car serviced after a period of storage, or perhaps have classic car rally preparation work completed prior to event. We are here to discuss any aspect of your ongoing maintenance and preparation needs.</p>          
        </div>
      </section>
      {servicesBlocks && <Services id="services-list" data={servicesBlocks} />}
    </React.Fragment>
  );
};

export default Maintenance;
