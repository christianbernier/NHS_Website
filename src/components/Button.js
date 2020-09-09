import React from "react";
import { css } from "@emotion/core";

export default ({ text, onPress }) => {
  return (
    <div
      css={css`
        display: flex;
        width: 150px;
        margin-top: 30px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: var(--dark-gray);
        padding: 0 40px;
        border-radius: 5px;
        cursor: pointer;
      `}
      onClick={() => onPress()}
    >
      <p
        css={css`
          font-size: 1.2rem;
          color: var(--font-color);
          font-family: "Inter", sans-serif;
          font-weight: 600;
          margin: 15px 0;
        `}
      >
        {text}
      </p>
    </div>
  );
};
