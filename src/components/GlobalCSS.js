import React from "react";
import { css, Global } from "@emotion/core";
import { Helmet } from "react-helmet-async";
import Favicon from "../../assets/favicon.png";
import ShareImage from "../../assets/share_image.png";

export default () => {
  return (
    <>
      <Helmet>
        <title>National Honor Society</title>
        <link rel="shortcut icon" href={Favicon} />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="National Honor Society: Lexington, MA"
        />
        <meta property="og:title" content="National Honor Society" />
        <meta
          property="og:description"
          content="Find information about the Lexington, MA charter of the National Honor Society. View projects, learn about your officers, and more!"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={ShareImage}/>
        <meta
          property="description"
          content="Find information about the Lexington, MA charter of the National Honor Society. View projects, learn about your officers, and more!"
        />
      </Helmet>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap");

          :root {
            --light: #e7e7e7;
            --font-color: #00171f;
            --light-gray: #d8d8d8;
            --dark-gray: #c8c8c8;
            --light-blue: #007ea7;
            --dark-blue: #003459;
            overflow-x: hidden;
          }

          body {
            padding: 0;
            margin: 0;
            width: 100vw;
            background-color: var(--light);
            line-height: 1.5;

            overflow-x: hidden;
          }

          p {
            color: var(--font-color);
            margin: 0;
          }

          .sticky {
            position: fixed;
            top: 0;
          }

          .bump_down {
            margin-top: 75px;
          }

          .hidden{
            display: none;
          }
        `}
      />
    </>
  );
};
