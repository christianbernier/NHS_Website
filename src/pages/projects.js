/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * projects.js — Page with project information and list of current projects
 * © 2020-2021 to National Honor Society Lexington, MA Chapter
 * 
 * Created by Christian Bernier on 2020-09-05
 */

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
import { Helmet } from "react-helmet-async";

import HeaderImageProjects from "../../assets/headers/projects.jpg";

export default () => {
  return (
    <>
      <GlobalCSS />
      <Helmet>
        <title>Projects | NHS</title>
        <meta property="og:title" content="Projects | NHS" />
      </Helmet>
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
            "Every NHS member is required to complete 20 hours of community service to retain their membership. These 20 hours must include at least 15 NHS-approved hours for juniors or 10 NHS-approved hours for seniors, which can only be obtained through NHS projects.",
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
            "If you would like to add a project, please fill out the form below and you will be informed if the project is approved or denied. Please note: the approval of new projects and project hours may take up to one week."
          ]}
        />
        <LinkBox
          text="Submit a new project"
          link="https://docs.google.com/forms/d/e/1FAIpQLSezlVfSCwjh29Yx6E4fxyoO3UF8dF45uTbtTZbNTjCbJoYQLw/viewform"
        />
        <BodyHeader text="NHS special projects" line={true}/>
        <BodyText
          paragraphs={[
            "The Learning Center (room 712) offers LHS students tutoring services. If you are interested in receiving tutoring, would like to be a peer tutor, or want to learn more, please click below. If you have any questions, please do not hesitate to ask Ms. Solomon (vsolomon@lexingtonma.org)."
          ]}
        />
        <LinkBox
          text="Learn more about peer tutoring"
          type="internal"
          link="peer-tutoring"
        />
        <BodyText
          paragraphs={[
            "The NHS Council is running a prep book exchange for students to donate AP/SAT/ACT prep books! If you would like more information about donating or receiving books, please see the instruction document linked below. If you have any questions, please email Callie Rabins (21rabins@lexingtonma.org)."
          ]}
        />
        <LinkBox
          text="Prep book exchange instructions"
          link="https://docs.google.com/document/d/120QONElleWttg4V6HLQqe5mF8nVZMs1XGHxBepj8f04/edit"
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
