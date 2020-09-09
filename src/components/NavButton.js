import React from "react";
import {css} from "@emotion/core";

export default ({title, link}) => {
  return(
    <a
      className="nav_button"
      css={css`
        height: 100%;
        background-color: var(--light-blue);
        text-decoration: none;

        :hover{
          background-color: var(--light);
          
        }
      `}
      href={link}
    >
      <p
        css={css`
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          height: 100%;
          padding: 0 50px;
          color: var(--light);
          line-height: 75px;

          :hover{
            color: var(--light-blue);
          }
        `}
      >
        {title}
      </p>
    </a>
  )
}