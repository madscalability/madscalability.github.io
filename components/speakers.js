import React from "react";

const Speakers = ({ meetup }) => (
  <span>
    by{" "}
    {meetup.speakers
      .map((s) => {
        let name = s.name;
        if (s.role) name = s.name + ` (${s.role})`;

        if (s.twitter)
          return <a href={`http://twitter.com/${s.twitter}`}>{name}</a>;
        return name;
      })
      .reduce((prev, curr) => [prev, " & ", curr])}
  </span>
);

export default Speakers;
