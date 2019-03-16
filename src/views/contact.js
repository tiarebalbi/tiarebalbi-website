import React from "react";
import Layout from "../components/page/layout";
import Head from "../components/page/head";

const Contact = () => {
  const header = {
    title: "get in touch.",
    description:
      "Send me your question and I will get back to you as soon as possible.",
    keywords:
      "software engineer,java,scala,kotlin,react.js,angularjs,full stack developer,developer,coding,programming back-end,front-end,software architecture"
  };

  return (
    <Layout>
      <Head
        title={header.title}
        description={header.description}
        keywords={header.keywords}
      />
      Contact
    </Layout>
  );
};

export default Contact;
