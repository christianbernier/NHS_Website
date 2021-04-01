/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * NavButton.js — A button on the navigation bar for certain pages
 * © 2020-2021 to National Honor Society Lexington, MA Chapter
 * 
 * Created by Christian Bernier on 2020-08-20
 */

import React from "react";
import {Link} from "gatsby";
import {css} from "@emotion/core";

/*
 * title (string) - The title of the page for the button
 * link (string) - The URL of the page to be directed to
 */

export default ({title, link}) => {
  return(
    <Link
      className="nav_button"
      css={css`
        height: 100%;
        background-color: var(--light-blue);
        text-decoration: none;

        :hover{
          background-color: var(--light);
          
        }
      `}
      to={link}
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
    </Link>
  )
}