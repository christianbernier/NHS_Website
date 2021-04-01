/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * CheckHours.js — A form for users to check their current hours (from a database)
 * © 2020-2021 to National Honor Society Lexington, MA Chapter
 * 
 * Created by Christian Bernier on 2020-09-08
 */

import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import TextInput from "../components/TextInput";
import EntryName from "../components/EntryName";
import Button from "../components/Button";

export default () => {
  const [hours, setHours] = useState([]);
  const [textToDisplay, setTextToDisplay] = useState("");

  useEffect(() => {
    fetch(
      "https://spreadsheets.google.com/feeds/list/1j_FlqzEWVQiIaT0LXuQHkm8uUzdrGpl_wyZZU3KEJF0/1/public/full?alt=json"
    )
      .then((data) => data.json())
      .then((data) => {
        let currentHours = JSON.parse(JSON.stringify(hours));
        for (const entry of data.feed.entry) {
          if (entry["gsx$firstname"]["$t"] !== "") {
            currentHours.push({
              firstName: entry["gsx$firstname"]["$t"],
              lastName: entry["gsx$lastname"]["$t"],
              yog: entry["gsx$yog"]["$t"],
              NHSHours: entry["gsx$nhshours"]["$t"],
              nonNHSHours: entry["gsx$non-nhshours"]["$t"],
              totalHours: entry["gsx$totalhours"]["$t"],
              totalHoursCounted: entry["gsx$totalhourscounted"]["$t"],
            });
          }
        }
        setHours(currentHours);
      });
  }, []);

  const generateReport = () => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const firstName = document.getElementById("first_name").value;
      const lastName = document.getElementById("last_name").value;
      const yog = document.getElementById("yog").value;

      if (firstName === "" || lastName === "" || yog === "") {
        setTextToDisplay("Please make sure every field is filled out.");
      } else {
        let found = false;
        for (const hour of hours) {
          if (
            hour.firstName.toLowerCase() === firstName.toLowerCase() &&
            hour.lastName.toLowerCase() === lastName.toLowerCase() &&
            hour.yog === yog
          ) {
            found = true;
            setTextToDisplay(
              `${hour.firstName} ${hour.lastName} has completed ${
                hour.NHSHours
              } NHS hour${parseInt(hour.NHSHours) === 1 ? "" : "s"} and ${
                hour.nonNHSHours
              } non-NHS hour${
                parseInt(hour.nonNHSHours) === 1 ? "" : "s"
              }. That's ${hour.totalHours} total hour${
                parseInt(hour.totalHours) === 1 ? "" : "s"
              }, and ${hour.totalHoursCounted} total hour${
                parseInt(hour.totalHoursCounted) === 1 ? "" : "s"
              } counted (max of 5 non-NHS hours for juniors and max of 10 non-NHS hours for seniors).`
            );
          }
        }

        if(!found){
          setTextToDisplay("Couldn't find your record in the spreadsheet. Please try again or email an NHS officer.")
        }
      }
    }
  };

  return (
    <div
      css={css`
        width: calc(100vw - 60px);
        background-color: var(--light-gray);
        margin-left: 30px;
        padding: 10px 0;
        border-radius: 5px;

        @media only screen and (min-width: 1700px) {
          margin: 0 calc(((100vw - 1700px) / 2) + 30px);
          width: 1640px;
        }
      `}
    >
      <div
        css={css`
          width: calc(100% - 60px);
          margin-left: 10px;
          margin-right: 10px;
          margin-top: 10px;
          min-height: 20px;
          padding: 20px;

          display: grid;
          grid-template-areas:
            "header header"
            "form info";
          grid-template-rows: auto auto;
          grid-template-columns: 1fr 1fr;

          @media only screen and (max-width: 500px) {
            grid-template-areas:
              "header"
              "form"
              "info";
            grid-template-rows: auto auto auto;
            grid-template-columns: 100%;
          }
        `}
      >
        <div
          css={css`
            background-color: var(--dark-gray);
            border-radius: 5px;
            padding: 20px;
            width: calc(100% - 40px);
            grid-area: header;
          `}
        >
          <p
            css={css`
              font-family: "Inter", sans-serif;
              font-size: 1.5rem;
              font-weight: 600;
            `}
          >
            Check your hours
          </p>
        </div>
        <div
          css={css`
            grid-area: form;
          `}
        >
          <EntryName text="First name" />
          <TextInput htmlID="first_name" />
          <EntryName text="Last name" />
          <TextInput htmlID="last_name" />
          <EntryName text="Year of graduation" />
          <TextInput htmlID="yog" />
          <Button text="Check hours" onPress={() => generateReport()} />
        </div>
        <div
          css={css`
            grid-area: info;
          `}
        >
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
            {textToDisplay}
          </p>
        </div>
      </div>
    </div>
  );
};
