import React from "react";
import { css } from "@emotion/core";

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
