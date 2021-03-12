/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * TextInput.js — Input field that accepts text
 * © 2020-2021 to National Honor Society Lexington, MA Charter
 * 
 * Created by Christian Bernier on 2020-09-08
 */

import React from "react";
import { css } from "@emotion/core";

/*
 * htmlID (string) - The ID of the HTML DOM <input> so it can be referenced elsewhere
 */

export default ({ htmlID }) => {
  return (
    <input
      type="text"
      id={htmlID}
      css={css`
        background-color: var(--dark-gray);
        border-radius: 5px;
        padding: 10px;
        width: 300px;
        border: none;
        font-family: "Inter", sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--font-color);

        @media only screen and (max-width: 500px) {
          width: calc(100% - 20px);
        }
      `}
    />
  );
};
