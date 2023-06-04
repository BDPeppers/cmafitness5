import MembershipBox from "../src/components/Memberships/MembershipBox";
import MembershipBtn from "../src/components/Memberships/MembershipBtn";

const Memberships = () => {
  return (
    <section className="cma-page">
      <div className="container membership-container">
        <h1 className="header-xLarge membership-header">
          Primary membership packages
        </h1>
        <MembershipBox
          title="Free guest pass"
          details="Free 5 day gym trial!"
        />
        <MembershipBox
          title="Get started - $20 monthly"
          details="This package gives you what you need to get your foot in the door! Take advantage of our fitness facility during business hours! "
        />
        <MembershipBox
          title="24 hours - $25 monthly"
          details="There's always time for fitness, no matter your schedule!
         Get access to the facility during business hours as well as unlimited 24hr key fob access."
        />
        <MembershipBox
          title="V.I.P. - $30 monthly (Popular choice!)"
          details="Enjoy the perks of 24hour fitness, along with a 2 guest pass, unlimited group fitness classes and free childcare if needed!"
        />
        <MembershipBox
          title="V.I.P. No commitment - $45 monthly "
          details="Get the benefits of the V.I.P. membership with the freedom to cancel any time!"
        />
        <div className="membership-btn-box">
          <MembershipBtn
            text="Free pass"
            link={"https://secure.peakpayment.com/8821/prospect"}
          />
          <MembershipBtn
            text="Sign up"
            link={"https://secure.peakpayment.com/8821/join/?o_club_url=8821"}
          />
        </div>
      </div>
    </section>
  );
};

export default Memberships;
