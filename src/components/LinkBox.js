import React from "react";
import { css } from "@emotion/core";
import LinkIcon from "../../assets/link_icon.png";

export default ({ text, link }) => {
  return (
    <a 
      href={link}
      css={css`
        text-decoration: none;
      `}
    >
      <div
        css={css`
          width: calc(100vw - 40px);
          padding: 15px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: var(--light-gray);
            padding: 0 40px;
            border-radius: 5px;
          `}
        >
          <img
            src={LinkIcon}
            css={css`
              width: 20px;
              height: 20px;
              margin-right: 10px;
            `}
          />
          <p
            css={css`
              font-size: 1.2rem;
              color: var(--font-color);
              font-family: "Inter", sans-serif;
              font-weight: 600;
              margin: 20px 0;
            `}
          >
            {text}
          </p>
        </div>
      </div>
    </a>
  );
};
