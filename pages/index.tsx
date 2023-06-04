import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../src/components/Home/Landing/Landing";
import Services from "../src/components/Home/Services/Services";
import InstaFeed from "../src/components/Home/InstaFeed/InstaFeed";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CMA Fitness - Warner Robins Gym and Fitness Near You</title>
        <meta
          name="description"
          content="Warner Robins gym providing quality fitness to the Middle GA area.
                  Offering bodybuilding competition prep, personal training, meal and training guides,
                  group fitness classes, and even a gym daycare."
        />
      </Head>
      <Landing />
      <Services />
      <InstaFeed />
    </>
  );
};

export default Home;
