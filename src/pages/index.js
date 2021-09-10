/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * index.js — Homepage for the NHS website
 * © 2020-2021 to National Honor Society Lexington, MA Chapter
 * 
 * Created by Christian Bernier on 2020-08-20
 */

import React from "react";
import {Link} from "gatsby";
import { css } from "@emotion/core";
import Logo from "../../assets/NHS_Logo.png";
import GlobalCSS from "../components/GlobalCSS.js";
import { Helmet } from "react-helmet-async";
import BodyHeader from "../components/BodyHeader.js";
import BodyText from "../components/BodyText.js";
import LinkBox from "../components/LinkBox";

export default () => {
  return (
    <>
      <GlobalCSS />
      <Helmet>
        <title>Redirect | NHS</title>
        <meta property="og:title" content="404 | NHS" />
      </Helmet>
      <Link
        to="/"
        css={css`
          text-decoration: none;
        `}
      >
        <div
          css={css`
            width: 100vw;
            height: 120px;
            background-color: var(--dark-blue);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            @media only screen and (max-width: 500px) {
              flex-direction: column-reverse;
              justify-content: center;
              align-items: center;
              height: 200px;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              padding-left: 30px;
              height: 100%;

              @media only screen and (max-width: 500px) {
                justify-content: center;
                align-items: center;
                padding-left: 0;
                margin-left: 30px;
                margin-right: 30px;
                text-align: center;
              }
            `}
          >
            <p
              css={css`
                font-family: "Playfair Display", serif;
                font-size: 2rem;
                margin: 0;
                color: var(--light);
                font-weight: 700;

                @media only screen and (max-width: 500px) {
                  font-size: 1.6rem;
                }
              `}
            >
              National Honor Society
            </p>
            <p
              css={css`
                font-family: "Playfair Display SC", serif;
                font-size: 1rem;
                margin: 0;
                color: var(--light);
                font-weight: 700;
                margin-top: -20px;

                @media only screen and (max-width: 500px) {
                  margin-top: 8px;
                  margin-bottom: 30px;
                }
              `}
            >
              Lexington, MA
            </p>
          </div>
          <img
            src={Logo}
            css={css`
              height: 80px;
              margin-right: 30px;

              @media only screen and (max-width: 500px) {
                margin-right: 0;
                margin-top: 30px;
              }
            `}
            alt="National Honor Society logo"
          />
        </div>
      </Link>
      <div id="content_area">
        <BodyHeader
          text="Head over to the new NHS website!"
          line={true}
        />
        <BodyText
          paragraphs={[
            "Hello! Thank you for visiting the NHS website. This edition of the website was for the 2020–2021 school year only. Please click the link below to be taken to the new site.",
            "We apologize for any inconvenience this may cause. Please contact Sam Offsey (22offsey@lexingtonma.org) with any questions."
          ]}
        />
        <LinkBox
          text="New NHS Website"
          link="https://lexnhs.cloudaccess.host/"
        />
      </div>
    </>
  );
};
