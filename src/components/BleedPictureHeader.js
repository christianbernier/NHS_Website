import React from "react";
import { css } from "@emotion/core";

export default ({ imgsrc, header, height }) => {
  return (
    <div
      css={css`
        width: 100vw;
        height: ${height};
        background: linear-gradient(to right, #000000c0, #000000c0),
          url(${imgsrc}) no-repeat center;
        background-size: cover;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

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
    </div>
  );
};
