import React from "react";
import GlobalCSS from "../components/GlobalCSS";
import Header from "../components/Header";
import BleedPictureHeader from "../components/BleedPictureHeader";
import BodyHeader from "../components/BodyHeader";
import BodyText from "../components/BodyText";
import Gap from "../components/Gap.js";
import Footer from "../components/Footer.js";

import HeaderImageAbout from "../../assets/headers/about.jpg";

export default () => {
  return (
    <>
      <GlobalCSS />
      <Header />
      <div id="content_area">
        <BodyHeader
          text="Error 404 — Page not found"
          line={true}
        />
        <BodyText
          paragraphs={[
            "The page you were looking for could not be found.",
            "Please try again or contact Christian Bernier (21bernier3@lexingtonma.org) if you believe this is an error."
          ]}
        />
      </div>
    </>
  );
};
