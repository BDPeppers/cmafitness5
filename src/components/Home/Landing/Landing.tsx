import { Button } from "@mui/material";
import Link from "next/link";
import GymSlider from "./GymSlider";
//test
const Landing = () => {
  return (
    <>
      <GymSlider />

      <div className="landing-promos container">
        <div className="event-highlight column-start">
          <h1 className="header para-large">FALL IN LOVE with FITNESS!</h1>
          <p className="para-small">50% OFF Sign-on Fee Sept-Oct 🍁🍂🎃</p>
          <Link href="/Memberships">
            <Button size="medium" className="yt-bg para-small btn">
              Sign Up
            </Button>
          </Link>
        </div>
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
