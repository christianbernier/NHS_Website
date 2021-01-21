import React from "react";
import { css } from "@emotion/core";

export default () => {
  return (
    <div
      css={css`
        width: 100vw;
        min-height: 80px;
        background-color: var(--light-gray);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: 500px) {
          padding-right: 30px;
          padding-left: 30px;
          width: calc(100vw - 60px);
        }
      `}
    >
      <p
        css={css`
          font-size: 1rem;
          color: var(--font-color);
          font-family: "Playfair Display", sans-serif;
          font-weight: 400;
        `}
      >
        © Copyright 2020–2021 to the Lexington High School National Honor Society.
      </p>
    </div>
  );
};
