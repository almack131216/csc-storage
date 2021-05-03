import React, { useEffect } from "react";
// import parse from "html-react-parser";
// import { Link } from "react-router-dom";
import TitleTextImg from "../../components/TitleTextImg/TitleTextImg";

const Privacy = props => {
  const siteData = props.siteData;

  useEffect(() => {
    // ConsoleLog('[About]');
    window.scrollTo(0, 0);
    // setDocumentTitle(`About ${SiteData.brand.name}`);
  }, []);
  // (END) useEffect

  return (
    <React.Fragment>
      <section>
        <div className="content-inner body-text">
          <h1>Privacy Policy H1</h1>
          <p>This privacy policy explains how personal data is collected and used when you use our websites. It also explains how we process any data that you supply to us on this website.</p> 
          <p>Classic &amp; Sportscar Limited is the Data Controller for any personal data that you supply to us as part of the services you are contracted to receive from us. As our client, you are our data subject.</p>
          <h4>Our address is:</h4>
          <p>Classic &amp; Sportscar Ltd<br />Corner Farm<br />West Knapton<br />Malton<br />YO17 8JB</p>
          <p>Telephone 01944 758000<br />Email <span className="color-link-accent">sales@classicandsportscar.ltd.uk</span></p>
          <p>The Group has a Data Protection Officer, Susan Whitham, who can be contacted at <span className="color-link-accent">accounts@classicandsportscar.ltd.uk</span> at Corner Farm, West Knapton, Malton, YO17 8JB.</p>
          <h4>What personal data we collect</h4>
          <p>The personal data collected depends on how you use our website. You can browse the site, you can fill in a form on the website to request information, download information from us, or you can subscribe to our emails, and other activities through e-mail and request form. The Group's websites collect personal data to provide these services.</p>
          <p>We collect information about you when you instruct us to provide advice; visit our website; subscribe to our newsletters or to receive our publications; apply for employment with us; and engage in business dealings with us.</p>
          <h4>What we do with your personal data</h4>
          <p>When you visit our website, a record of your visit is made. This data includes your device's IP address. That data is used completely anonymously, in order to determine the number of people who visit our website and the most frequently used sections of the site. This enables us to continually update and refine the site. If you use any forms on the website to send an email to us, a record will also be made of your email address and your telephone number.</p>
          <p>The following table sets out how we handle your personal data and our legal basis for doing so under GDPR and the Data Protection Act 2018.</p>
          <p>&nbsp;</p>
          <table className="table">
            <tbody>
              <tr>
                <th width="30%">What we do</th>
                <th width="70%">Our legal basis under GDPR</th>
              </tr>                    
              <tr>
                <td>
                Use the personal data that you provide on our web forms and questionnaires
                </td>
                <td>
                Article 6(1)(b) – when you provide us with your personal data, for instance to obtain a quote for our services, this is a necessary step to take at the request of the data subject prior to entering into a contract
                </td>
              </tr>
              <tr>
                <td>
                Contact you regarding the services we provide
                </td>
                <td>
                Article 6(1)(f) – we need to contact you for our legitimate interests so that we can gather more information for the provision of our services/products, or to deliver those services most effectively
                </td>
              </tr>
              <tr>
                <td>
                Retain your data under our data retention policy after your contract has expired
                </td>
                <td>
                Article 6(1)(f) – we need to retain your personal data for only as long as necessary under the law to protect our legitimate interests
                </td>
              </tr>
              <tr>
                <td>
                Where you require us to make Reasonable Adjustments to enable you to attend a meeting or interview, we may require further information from you.
                </td>
                <td>
                Article 9(2)(a) of GDPR (explicit consent).
                <br />
                <br />
                If this includes information about your physical or mental health, such information (being sensitive personal data, Special Category data), will only be used by us, with your explicit consent, to assess your eligibility for Reasonable Adjustments. We will not share or disclose it to others.
                <br />
                <br />
                You can withdraw your consent as anytime by contacting us. Please note that we may not be able to process your request for Reasonable adjustments if you do this.
                </td>
              </tr>
            </tbody>
          </table>
          <p>The following table sets out the categories of personal data that we obtain.</p>
          <table className="table">
            <tbody>
              <tr>
                <th width="30%">Personal Data</th>
                <th width="70%">Explanation</th>
              </tr>                    
              <tr>
                <td>
                Name, postal address, email address, website, identification number, location data, online identifier – these are classed as personal data
                </td>
                <td>
                This data is provided by you on our web form to request information or a service from us.
                <br />
                <br />
                This data may be provided if you apply for a job opportunity in the Group.
                </td>
              </tr>
            </tbody>
          </table>

          <p>We may collect, hold, use and disclose the information collected to compile statistical data and to; maintain our database; develop/improve our website; respond to any email enquiries; notify you of any upcoming marketing, or other events that you have opted in to; provide you with publications; manage quality control; manage systems administration; attend to compliance issues; provide you or your organisation with advice and determine suitability for employment.</p>
          <p>We will not use or disclose your personal information for any other purpose which is not related (or in the case of sensitive information, directly related) to the above purposes without your consent unless otherwise authorised, required or permitted under the laws of England and Wales. The Group does not sell your data to third parties.</p>
          <p>If you no longer wish to receive information about our services, please send an email to our Group Data Protection and Compliance Officer (<span className="color-link-accent">accounts@classicandsportscar.ltd.uk</span>) advising that you do not wish to receive further information.</p>

          <h4>Will we disclose your data?</h4>
          <p>Personal data will only be disclosed on a confidential basis to external providers (such as the DVLA) so that they can provide administrative services in connection with the operation of our business; and to any person (where necessary) in connection with their services, such as law enforcement, regulatory authorities, partners or advisors; or to companies within the Classic & Sportscar Limited Group.</p>

          <h4>How long we keep your personal data</h4>
          <p>Personal data from our data subjects is retained in line with our data retention policy. The Group keeps most data for 7 years, which covers the 6 years by law in which we have to keep certain information for a minimum of 6 years plus the current year. Personal data that is no longer necessary to be kept under the Group's data retention policy will be deleted. Under the Group's data retention policy, there are certain exemptions in relation to financial data and health data. A copy of the Group's data retention policy can be made available upon request.</p>

          <h4>Your Rights</h4>
          <p>You have the following rights in relation to personal data held on you by the Group:</p>
          <ul className="bullets">
            <li>The right to be informed about how personal data is used – (this notice)</li>
            <li>The right to access a copy of personal data that the Group holds about you</li>
            <li>The right to rectification of any errors in personal data held by the Group</li>
            <li>The right to erasure of any personal data</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to object</li>
            <li>Rights in relation to automated decision making including profiling</li>
          </ul>

          <p>
            If you wish to learn more about these rights and how they operate, please look at the ICO's website <a href="https://ico.org.uk/for-the-public/" target="_blank" title="Link to this page in a new window">https://ico.org.uk/for-the-public/</a>.
          </p>
          <p>
            The Group does not operate any automated decision making systems.
          </p>
          <p>
            You have a right to request a copy of the personal data that we hold about you. If you would like a copy of some or all of your personal data please email <span className="color-link-accent">accounts@classicandsportscar.ltd.uk</span> or write to our Group Data Protection and Compliance Officer at Classic & Sportscar Ltd, Corner Farm, West Knapton, Malton, YO17 8JB. Proof of your identity will be required for security purposes.
          </p>
          <p>
            If you are unhappy with the response that you receive from us when you exercise your GDPR rights or Data Protection Act 2018 rights, you have the right to lodge a complaint to the ICO. More guidance about raising a complaint with us is available on the ICO's website <a href="https://ico.org.uk/make-a-complaint/" target="_blank" title="Link to this page in a new window">https://ico.org.uk/make-a-complaint/</a> and for raising a complaint with the ICO, more information is available on <a href="https://ico.org.uk/concerns/" target="_blank" title="Link to this page in a new window">https://ico.org.uk/concerns/</a>.
          </p>
          <h4>Cookies</h4>
          <p>
          This website uses Google Analytics, a web analytics service provided by Google, Inc. Google Analytics sets a cookie in order to evaluate your use of this website and compile reports for us on activity on the website. Google stores the information collected by the cookie on servers in the United States and the transfer of the data to servers in the USA is governed by the EU-US Privacy Shield framework. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf. Google will not associate your IP address with any other data held by Google. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above. More information about Google's compliance with GDPR can be obtained from their website: <a href="https://privacy.google.com/businesses/compliance" target="_blank" title="Link to this page in a new window">Google Compliance</a>.
          </p>
          <p>
          Cookies are text files placed on your computer to collect standard internet log information and visitor behaviour information. This information is used to track visitor use of the website and to compile statistical reports on website activity. For further information visit <a href="https://www.aboutcookies.org" target="_blank" title="Link to this page in a new window">www.aboutcookies.org</a>.
          </p>
          <p>
          You can set your browser not to accept cookies and the above websites tell you how to remove cookies from your browser. However, in a few cases some of our website features may not function as a result.
          </p>
          <h4>Other websites</h4>
          <p>
          Our website may contain links to other sites. This privacy policy only applies to this website so when you link to other websites you should read their own privacy policy.
          </p>
          <h4>How to contact us</h4>
          <p>Please review the website regularly as this statement may change from time to time. If you have any questions about our privacy policy or information we hold about you please contact:</p>
          <p>Group Data Protection and Compliance Officer</p>
          <p>Telephone 01944 758000</p>
          <p>Email <span className="color-link-accent">accounts@classicandsportscar.ltd.uk</span></p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Privacy;
