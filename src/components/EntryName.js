/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * EntryName.js — Title text for form entry boxes
 * © 2020-2021 to National Honor Society Lexington, MA Charter
 * 
 * Created by Christian Bernier on 2020-09-08
 */

import React from "react";
import { css } from "@emotion/core";

/*
 * text (string) - The title of the field
 */

export default ({text}) => {
  return (
    <p
      css={css`
        font-size: 1.4rem;
        color: var(--font-color);
        font-family: "Inter", sans-serif;
        font-weight: 600;
        margin-top: 25px;
        margin-bottom: 10px;
      `}
    >
      {text}
    </p>
  );
};
