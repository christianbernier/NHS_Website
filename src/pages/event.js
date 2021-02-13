import React, { useState, useEffect } from "react";
import GlobalCSS from "../components/GlobalCSS";
import Header from "../components/Header";
import BodyHeader from "../components/BodyHeader";
import BodyText from "../components/BodyText";
import Gap from "../components/Gap.js";
import { Helmet } from "react-helmet-async";

export default () => {
  const [eventDetails, setEventDetails] = useState({});

  useEffect(() => {
    let eventID = "00000";

    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      eventID = urlParams.get("id");
    }

    fetch(
      "https://spreadsheets.google.com/feeds/list/16IDggfm1EVV9D9WwYv7qlGmPxDm6iSctGUGlapFNrFk/1/public/full?alt=json"
    )
      .then((data) => data.json())
      .then((data) => {
        for (const entry of data.feed.entry) {
          if (entry["gsx$id"]["$t"] === eventID) {
            setEventDetails({
              title: entry["gsx$eventtitle"]["$t"],
              stime: entry["gsx$eventstart"]["$t"],
              etime: entry["gsx$eventend"]["$t"],
              description: entry["gsx$eventdetails"]["$t"],
            });
            return;
          }
        }
      });
  }, []);

  const prettyTime = (t) => {
    const time = new Date(t);
    const h = time.getHours();
    const m = time.getMinutes();

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

  const conjugateOccur = (s, e) => {
    const start = new Date(s);
    const end = new Date(e);
    const now = new Date();

    const hasStarted = (now - start) > 0;
    const hasEnded = (now - end) > 0;

    if (!hasStarted) {
      return "will occur";
    } else if (hasStarted && !hasEnded){
      return "is occuring";
    } else if (hasEnded){
      return "occurred";
    }
  };

  return (
    <>
      <GlobalCSS />
      <Helmet>
        <title>{eventDetails.title + " | NHS"}</title>
        <meta property="og:title" content={eventDetails.title + " | NHS"} />
      </Helmet>
      <Header />
      <div id="content_area">
        <Gap height="30px" />
        <BodyHeader
          text={eventDetails.title || "Unable to find event"}
          line={true}
        />
        {eventDetails.title ? (
          <BodyText
            paragraphs={[
              "This event " +
                conjugateOccur(eventDetails.stime, eventDetails.etime) +
                " on " +
                prettyDate(eventDetails.stime) +
                " from " +
                prettyTime(eventDetails.stime) +
                " until " +
                prettyTime(eventDetails.etime) +
                ".",
              eventDetails.description,
            ]}
          />
        ) : (
          <BodyText
            paragraphs={[
              "There has been an error fetching this event's details from the database. Please ensure you entered a valid event ID and try again. If this issue persists, please contact Christian Bernier.",
            ]}
          />
        )}

        <Gap height="30px" />
      </div>
    </>
  );
};
