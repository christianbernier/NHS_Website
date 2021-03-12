/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * council.js — Page with information about the NHS Council
 * © 2021 to National Honor Society Lexington, MA Charter
 * 
 * Created by Christian Bernier on 2021-01-15
 */

import React from "react";
import GlobalCSS from "../components/GlobalCSS";
import Header from "../components/Header";
import BodyHeader from "../components/BodyHeader";
import BleedPictureHeader from "../components/BleedPictureHeader";
import BodyText from "../components/BodyText";
import Gap from "../components/Gap.js";
import Footer from "../components/Footer.js";
import { Helmet } from "react-helmet-async";

import HeaderImageCouncil from "../../assets/headers/council.png";

export default () => {
  return (
    <>
      <GlobalCSS />
      <Helmet>
        <title>Council | NHS</title>
        <meta property="og:title" content="Council | NHS" />
      </Helmet>
      <Header />
      <div id="content_area">
      <BleedPictureHeader
          imgsrc={HeaderImageCouncil}
          header="NHS Council"
          height="500px"
        />
        <BodyHeader
          text="About the NHS Council"
          line={true}
        />
        <BodyText
          paragraphs={[
            "The NHS Council is a group of driven, creative, and collaborative NHS students that work with officers to organize and execute large community-building events and projects. These include traditional fundraisers such as the NHS Talent Show, as well as new initiatives such as the NHS Cookbook, Film Festival, and more. The Council also assists student organizations in running NHS events.",
            "If you have any ideas for events that incorporate NHS and the community or would like to work with the Council for your event, please fill out this form! Meetings are Wednesdays from 4:15-4:45, and members gain NHS hours for participation."
          ]}
        />
        <Gap height="30px"/>
        <BodyHeader
          text="Council Leadership"
          line={true}
        />
        <BodyText
          paragraphs={[
            "The Council is run by Kyuho Lee, with assistance from other NHS officers. If you have questions about the NHS Council, please email Kyuho directly at 21lee72@lexingtonma.org. If you believe there is an issue with attendance (such as not receiving hours for attending) or have questions about the meeting notes, please contact Christian Bernier at 21bernier3@lexingtonma.org."
          ]}
        />
        <Gap height="50px"/>
        <Footer/>
      </div>
    </>
  );
};
