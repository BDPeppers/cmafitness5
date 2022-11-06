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
          <h1 className="header para-large">FALL SPECIAL! 🍁</h1>
          <p className="para-small">
            Buy 2 months, GET ONE MONTH FREE! (Expires 12/1)
          </p>
          <Link href="https://secure.peakpayment.com/8821/join/?o_club_url=8821">
            <Button size="medium" className="yt-bg para-small btn">
              Sign up
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
