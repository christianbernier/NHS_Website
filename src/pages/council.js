import React from "react";
import GlobalCSS from "../components/GlobalCSS";
import Header from "../components/Header";
import BodyHeader from "../components/BodyHeader";
import BodyText from "../components/BodyText";
import Gap from "../components/Gap.js";
import Footer from "../components/Footer.js";

export default () => {
  return (
    <>
      <GlobalCSS />
      <Header />
      <div id="content_area">
        <Gap height="30px"/>
        <BodyHeader
          text="About the NHS Council"
          line={true}
        />
        <BodyText
          paragraphs={[
            "The NHS Council is a group of driven, creative, and collaborative NHS students that work with officers to organize and execute large community-building events and projects. These include traditional fundraisers such as the NHS Talent Show, as well as new initiatives such as the NHS Cookbook, Film Festival, and more. The Council also assists student organizations in running NHS events.",
            "If you have any ideas for events that incorporate NHS and the community or would like to work with the Council for your event, please fill out this form! Meetings are Wednesdays from 4:00-4:30, and members gain NHS hours for participation."
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
