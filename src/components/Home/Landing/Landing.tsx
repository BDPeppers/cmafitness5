import { Button } from "@mui/material";
import Link from "next/link";
import GymSlider from "./GymSlider";
//test
const Landing = () => {
  return (
    <>
      <GymSlider />

      <div className="landing-promos container">
        {/* <div className="event-highlight column-start">
          <h1 className="header para-large">Deadlifts & Donuts 🍩:</h1>
          <p className="para-small">Brunch, Lift, & Meet ~ 3/25 ~ 10AM-12PM</p>
          <p className="para-small">
            Meet some other local lifters! And if you just wanna watch and hang
            out with us, that’s cool too!
          </p>
          <Link href="https://www.instagram.com/p/CpQ2DewLKwk/">
            <Button size="medium" className="yt-bg para-small btn">
              Learn more
            </Button>
          </Link>
        </div> */}
        <div className="guest-pass column-start">
          <h1 className="header para-large">Membership guest pass:</h1>
          <p className="para-small">Free 5 day gym trial!</p>
          <br />
          <Link href="/Memberships">
            <Button size="medium" className="yt-bg para-small btn">
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
