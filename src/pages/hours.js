import React from "react";
import GlobalCSS from "../components/GlobalCSS";
import Header from "../components/Header";
import BleedPictureHeader from "../components/BleedPictureHeader";
import BodyHeader from "../components/BodyHeader";
import BodyText from "../components/BodyText";
import PopArea from "../components/PopArea";
import LinkBox from "../components/LinkBox";
import Gap from "../components/Gap.js";
import CheckHours from "../components/CheckHours.js";
import Footer from "../components/Footer.js";

import HeaderImageHours from "../../assets/headers/hours.jpg";

export default () => {
  return (
    <>
      <GlobalCSS />
      <Header />
      <div id="content_area">
        <BleedPictureHeader
          imgsrc={HeaderImageHours}
          header="Hours"
          height="500px"
        />
        <BodyHeader
          text="What are the requirements for NHS hours?"
          line={true}
        />
        <BodyText
          paragraphs={[
            "Every NHS member is required to complete 20 hours of community service to retain their membership. These 20 hours must include at least 15 NHS-approved hours for juniors and 10 NHS-approved hours for seniors, which can only be obtained through NHS projects.",
            "In order to accumulate NHS hours, choose a project from the projects list. Once you have completed the project, submit the form below to log your hours to the members list. Please note: hours may take up to a couple days to be approved."
          ]}
        />
        <LinkBox
          text="Submit hours for review"
          link="https://docs.google.com/forms/d/e/1FAIpQLSftGg1te7jfOF0s3vuA_rkdm1VmQrFw1Vz67dzDCGsIfLJnnA/viewform"
        />
        <Gap height="20px"/>
        <PopArea
          header="Note for Seniors"
          body="The 2020-2021 NHS year has begun, so hours for this year have been reset. If you did not meet the hour requirement last year (20 total hours), contact an NHS officer immedietely. Students with more than 20 hours completed last year will see that extra hours have rolled over into this year."
        />
        <Gap height="20px"/>
        <BodyHeader
          text="How many hours have I completed?"
          line={true}
        />
        <BodyText
          paragraphs={[
            "Please use the form below to check how many hours you have completed.",
            "If you believe the number is incorrect, please do not submit another request form linked above. Instead, email one of your NHS class officers."
          ]}
        />
        <CheckHours/>
        <Gap height="50px"/>
        <Footer/>
      </div>
    </>
  );
};
