import React from "react";

import humanizedLanguage from "../utils/language";
import videoID from "../utils/video";
import data from "../public/meetups.json";

const slug = require("slug");
const ReactMarkdown = require("react-markdown");

const videoEmbed = (videoURL) => {
  const id = videoID(videoURL);
  if (id) return `https://www.youtube.com/embed/${id}`;
};

const Meetup = ({ meetup }) => (
  <div className="flex justify-center content-center bg-gray-100">
    <div className="w-full lg:w-3/5 p-4">
      <div className="embed-responsive aspect-ratio-16/9">
        <iframe
          className="embed-responsive-item"
          src={videoEmbed(meetup.video)}
        ></iframe>
      </div>

      <h1 className="text-2xl font-bold mt-2">{meetup.title}</h1>
      <h2 className="text-xl font-semibold text-gray-800">by Álex</h2>

      <ReactMarkdown
        className="text-gray-900 mb-6"
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
);

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      meetup: data.meetups.filter(
        (meetup) => slug(meetup.title) == params.slug
      )[0],
    },
  };
};

export const getStaticPaths = async () => ({
  paths: data.meetups.map((meetup) => ({
    params: { slug: slug(meetup.title) },
  })),
  fallback: false,
});

export default Meetup;
