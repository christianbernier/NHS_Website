/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * calendar.js — Page with a calendar with NHS events
 * © 2021 to National Honor Society Lexington, MA Chapter
 * 
 * Created by Christian Bernier on 2021-02-12
 */

import React from "react";
import GlobalCSS from "../components/GlobalCSS";
import Header from "../components/Header";
import BodyHeader from "../components/BodyHeader";
import BodyText from "../components/BodyText";
import Gap from "../components/Gap.js";
import Footer from "../components/Footer.js";
import Calendar from "../components/Calendar.js";

import { Helmet } from "react-helmet-async";

export default () => {
  return (
    <>
      <GlobalCSS />
      <Helmet>
        <title>Calendar | NHS</title>
        <meta property="og:title" content="Calendar | NHS" />
      </Helmet>
      <Header />
      <div id="content_area">
        <Gap height="30px"/>
        <BodyHeader
          text="NHS Calendar"
          line={true}
        />
        <BodyText
          paragraphs={[
            "Please check out the calendar below to see upcoming NHS events. If you believe something is missing, please contact Christian at 21bernier3@lexingtonma.org."
          ]}
        />
        <Gap height="30px"/>
        <Calendar/>
        <Gap height="100px"/>
        <Footer/>
      </div>
    </>
  );
};
