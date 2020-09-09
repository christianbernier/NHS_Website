import React from "react";
import GlobalCSS from "../components/GlobalCSS";
import Header from "../components/Header";
import BleedPictureHeader from "../components/BleedPictureHeader";
import BodyHeader from "../components/BodyHeader";
import BodyText from "../components/BodyText";
import Gap from "../components/Gap.js";
import Footer from "../components/Footer.js";
import CurrentProjects from "../components/CurrentProjects.js";
import LinkBox from "../components/LinkBox.js";

import HeaderImageProjects from "../../assets/headers/projects.jpg";

export default () => {
  return (
    <>
      <GlobalCSS />
      <Header />
      <div id="content_area">
        <BleedPictureHeader
          imgsrc={HeaderImageProjects}
          header="Projects"
          height="500px"
        />
        <BodyHeader text="How do NHS projects work?" line={true} />
        <BodyText
          paragraphs={[
            "Every NHS member is required to complete 20 hours of community service to retain their membership. These 20 hours must include at least 15 NHS-approved hours, which can only be obtained through NHS projects.",
            "In order to accumulate NHS hours, choose a project from the list below. Once you have completed the project, submit the hours request form below to log your hours to the members list. ",
          ]}
        />
        <LinkBox
          text="Submit hours for review"
          link="https://docs.google.com/forms/d/e/1FAIpQLSftGg1te7jfOF0s3vuA_rkdm1VmQrFw1Vz67dzDCGsIfLJnnA/viewform"
        />
        <Gap height="20px"/>
        <BodyText
          paragraphs={[
            "NHS also works with the Learning Center (room 712) to offer academic help for students. If you would like more information, please email Ms. Solomon (vsolomon@lexingtonma.org).",
            "If you would like to be a peer tutor (and earn NHS hours), please fill out the form below."
          ]}
        />
        <LinkBox
          text="Become a peer tutor"
          link="https://docs.google.com/forms/d/e/1FAIpQLSfSDGLjagSbPqyzptK6c7mb3pgihBWOuD3RvIO8Ty-bCfXSIA/viewform"
        />
        <Gap height="20px"/>
        <BodyText
          paragraphs={[
            "If you would like to add a project, please fill out the form below and you will be informed if the project is approved or denied.",
            "Please note: the approval of new projects and project hours may take up to one week.",
          ]}
        />
        <LinkBox
          text="Submit a new project"
          link="https://docs.google.com/forms/d/e/1FAIpQLSezlVfSCwjh29Yx6E4fxyoO3UF8dF45uTbtTZbNTjCbJoYQLw/viewform"
        />

        <Gap height="20px" />
        <BodyHeader text="Current projects" line={true} />
        <CurrentProjects />
        <Gap height="50px" />
        <Footer />
      </div>
    </>
  );
};
