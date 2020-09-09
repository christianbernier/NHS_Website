import React from "react";
import GlobalCSS from "../components/GlobalCSS.js";
import Header from "../components/Header.js";
import BleedPictureWithText from "../components/BleedPictureWithText.js";
import PopArea from "../components/PopArea.js";
import BodyHeader from "../components/BodyHeader.js";
import BodyText from "../components/BodyText.js";
import Biography from "../components/Biography.js";
import Gap from "../components/Gap.js";
import Footer from "../components/Footer.js";

import HeaderImageHome from "../../assets/headers/home.jpg";

import DefaultProfilePicture from "../../assets/profiles/Default.png";
import KyuhoProfilePicture from "../../assets/profiles/Kyuho.jpeg";
import ChristianProfilePicture from "../../assets/profiles/Christian.jpg";

export default () => {
  return (
    <>
      <GlobalCSS />
      <Header />
      <div id="content_area">
        <BleedPictureWithText
          imgsrc={HeaderImageHome}
          header="Welcome!"
          text="Thank you for visiting the Lexington, MA charter of the National Honor Society (NHS). On this site, you can find information about current community service projects, how to log your hours, and view your current status in the society."
          height="500px"
        />
        <PopArea
          header="COVID-19 Hours Update"
          body="Due to the pandemic, all hours (regardless of whether the project is recognized by NHS) will count towards the 20 required hours for NHS. There will be no special requirement for 15 NHS hours. Please ask any leader if you have a question."
        />
        <BodyHeader text="Leadership" line={true} />
        <BodyText
          paragraphs={[
            "The National Honor Society is run by your student officers Kyuho Lee, Emily Zhu, Callie Rabins, and Christian Bernier. This charter is also overseen by Dr. Parul Kumar.",
            "Your leaders are responsible for keeping members informed of upcoming deadlines, projects, and events. If you have any questions about NHS, please email any of your officers and we will help.",
            "Please see below for more information on each leader."
          ]}
        />
        <Gap height="20px"/>
        <Biography
          name="Dr. Parul Kumar"
          role="Advisor"
          image={DefaultProfilePicture}
          description="[Dr. Kumar's description]"
        />
        <Biography
          name="Kyuho Lee"
          role="President"
          image={KyuhoProfilePicture}
          description="Hey! I'm Kyuho and I'm the President of NHS. At NHS, I’m in charge of organizing and managing overall activities, such as events, meetings, and projects. Outside of NHS, I love to sing, play frisbee, and go to the beach. If you have any questions NHS-related, please reach out!"
        />
        <Biography
          name="Emily Zhu"
          role="Vice President of Community Service"
          image={DefaultProfilePicture}
          description="[Emily's description]"
        />
        <Biography
          name="Callie Rabins"
          role="Vice President of Fundraising and Publicity"
          image={DefaultProfilePicture}
          description="[Callie's description]"
        />
        <Biography
          name="Christian Bernier"
          email="21bernier3@lexingtonma.org"
          role="Vice President of Web Administration"
          image={ChristianProfilePicture}
          description="Hi! My name is Christian and I'm the Vice President of Web Administration. I'm a senior here at LHS and enjoy programming and playing with my two cats, Buttons and Mittens, in my free time. At NHS, I work to keep the website up and running and make improvements periodically. I also do some of the behind-the-scenes stuff like managing which projects are displayed on the website, tracking hours, and other tasks. Additionally, I work with the other officers and Dr. Kumar on planning events and making sure there are no issues. If you ever have any questions or see any issues with the website, feel free to send me an email!"
        />
        <Gap height="50px"/>
        <Footer/>
      </div>
    </>
  );
};
