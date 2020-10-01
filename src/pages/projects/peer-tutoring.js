import React from "react";
import GlobalCSS from "../../components/GlobalCSS";
import Header from "../../components/Header";
import BleedPictureHeader from "../../components/BleedPictureHeader";
import BodyHeader from "../../components/BodyHeader";
import BodyText from "../../components/BodyText";
import LinkBox from "../../components/LinkBox";
import Gap from "../../components/Gap.js";
import Footer from "../../components/Footer.js";

import HeaderImagePeerTutoring from "../../../assets/headers/peer-tutoring.jpg";

export default () => {
  return (
    <>
      <GlobalCSS />
      <Header />
      <div id="content_area">
        <BleedPictureHeader
          imgsrc={HeaderImagePeerTutoring}
          header="Peer Tutoring"
          height="500px"
        />
        <BodyHeader
          text="About the learning center tutoring program"
          line={true}
        />
        <BodyText
          paragraphs={[
            "This year, the LHS chapter of the National Honor Society has partnered with the Learning Center (room 712) to offer students peer tutoring remotely.",
            "To receive tutoring, students must first obtain the Zoom links for each block’s tutoring session. The links will be posted outside the Learning Center (room 712). Additionally, students may email Ms. Solomon at vsolomon@lexingtonma.org for the links, but please make sure to email in advance of the block you wish to attend. Once you have the Zoom block links, you can use them anytime to access academic support.",
            "If you have any questions about the program, please email Ms. Solomon (vsolomon@lexingtonma.org)."
          ]}
        />
        <BodyHeader
          text="Sign up to be a peer tutor"
          line={true}
        />
        <BodyText
          paragraphs={[
            "All LHS students (NHS and non-NHS) may become a tutor by filling out the form below, which includes places for you to indicate your availability and interest in tutoring specific subjects. If you have any questions about the program, please email Ms. Solomon (vsolomon@lexingtonma.org)."
          ]}
        />
        <LinkBox
          text="Sign up to be a peer tutor"
          link="https://docs.google.com/forms/d/e/1FAIpQLSfSDGLjagSbPqyzptK6c7mb3pgihBWOuD3RvIO8Ty-bCfXSIA/viewform?usp=sf_link"
        />
        <Gap height="200px"/>
        <Footer/>
      </div>
    </>
  );
};
