import React from "react";
import { css } from "@emotion/core";

export default ({ name, email, role, description, image }) => {
  return (
    <div
      css={css`
        width: 100vw;
        max-width: 1700px;
        margin-left: 30px;
        margin-top: 20px;
        display: grid;
        grid-template-areas:
          "image name"
          "image description";
        grid-template-rows: 40px auto;
        grid-template-columns: 15% calc(85% - 80px);
        cursor: pointer;

        @media only screen and (min-width: 1700px) {
          padding: 0 calc((100vw - 1700px) / 2);
        }

        @media only screen and (max-width: 500px) {
          margin-right: 30px;
          grid-template-areas:
            "image"
            "name"
            "description";
          grid-template-columns: calc(100vw - 60px);
          grid-template-rows: auto auto auto;
        }
      `}
      onClick={() => window.location = (email) ? `mailto:${email}` : "/"}
    >
      <img
        src={image}
        alt={name}
        css={css`
          width: 100%;
          grid-area: image;
        `}
      />
      <div
        css={css`
          grid-area: name;
          height: 100%;
          margin-left: 20px;
          display: flex;
          flex-direction: row;
          align-items: baseline;

          @media only screen and (max-width: 500px) {
            margin-right: 0;
            margin-left: 0;
            margin-top: 15px;
          }
        `}
      >
        <p
          css={css`
            font-size: 1.6rem;
            color: var(--font-color);
            font-family: "Inter", sans-serif;
            font-weight: 700;
            text-decoration: none;
          `}
        >
          {name}
        </p>
        <p
          css={css`
            font-size: 1rem;
            color: var(--font-color);
            font-family: "Inter", sans-serif;
            font-weight: 400;
            font-style: italic;
            margin-left: 10px;
          `}
        >
          {role}
        </p>
      </div>
      <div
        css={css`
          grid-area: description;
          margin-left: 20px;

          @media only screen and (max-width: 500px) {
            margin-right: 0;
            margin-left: 0;
            margin-top: 10px;
            margin-bottom: 25px;
          }
        `}
      >
        <p
          css={css`
            font-size: 1.2rem;
            color: var(--font-color);
            font-family: "Inter", sans-serif;
            font-weight: 400;
          `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
