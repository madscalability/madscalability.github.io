const videoID = (videoURL) => {
  const vsplit = videoURL.split("v=");
  return vsplit.length > 1 && vsplit[1].split("&")[0];
};

export default videoID;
