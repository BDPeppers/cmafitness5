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
          <h1 className="header para-large">
            LET&apos;S LIGHT UP THE NIGHT💫🍸
          </h1>
          <p className="para-small">
            Tacos + Tequila +{" "}
            <Link color="#DC6E31" href={"https://www.instagram.com/dj_rodb_/"}>
              @dj_rodb 🎧
            </Link>{" "}
            = FUEGO FRIDAY 🔥
          </p>
          <p className="para-small">You don&apos;t wanna miss this!</p>
          <Link href="https://www.instagram.com/p/Cn2sDMmALfB/">
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
