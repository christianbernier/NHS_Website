import React from "react";
import GlobalCSS from "../components/GlobalCSS";
import Header from "../components/Header";
import BleedPictureHeader from "../components/BleedPictureHeader";
import BodyHeader from "../components/BodyHeader";
import BodyText from "../components/BodyText";
import LinkBox from "../components/LinkBox";
import Gap from "../components/Gap.js";
import Footer from "../components/Footer.js";

import HeaderImageApply from "../../assets/headers/apply.png";

export default () => {
  return (
    <>
      <GlobalCSS />
      <Header />
      <div id="content_area">
        <BleedPictureHeader
          imgsrc={HeaderImageApply}
          header="Apply"
          height="500px"
        />
        <BodyHeader
          text="Applying to NHS"
          line={true}
        />
        <BodyText
          paragraphs={[
            "National Honor Society applicants must have a minimum GPA of 3.50 and will receive an application (through Google Forms) via email. Do not submit the paper application found below without having received an invitation by email; your application will not be considered."
          ]}
        />
        <LinkBox
          text="NHS application form"
          link="https://docs.google.com/document/d/1JvOsBVTWdaUptr6nLFeYUtTWGkVYIdKf3Yl0R3S3Tk8/edit?usp=sharing"
        />
        <BodyText
          paragraphs={[
            "To finish your application, the full application must be printed, filled out, and turned in to room 401 along with a typed letter from you to the Faculty Council. For the 2020-2021 school year, dates for deadlines have not been decided yet. Please check this website for updates.",
            "The Faculty/Adult Evaluation is at the bottom of the printable application and must be filled out and signed by an adult that is not a relative or friend. It should support your acceptance into NHS by demonstrating your characteristics of Leadership, Service, and Character.",
            "The typed letter is from you to the NHS Faculty Council, and must clearly explain why you would make a good NHS member and what contributions you would make to the overall community. It must be one page, single-spaced, and signed by you. Make sure to attach it to the printed application when you turn it in.",
            "Please understand that participating in this process does not guarantee selection. The Faculty Council is responsible for selection of students. All administrators will be invited to comment on all academically eligible students. No student with a disability may be excluded from consideration based on his or her disabilities.",
            "If you do not receive an email by the end of October, please contact Dr. Kumar in room 401 or one of the current NHS officers via their school email."
          ]}
        />
        <Gap height="50px"/>
        <Footer/>
      </div>
    </>
  );
};
