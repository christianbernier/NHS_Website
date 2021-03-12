/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * about.js — Page with information about the NHS
 * © 2020-2021 to National Honor Society Lexington, MA Charter
 * 
 * Created by Christian Bernier on 2020-08-31
 */

import React from "react";
import GlobalCSS from "../components/GlobalCSS";
import Header from "../components/Header";
import BleedPictureHeader from "../components/BleedPictureHeader";
import BodyHeader from "../components/BodyHeader";
import BodyText from "../components/BodyText";
import Gap from "../components/Gap.js";
import Footer from "../components/Footer.js";
import { Helmet } from "react-helmet-async";

import HeaderImageAbout from "../../assets/headers/about.jpg";

export default () => {
  return (
    <>
      <GlobalCSS />
      <Helmet>
        <title>About | NHS</title>
        <meta property="og:title" content="About | NHS" />
      </Helmet>
      <Header />
      <div id="content_area">
        <BleedPictureHeader
          imgsrc={HeaderImageAbout}
          header="About"
          height="500px"
        />
        <BodyHeader
          text="About the National Honor Society"
          line={true}
        />
        <BodyText
          paragraphs={[
            "The National Honor Society (NHS) is an organization devoted to acknowledging high school students who have excelled in four characteristics during their high school years. These four characteristics are Leadership, Service, Character, and Scholarship. NHS members make every effort to work for the betterment of their community.",
            "Every high school that is part of NHS has its own set of rules and standards that are laid down by its advisors. In addition, each state that has schools that are part of NHS has a state board and state advisors. The job of the state advisors is to make sure that each school follows the national charter of the National Honor Society.",
            "Any student who is a candidate for the Lexington High School Chapter of NHS must have attained a GPA of 3.50 in their sophomore or junior year. Secondly, they must exhibit outstanding leadership qualities, character, and service during their years in high school. Once the student has become a member, they must maintain their GPA and attend all NHS meetings as well as complete a service requirement during the school year.",
            "Students must register at least 20 hours of community service for NHS during their junior year (at least 15 hours must be NHS-specific hours). During their senior year, they must register another 20 hours, but only 10 hours are required to be spent on NHS-specific projects.",
            // "Due to the COVID-19 pandemic, this restriction of NHS versus non-NHS hours has been removed. All service hours will count, meaning students must complete a total of 20 during their junior and senior year.",
            "The standards that have been put in place by the Lexington High School chapter of NHS make it an organization devoted to the improvement of community, school, and self by adhering to the characteristics of Leadership, Service, Character, and Scholarship. Over the course of their junior and senior years students participate in several community service activities such as YES (youth exploration of science), peer tutoring, Special Olympics, Red Cross blood drive, and many more."
          ]}
        />
        <Gap height="50px"/>
        <Footer/>
      </div>
    </>
  );
};
