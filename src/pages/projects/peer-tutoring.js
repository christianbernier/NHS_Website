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
          text="Learning Center Peer Tutoring Program"
          line={true}
        />
        <BodyText
          paragraphs={[
            "This year, the Learning Center (room 712) is offering students peer tutoring remotely. NHS members can volunteer to be a peer tutor, helping students with school work, for NHS hours.",
            "Zoom links for each block's tutoring session will be posted outside the Learning Center (room 712). Additionally, students may email Ms. Solomon at vsolomon@lexingtonma.org for links, but please make sure to email in advance of the block you wish to attend.",
            "If you have any questions about the program, please email Ms. Solomon (vsolomon@lexingtonma.org). Those looking to sign up to be a peer mentor may use the form linked below."
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
