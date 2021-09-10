/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * Header.js — The header for every page, including the navigation bar
 * © 2020-2021 to National Honor Society Lexington, MA Chapter
 * 
 * Created by Christian Bernier on 2020-08-20
 */

import React, { useEffect, useState } from "react";
import {Link} from "gatsby";
import { css } from "@emotion/core";
import Logo from "../../assets/NHS_Logo.png";
import NavButton from "../components/NavButton.js";

export default () => {

  //An array of the pages and their links for the navigation bar
  const pages = [
    {
      title: "Home",
      link: "/old",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Hours",
      link: "/hours",
    },
    {
      title: "Calendar",
      link: "/calendar",
    },
  ];

  //For mobile, the navigation bar hides the links until the "Show Navigation" button is pressed
  //This variable (pagesShown) keeps track of whether that button is pressed or not
  const [pagesShown, setPagesShown] = useState(true);
  let pageText = "Hide navigation";

  if (typeof window !== "undefined" && typeof document !== "undefined") { //This is to prevent it from breaking when building without a window
    if (pagesShown) {
      for (let element of document.getElementsByClassName("nav_button")) { //Shows the pages when the "Show Navigation" button is pressed
        element.classList.remove("hidden");
      }
      pageText = "Hide navigation"; //Resets the text of the button, allowing the user to hide the navigation
    } else {
      for (let element of document.getElementsByClassName("nav_button")) { //Hides the pages when the "Hide Navigation" button is pressed
        element.classList.add("hidden");
      }
      pageText = "Show navigation"; //Resets the text of the button, allowing the user to show the navigation
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") { //This is to prevent it from breaking when building without a window
      
      //This sets up variables to calculate whether or not the navigation bar should stick
      const navbar = document.getElementById("nav_bar");
      const ca = document.getElementById("content_area");
      const deviceWidth = navbar.clientWidth;
      const sticky = navbar.offsetTop;

      //This will hide the navigation if the page is loaded on a mobile device
      if (deviceWidth <= 500) {
        setPagesShown(false);
        for (let element of document.getElementsByClassName("nav_button")) {
          element.classList.add("hidden");
        }
        pageText = "Show navigation";
      }

      //This is to make the navigation bar "stick" when the user scrolls
      window.onscroll = () => {
        if (deviceWidth > 500) {
          if (window.pageYOffset >= sticky) { //On computers, the navigation bar will stick when the user scrolls far enough
            navbar.classList.add("sticky");
            ca.classList.add("bump_down");
          } else { //On mobile, the navigation bar does not stick
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
        to="/old"
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
                font-family: "Playfair Display", serif;
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
                font-family: "Playfair Display SC", serif;
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
          <NavButton title={p.title} link={p.link} key={`header-${p.title}`}/>
        ))}
      </div>
    </>
  );
};
