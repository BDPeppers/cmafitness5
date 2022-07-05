import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../src/components/Home/Banner/Banner";
import Landing from "../src/components/Home/Landing/Landing";
import Services from "../src/components/Home/Services/Services";
import Testimonials from "../src/components/Home/Testimonials/Testimonials";
import styles from "../styles/Home.module.css";

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
      <Testimonials />
      <Banner />
    </>
  );
};

export default Home;
