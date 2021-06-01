/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * GlobalCSS.js — HTML tags for the <head> and CSS to be used across the site
 * © 2020-2021 to National Honor Society Lexington, MA Chapter
 * 
 * Created by Christian Bernier on 2020-08-20
 */

import React from "react";
import { css, Global } from "@emotion/core";
import { Helmet } from "react-helmet-async";
import Favicon from "../../assets/favicon.png";
import ShareImage from "../../assets/share_image.png";

export default () => {
  return (
    <>
      <Helmet>
        {/* These are all HTML DOM tags to be put in the <head> */}
        <title>National Honor Society</title>
        <link rel="shortcut icon" href={Favicon} />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="National Honor Society: Lexington, MA"
        /> {/* This sets the name of the site when someone goes to share it */}
        <meta property="og:title" content="National Honor Society" /> {/* This sets the name of the site when someone goes to share it */}
        <meta
          property="og:description"
          content="Find information about the Lexington, MA charter of the National Honor Society. View projects, learn about your officers, and more!"
        /> {/* This sets the description of the site when someone goes to share it */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={ShareImage}/> {/* This sets the image of the site when someone goes to share it */}
        <meta
          property="description"
          content="Find information about the Lexington, MA charter of the National Honor Society. View projects, learn about your officers, and more!"
        /> {/* This sets the description of the site when someone goes to share it */}
      </Helmet>
      <Global
        styles={css`
          /* 
           * These are the three fonts the site uses, and for what:
           * Inter (sans-serif) - For body text and anything that's not a title (essentially the default)
           * Playfair Display (serif) - For titles and headers
           * Playfair Display SC (serif) - For the all caps "Lexington, MA" in the header
           */
          @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap");

          /*
           * Here are the CSS variables used for different colors on the site
           */
          :root {
            --light: #e7e7e7;
            --font-color: #00171f;
            --light-gray: #d8d8d8;
            --dark-gray: #c8c8c8;
            --light-blue: #007ea7;
            --dark-blue: #003459;
            --red: #fd2626;
            --green: #359633;
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
