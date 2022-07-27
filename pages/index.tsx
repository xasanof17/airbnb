import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="app">
      <Head>
        <title>airbnb</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>

      <h1>Hello Airbnb</h1>
    </div>
  );
};

export default Home;
