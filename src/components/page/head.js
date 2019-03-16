import React from "react";
import Helmet from "react-helmet-async";

const Head = ({ title, description, keywords, type, children }) => {
  const localTitle = `${title} - Tiarê Balbi Bonamini`;
  return (
    <Helmet>
      <title>{localTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="twitter:title" content={localTitle} />
      <meta name="twitter:description" content={description} />
      <meta property="og:title" content={localTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type || "website"} />
      {children}
    </Helmet>
  );
};

export default Head;
