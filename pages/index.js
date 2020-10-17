import React from "react";

import Link from "next/link";

import humanizedLanguage from "../utils/language";
import videoID from "../utils/video";
import data from "../public/meetups.json";

const slug = require("slug");
const ReactMarkdown = require("react-markdown");

const thumbnail = (videoURL) => {
  const id = videoID(videoURL);
  if (id) return `https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`;
};

const Meetup = (meetup) => (
  <Link href={slug(meetup.title)}>
    <a>
      <div className="w-full rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full"
          src={thumbnail(meetup.video)}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl">{meetup.title}</div>
          <div className="font-semibold text-gray-800 mb-4">
            by {meetup.speakers.map((s) => s.name).join(" & ")}
          </div>

          <ReactMarkdown
            className="text-gray-700 mb-6"
            disallowedTypes={["link", "linkReference"]}
            unwrapDisallowed={true}
            source={meetup.abstract}
          />

          <div className="pb-2">
            <span className="inline-block bg-main-500 text-white rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
              {meetup.date}
            </span>
            <span className="inline-block bg-main-500 text-white rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
              {humanizedLanguage(meetup.language)}
            </span>
          </div>
        </div>
      </div>
    </a>
  </Link>
);

const Meetups = (meetups) =>
  meetups.map((meetup, index) => (
    <div className="w-full md:w-2/6 md:m-6" key={index}>
      {Meetup(meetup)}
    </div>
  ));

const Home = ({ meetups }) => (
  <div className="flex justify-center content-center flex-wrap bg-gray-100">
    {Meetups(meetups)}
  </div>
);

export const getStaticProps = async () => ({
  props: {
    meetups: data.meetups,
  },
});

export default Home;
