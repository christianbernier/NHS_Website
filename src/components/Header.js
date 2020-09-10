import React, { useEffect, useState } from "react";
import {Link} from "gatsby";
import { css } from "@emotion/core";
import Logo from "../../assets/NHS_Logo.png";
import NavButton from "../components/NavButton.js";

export default () => {
  const pages = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Apply",
      link: "/apply",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Hours",
      link: "/hours",
    },
  ];

  const [pagesShown, setPagesShown] = useState(true);
  let pageText = "Hide navigation";

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    if (pagesShown) {
      for (let element of document.getElementsByClassName("nav_button")) {
        element.classList.remove("hidden");
      }
      pageText = "Hide navigation";
    } else {
      for (let element of document.getElementsByClassName("nav_button")) {
        element.classList.add("hidden");
      }
      pageText = "Show navigation";
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const navbar = document.getElementById("nav_bar");
      const ca = document.getElementById("content_area");
      const deviceWidth = navbar.clientWidth;
      const sticky = navbar.offsetTop;

      if (deviceWidth <= 500) {
        setPagesShown(false);
        for (let element of document.getElementsByClassName("nav_button")) {
          element.classList.add("hidden");
        }
        pageText = "Show navigation";
      }

      window.onscroll = () => {
        if (deviceWidth > 500) {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            ca.classList.add("bump_down");
          } else {
            navbar.classList.remove("sticky");
            ca.classList.remove("bump_down");
          }
        }
      };
    }
  }, []);

  return (
    <>
      <Link
        to="/"
        css={css`
          text-decoration: none;
        `}
      >
        <div
          css={css`
            width: 100vw;
            height: 120px;
            background-color: var(--dark-blue);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            @media only screen and (max-width: 500px) {
              flex-direction: column-reverse;
              justify-content: center;
              align-items: center;
              height: 200px;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              padding-left: 30px;
              height: 100%;

              @media only screen and (max-width: 500px) {
                justify-content: center;
                align-items: center;
                padding-left: 0;
                margin-left: 30px;
                margin-right: 30px;
                text-align: center;
              }
            `}
          >
            <p
              css={css`
                font-family: "Playfair Display", sans-serif;
                font-size: 2rem;
                margin: 0;
                color: var(--light);
                font-weight: 700;

                @media only screen and (max-width: 500px) {
                  font-size: 1.6rem;
                }
              `}
            >
              National Honor Society
            </p>
            <p
              css={css`
                font-family: "Playfair Display SC", sans-serif;
                font-size: 1rem;
                margin: 0;
                color: var(--light);
                font-weight: 700;
                margin-top: -20px;

                @media only screen and (max-width: 500px) {
                  margin-top: 8px;
                  margin-bottom: 30px;
                }
              `}
            >
              Lexington, MA
            </p>
          </div>
          <img
            src={Logo}
            css={css`
              height: 80px;
              margin-right: 30px;

              @media only screen and (max-width: 500px) {
                margin-right: 0;
                margin-top: 30px;
              }
            `}
            alt="National Honor Society logo"
          />
        </div>
      </Link>
      <div
        id="nav_bar"
        css={css`
          height: 75px;
          width: 100vw;
          background-color: var(--light-blue);
          display: flex;
          flex-direction: row;
          justify-content: center;

          @media only screen and (max-width: 500px) {
            flex-direction: column;
            height: auto;
            text-align: center;
          }
        `}
      >
        <div
          css={css`
            background-color: var(--light-blue);
            display: none;
            border-bottom: 6px solid var(--light);

            @media only screen and (max-width: 500px) {
              display: block;
            }
          `}
          onClick={() => setPagesShown(!pagesShown)}
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
            `}
          >
            {pageText}
          </p>
        </div>
        {pages.map((p) => (
          <NavButton title={p.title} link={p.link} />
        ))}
      </div>
    </>
  );
};
