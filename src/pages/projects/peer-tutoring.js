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
            "If you have any questions about the program, please email Ms. Solomon (vsolomon@lexingtonma.org). Those looking to sign up to be a peer mentor may use the form linked below."
          ]}
        />
        <LinkBox
          text="NHS application form"
          link="https://docs.google.com/document/d/1JvOsBVTWdaUptr6nLFeYUtTWGkVYIdKf3Yl0R3S3Tk8/edit?usp=sharing"
        />
        <Gap height="200px"/>
        <Footer/>
      </div>
    </>
  );
};
