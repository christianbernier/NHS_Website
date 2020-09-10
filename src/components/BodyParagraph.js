import React from "react";
import { css } from "@emotion/core";

export default ({ text }) => {
  return (
    <p
      css={css`
        font-size: 1.2rem;
        color: var(--font-color);
        font-family: "Inter", sans-serif;
        font-weight: 400;
        margin-left: 30px;
        margin-right: 50px;
        margin-bottom: 30px;

        @media only screen and (min-width: 1700px) {
          padding: 0 calc((100vw - 1700px) / 2);
        }

        @media only screen and (max-width: 500px) {
          margin-right: 30px;
          margin-left: 30px;
        }
      `}
    >
      {text}
    </p>
  );
};
