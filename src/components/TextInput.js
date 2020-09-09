import React from "react";
import { css } from "@emotion/core";

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
