/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * LinkBox.js — A button for a link, either internal or external
 * © 2020-2021 to National Honor Society Lexington, MA Charter
 * 
 * Created by Christian Bernier on 2020-08-31
 */

import React from "react";
import {Link} from "gatsby";
import { css } from "@emotion/core";
import LinkIcon from "../../assets/link_icon.png";

/*
 * text (string) - The text to be displayed in the box
 * type (string) - The type of link (either internal or external) for more efficient linking (<a> for external; <Link> for internal)
 * link (string) - The URL of the link
 */

export default ({ text, type, link }) => {
  if (type === "internal") {
    return (
      <Link
        to={link}
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
              alt="Link icon"
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
      </Link>
    );
  }

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
            alt="Link icon"
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
