import React from "react";

const HearthIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
);

const Footer = () => (
  <div className="w-full text-center bg-gray-100 p-4">
    <div className="text-gray-500 text-sm">
      Made with
      <HearthIcon className="inline fill-current text-main-500 h-5 w-5 ml-1 mr-1 animate-pulse" />
      by
      <a href="https://twitter.com/agonzalezro">@agonzalezro</a>
    </div>
  </div>
);

export default Footer;
