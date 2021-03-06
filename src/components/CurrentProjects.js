/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * CurrentProjects.js — A list of all the current projects, updated from a database
 * © 2020-2021 to National Honor Society Lexington, MA Chapter
 * 
 * Created by Christian Bernier on 2020-09-05
 */

import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import TextWithLinks from "../components/TextWithLinks";

export default () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      "https://spreadsheets.google.com/feeds/list/145NLhLVowoiFg8E_E9tQbxP-yM4bOH9lA1xvv7guP2Y/1/public/full?alt=json"
    )
      .then((data) => data.json())
      .then((data) => {
        let currentProjects = JSON.parse(JSON.stringify(projects));
        for (const entry of data.feed.entry) {
          currentProjects.push({
            title: entry["gsx$name"]["$t"],
            id: entry["gsx$id"]["$t"],
            display: entry["gsx$display"]["$t"],
            time: entry["gsx$dateortime"]["$t"],
            expires: entry["gsx$expires"]["$t"],
            description: entry["gsx$description"]["$t"],
            coordinator_name: entry["gsx$coordinatorfullname"]["$t"],
            coordinator_email: entry["gsx$coordinatoremail"]["$t"],
          });
        }
        currentProjects.sort((a, b) => Math.random() - 0.5);
        setProjects(currentProjects);
      });
  }, []);

  return (
    <div
      css={css`
        width: calc(100vw - 60px);
        height: 500px;
        background-color: var(--light-gray);
        margin-left: 30px;
        padding: 10px 0;
        border-radius: 5px;

        overflow-y: scroll;
        overflow-x: hidden;

        @media only screen and (min-width: 1700px) {
          margin: 0 calc(((100vw - 1700px) / 2) + 30px);
          width: 1640px;
        }
      `}
    >
      {projects.length === 0 ? (
        <p
          css={css`
            font-family: "Inter", sans-serif;
            font-size: 1.5rem;
            font-weight: 600;
            width: 100%;
            text-align: center;
            margin-top: 30px;
          `}
        >
          Unable to load projects.
        </p>
      ) : (
        <></>
      )}
      {projects.map((p) => {

        const expiresOn = new Date(p.expires);
        const now = new Date();
        if((expiresOn - now) < 0 || p.display !== "TRUE"){
          return;
        }

        return (
          <div
            css={css`
              width: calc(100% - 60px);
              margin-left: 10px;
              margin-right: 10px;
              margin-top: 10px;
              min-height: 20px;
              padding: 20px;
              background-color: var(--dark-gray);
              border-radius: 5px;

              display: flex;
              flex-direction: column;
              align-items: flex-start;
            `}
            key={p.id}
          >
            <div
              css={css`
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-end;
                width: 100%;

                @media only screen and (max-width: 500px) {
                  flex-direction: column;
                  align-items: flex-start;
                }
              `}
            >
              <p
                css={css`
                  font-family: "Inter", sans-serif;
                  font-size: 1.5rem;
                  font-weight: 600;
                `}
              >
                {p.title}
              </p>
              <p
                css={css`
                  font-family: "Inter", sans-serif;
                  font-size: 1rem;
                  font-weight: 400;
                  font-style: italic;
                `}
              >
                {p.time}
              </p>
            </div>
            <TextWithLinks
              text={p.description}
            />
            <p
              css={css`
                font-family: "Inter", sans-serif;
                font-size: 1.2rem;
                font-weight: 400;
                margin-top: 15px;
              `}
            >
              For more information, please contact{" "}
              <a
                css={css`
                  color: var(--font-color);
                `}
                href={`mailto:${p.coordinator_email}`}
              >
                {p.coordinator_name}
              </a>
              .
            </p>
          </div>
        );
      })}
    </div>
  );
};
