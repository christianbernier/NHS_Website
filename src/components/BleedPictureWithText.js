/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * BleedPictureWithText.js — Used on most pages under the header as a page title (with an image)
 * © 2020-2021 to National Honor Society Lexington, MA Charter
 * 
 * Created by Christian Bernier on 2020-08-25
 */

import React from "react";
import { css } from "@emotion/core";

/*
 * imgsrc (image) - The image to be used as the bleed image
 * header (string) - The header to be displayed over the image
 * text (string) - The text to be displayed under the header
 * height (string) - The height (in CSS format and units) of the image
 */

export default ({ imgsrc, header, text, height }) => {
  return (
    <div
      css={css`
        width: 100vw;
        height: ${height};
        background: linear-gradient(to right, #000000c0, transparent),
          url(${imgsrc}) no-repeat center;
        background-size: cover;

        display: flex;
        flex-direction: column;
        justify-content: center;

        @media only screen and (max-width: 500px) {
          flex-direction: column;
          background: linear-gradient(to right, #000000c0, #000000c0),
            url(${imgsrc}) no-repeat center;
          background-size: cover;
        }
      `}
    >
      <p
        css={css`
          font-size: 2rem;
          color: var(--light);
          font-family: "Playfair Display", sans-serif;
          font-weight: 800;
          margin-left: 10%;
          max-width: 30%;

          @media only screen and (max-width: 500px) {
            max-width: calc(100vw - 60px);
            margin-left: 30px;
            margin-right: 30px;
          }
        `}
      >
        {header}
      </p>
      <p
        css={css`
          font-size: 1.2rem;
          color: var(--light);
          font-family: "Inter", sans-serif;
          font-weight: 400;
          margin-left: 10%;
          max-width: 30%;
          padding-top: 10px;

          @media only screen and (max-width: 500px) {
            max-width: calc(100vw - 60px);
            margin-left: 30px;
            margin-right: 30px;
          }
        `}
      >
        {text}
      </p>
    </div>
  );
};
