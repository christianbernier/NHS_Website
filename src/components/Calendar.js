/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * Calendar.js — The calendar, including fetching events
 * © 2021 to National Honor Society Lexington, MA Chapter
 * 
 * Created by Christian Bernier on 2021-02-12
 */

import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import TextWithLinks from "./TextWithLinks";
import { Link } from "gatsby";

export default () => {
  const [month, setMonth] = useState({
    m: "Loading...",
    y: "",
    weeks: [],
  });

  const [events, setEvents] = useState([]);
  const [displayEvents, setDisplayEvents] = useState([]);

  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    resetMonth();
    fetch(
      "https://spreadsheets.google.com/feeds/list/16IDggfm1EVV9D9WwYv7qlGmPxDm6iSctGUGlapFNrFk/1/public/full?alt=json"
    )
      .then((data) => data.json())
      .then((data) => {
        let currentEvents = JSON.parse(JSON.stringify(events));
        for (const entry of data.feed.entry) {
          currentEvents.push({
            title: entry["gsx$eventtitle"]["$t"],
            id: entry["gsx$id"]["$t"],
            display: entry["gsx$display"]["$t"],
            stime: entry["gsx$eventstart"]["$t"],
            etime: entry["gsx$eventend"]["$t"],
            description: entry["gsx$eventdetails"]["$t"],
            type: entry["gsx$eventtype"]["$t"],
          });
        }
        setEvents(currentEvents);
      });
  }, []);

  useEffect(() => {
    let currentDisplayEvents = [];
    for (const event of events) {
      const now = new Date();
      if (event.display !== "TRUE") {
        continue;
      }
      const eventTime = new Date(event.stime);
      const eventEndTime = new Date(event.etime);
      if (eventTime.getMonth() + 1 !== month.m) {
        continue;
      }

      currentDisplayEvents.push({
        time: eventTime,
        day: eventTime.getDate(),
        shour: eventTime.getHours(),
        smin: eventTime.getMinutes(),
        ehour: eventEndTime.getHours(),
        emin: eventEndTime.getMinutes(),
        title: event.title,
        description: event.description,
        id: event.id,
      });
    }
    setDisplayEvents(currentDisplayEvents);
  }, [month.m, events]);

  const resetMonth = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    updateMonthFeatures(month, year);
  };

  const prettyTime = (h, m) => {
    let timeString = "";
    let ampm;

    if (h === 0) {
      timeString += "12";
      ampm = "AM";
    } else if (h > 12) {
      timeString += h - 12;
      ampm = "PM";
    } else {
      timeString += h;
      ampm = "AM";
    }

    if (h === 12) {
      ampm = "PM";
    }

    timeString += ":";

    if (m < 10) {
      timeString += "0" + m;
    } else {
      timeString += m;
    }

    timeString += " " + ampm;

    return timeString;
  };

  const prettyDate = (t) => {
    const time = new Date(t);
    const y = time.getFullYear();
    const d = time.getDate();

    let dEnding = "th";

    if (d === 11 || d === 12) {
      dEnding = "th";
    } else if (d % 10 === 1) {
      dEnding = "st";
    } else if (d % 10 === 2) {
      dEnding = "nd";
    } else if (d % 10 === 3) {
      dEnding = "rd";
    }

    let m;

    switch (time.getMonth() + 1) {
      case 1:
        m = "January ";
        break;
      case 2:
        m = "February ";
        break;
      case 3:
        m = "March ";
        break;
      case 4:
        m = "April ";
        break;
      case 5:
        m = "May ";
        break;
      case 6:
        m = "June ";
        break;
      case 7:
        m = "July ";
        break;
      case 8:
        m = "August ";
        break;
      case 9:
        m = "September ";
        break;
      case 10:
        m = "October ";
        break;
      case 11:
        m = "November ";
        break;
      case 12:
        m = "December ";
        break;
      default:
        m = "Error";
    }

    return m + d + dEnding + ", " + y;
  };

  const updateMonthFeatures = (m, y) => {
    let mStr = m + "";

    if (m < 10) {
      mStr = `0${m}`;
    }

    const first = new Date(`${y}-${mStr}-01T12:00:00-0500`);
    const starts = first.getDay();

    let daysOfMonth = 31;
    if ([4, 6, 9, 11].indexOf(m) !== -1) {
      daysOfMonth = 30;
    } else if (m === 2) {
      if (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)) {
        daysOfMonth = 29;
      } else {
        daysOfMonth = 28;
      }
    }

    let weeksNeeded = Math.floor((daysOfMonth + starts + 6) / 7);

    let weekStructure = [];
    for (let i = 0; i < weeksNeeded; i++) {
      weekStructure.push([0, 0, 0, 0, 0, 0, 0]);
    }

    for (let i = 0; i < daysOfMonth; i++) {
      const onWeek = Math.floor((i + starts) / 7);
      const dayThatWeek = (i + starts) % 7;
      weekStructure[onWeek][dayThatWeek] = i + 1;
    }

    setMonth({
      m: m,
      y: y,
      weeks: weekStructure,
      starts: starts,
      events: [],
    });
  };

  const monthAsString = () => {
    let monthString = "";
    switch (month.m) {
      case 1:
        monthString = "January ";
        break;
      case 2:
        monthString = "February ";
        break;
      case 3:
        monthString = "March ";
        break;
      case 4:
        monthString = "April ";
        break;
      case 5:
        monthString = "May ";
        break;
      case 6:
        monthString = "June ";
        break;
      case 7:
        monthString = "July ";
        break;
      case 8:
        monthString = "August ";
        break;
      case 9:
        monthString = "September ";
        break;
      case 10:
        monthString = "October ";
        break;
      case 11:
        monthString = "November ";
        break;
      case 12:
        monthString = "December ";
        break;
      default:
        monthString = "Error";
    }

    monthString += month.y;
    return monthString;
  };

  const incrementMonth = () => {
    if (month.m >= 12) {
      updateMonthFeatures(1, month.y + 1);
    } else {
      updateMonthFeatures(month.m + 1, month.y);
    }
  };

  const decrementMonth = () => {
    if (month.m <= 1) {
      updateMonthFeatures(12, month.y - 1);
    } else {
      updateMonthFeatures(month.m - 1, month.y);
    }
  };

  return (
    <>
      <div
        css={css`
          width: calc(100vw - 60px);
          background-color: var(--light-gray);
          margin-left: 30px;
          padding: 10px 0;
          border-radius: 5px;

          overflow-y: hidden;
          overflow-x: hidden;

          display: grid;
          grid-template-areas:
            "month selectors"
            "cal   cal";
          grid-template-rows: 100px auto;
          grid-template-columns: auto 30%;

          @media only screen and (min-width: 1700px) {
            margin: 0 calc(((100vw - 1700px) / 2) + 30px);
            width: 1640px;
          }

          @media only screen and (max-width: 500px) {
            grid-template-areas:
              "month"
              "selectors"
              "cal";
            grid-template-rows: 50px auto auto;
            grid-template-columns: auto;
          }
        `}
      >
        <div
          css={css`
            grid-area: month;
            padding: 20px;

            @media only screen and (max-width: 500px) {
              padding-bottom: 0;
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
            {monthAsString()}
          </p>
        </div>
        <div
          css={css`
            grid-area: selectors;
            padding: 20px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            text-align: center;

            @media only screen and (max-width: 500px) {
              justify-content: flex-start;
            }
          `}
        >
          <div
            css={css`
              height: 40px;
              border-radius: 5px;
              margin-right: 15px;
              background-color: var(--dark-gray);
              display: flex;
              align-items: center;
              cursor: pointer;
            `}
            onClick={() => resetMonth()}
          >
            <p
              css={css`
                font-family: "Inter", sans-serif;
                font-size: 1rem;
                font-weight: 600;
                margin: 0 10px;
              `}
            >
              Today
            </p>
          </div>
          <div
            css={css`
              width: 50px;
              height: 40px;
              border-top-left-radius: 5px;
              border-bottom-left-radius: 5px;
              margin-right: 5px;
              background-color: var(--dark-gray);
              cursor: pointer;
            `}
            onClick={() => decrementMonth()}
          >
            <p
              css={css`
                font-family: "Inter", sans-serif;
                font-size: 1.4rem;
                font-weight: 600;
              `}
            >
              &lt;
            </p>
          </div>
          <div
            css={css`
              width: 50px;
              height: 40px;
              border-top-right-radius: 5px;
              border-bottom-right-radius: 5px;
              background-color: var(--dark-gray);
              cursor: pointer;
            `}
            onClick={() => incrementMonth()}
          >
            <p
              css={css`
                font-family: "Inter", sans-serif;
                font-size: 1.4rem;
                font-weight: 600;
              `}
            >
              &gt;
            </p>
          </div>
        </div>
        <div
          css={css`
            grid-area: cal;
            padding: 20px;

            @media only screen and (max-width: 500px) {
              display: none;
            }
          `}
        >
          <div
            css={css`
              margin-bottom: 10px;
              display: flex;
              flex-direction: row;
            `}
          >
            {daysOfTheWeek.map((d, i) => {
              return (
                <div
                  key={`dayofweek-${i}`}
                  css={css`
                    margin-right: 5px;
                    width: calc((100% - 30px) / 7);
                    text-align: center;

                    :last-of-type {
                      margin-right: 0;
                    }
                  `}
                >
                  <p
                    css={css`
                      font-family: "Inter", sans-serif;
                      font-size: 1rem;
                      font-style: italic;
                      font-weight: 400;
                    `}
                  >
                    {d}
                  </p>
                </div>
              );
            })}
          </div>

          {month.weeks.map((w, i) => {
            return (
              <div
                key={`week-${i}`}
                css={css`
                  display: flex;
                  flex-direction: row;
                  margin-bottom: 5px;
                `}
              >
                {w.map((d, j) => {
                  return (
                    <div
                      key={`w-${i}-d-${j}`}
                      css={css`
                        background-color: ${d === 0 ? "" : "var(--dark-gray)"};
                        border-radius: 5px;
                        min-height: 100px;
                        margin-right: 5px;
                        width: calc((100% - 30px) / 7);

                        :last-of-type {
                          margin-right: 0;
                        }
                      `}
                    >
                      <p
                        css={css`
                          font-family: "Inter", sans-serif;
                          font-size: 1rem;
                          font-style: italic;
                          font-weight: 400;
                          margin: 5px;
                          display: ${d === 0 ? "none" : ""};
                        `}
                      >
                        {d}
                      </p>
                      {displayEvents.map((e, i) => {
                        return (
                          <Link
                            key={`event-${i}`}
                            css={css`
                              text-decoration: none;
                            `}
                            to={`../event?id=${e.id}`}
                          >
                            <div
                              css={css`
                                display: ${e.day === d ? "" : "none"};
                                background-color: var(--light-blue);
                                margin: 0 5px;
                                border-radius: 5px;
                              `}
                            >
                              <p
                                css={css`
                                  font-family: "Inter", sans-serif;
                                  font-size: 1rem;
                                  font-weight: 400;
                                  font-style: italic;
                                  margin: 5px;
                                  margin-bottom: 0;
                                  color: var(--light);
                                `}
                              >
                                {prettyTime(e.shour, e.smin) +
                                  " – " +
                                  prettyTime(e.ehour, e.emin)}
                              </p>
                              <p
                                css={css`
                                  font-family: "Inter", sans-serif;
                                  font-size: 1rem;
                                  font-weight: 600;
                                  margin: 5px;
                                  color: var(--light);
                                `}
                              >
                                {e.title}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div
          css={css`
            grid-area: cal;
            padding: 20px;

            @media only screen and (min-width: 501px) {
              display: none;
            }
          `}
        >
          <p
            css={css`
              font-family: "Inter", sans-serif;
              font-size: 1.2rem;
              font-weight: 400;
              font-style: italic;
              margin: 5px;
              margin-bottom: 0;
              display: ${displayEvents.length === 0 ? "" : "none"};
            `}
          >
            No events to display.
          </p>
          {displayEvents.map((e, i) => {
            return (
              <Link
                key={`event-${i}`}
                css={css`
                  text-decoration: none;
                `}
                to={`../event?id=${e.id}`}
              >
                <div
                  css={css`
                    background-color: var(--light-blue);
                    padding: 10px 5px;
                    border-radius: 5px;
                    margin-bottom: 20px;
                  `}
                >
                  <p
                    css={css`
                      font-family: "Inter", sans-serif;
                      font-size: 1rem;
                      font-weight: 600;
                      margin: 5px;
                      color: var(--light);
                    `}
                  >
                    {e.title}
                  </p>
                  <p
                    css={css`
                      font-family: "Inter", sans-serif;
                      font-size: 1rem;
                      font-weight: 400;
                      font-style: italic;
                      margin: 5px;
                      margin-bottom: 0;
                      color: var(--light);
                    `}
                  >
                    {prettyDate(e.time)}
                    <br />
                    {prettyTime(e.shour, e.smin) +
                      " – " +
                      prettyTime(e.ehour, e.emin)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
