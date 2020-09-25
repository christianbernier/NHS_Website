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
// import DefaultProfilePicture from "../../assets/profiles/Default.png";

import KumarProfilePicture from "../../assets/profiles/Kumar.jpg";
import KyuhoProfilePicture from "../../assets/profiles/Kyuho.jpeg";
import EmilyProfilePicture from "../../assets/profiles/Emily.jpg";
import CallieProfilePicture from "../../assets/profiles/Callie.jpg";
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
          header="Hours Update"
          body="The 2020-2021 NHS year has begun! All NHS members must acquire at least 20 hours of community service to retain their status in the society. A portion of these hours (15 for juniors; 10 for seniors) must be completed with NHS projects. The remaining may be completed through non-NHS projects. If you have any questions, please contact an NHS officer."
        />
        <BodyHeader text="Leadership" line={true} />
        <BodyText
          paragraphs={[
            "The National Honor Society is run by your student officers Kyuho Lee, Emily Zhu, Callie Rabins, and Christian Bernier. This charter is also overseen by Dr. Parul Kumar.",
            "Your leaders are responsible for keeping members informed of upcoming deadlines, projects, and events. If you have any questions about NHS, please email any of your officers and we will help.",
            "Please see below for more information on each leader."
          ]}
        />
        <Biography
          name="Dr. Parul Kumar"
          email="pkumar@lexingtonma.org"
          role="Advisor"
          image={KumarProfilePicture}
          description="Hello everyone, I am Parul Kumar and I teach AP Chemistry. I have been the advisor for the National Honor Society since 2003. I live with my husband, and I have two grown children. My hobbies include traveling, painting, acting, and cooking! I am here to help all of you seek and participate in community service activities and build character. I am honored and excited to work with all of you. I am looking forward to having a great year together!"
        />
        <Biography
          name="Kyuho Lee"
          email="21lee72@lexingtonma.org"
          role="President"
          image={KyuhoProfilePicture}
          description="Hey! I'm Kyuho and I'm the President of NHS. At NHS, I’m in charge of organizing and managing overall activities, such as events, meetings, and projects. Outside of NHS, I love to sing, play frisbee, and go to the beach. If you have any NHS-related questions, please reach out!"
        />
        <Biography
          name="Emily Zhu"
          email="21zhu15@lexingtonma.org"
          role="Vice President of Community Service"
          image={EmilyProfilePicture}
          description="I cannot wait to be a part of the NHS officer team this year! I strive to use my role to find and create projects that are not only engaging but also proactively benefit others, and am always open to accepting new project ideas! This year, COVID-19 will definitely be a challenge to keep in mind when designing the events, but we will make an effort to to not let physical distancing get in the way of being  connected. Aside from NHS, I enjoy painting, playing with my dog, and finding new restaurants to try out (always looking for recommendations)!"
        />
        <Biography
          name="Callie Rabins"
          email="21rabins@lexingtonma.org"
          role="Vice President of Fundraising and Publicity"
          image={CallieProfilePicture}
          description="Hi fellow NHS members! My name is Callie and I am your Vice President of Fundraising and Publicity. It is my job to make sure that we have all of the funding we need secured, and that our awesome events are well publicized and attended. Please do not hesitate to contact me via email if you have any questions about my role or anything else NHS related :). Outside of the classroom I am involved with Bee Club and dance (I am definitely hoping to see some dancers at our talent show this year!)"
        />
        <Biography
          name="Christian Bernier"
          email="21bernier3@lexingtonma.org"
          role="Vice President of Web Administration"
          image={ChristianProfilePicture}
          description="Hi! My name is Christian and I'm the Vice President of Web Administration. At NHS, I work to keep the website up and running and make improvements periodically. I also do some of the behind-the-scenes stuff like managing which projects are displayed on the website, tracking hours, and other tasks. Additionally, I work with the other officers and Dr. Kumar on planning events and making sure there are no issues. Outside of school, I enjoy programming and playing with my two cats, Buttons and Mittens. If you ever have any questions or see any issues with the website, feel free to send me an email!"
        />
        <Gap height="50px"/>
        <Footer/>
      </div>
    </>
  );
};
