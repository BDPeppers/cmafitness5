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
          <h1 className="header para-large">Event highlight:</h1>
          <p className="para-small">
            “Make it Happen Sis” 💼 brings food, fun and inspiration to ladies
            ready to move upward! Let’s inspire and empower one another!
          </p>
          <Link href="https://www.instagram.com/p/Cdjhd2Ggm6k/">
            <Button size="medium" className="yt-bg para-small btn">
              Learn more
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
