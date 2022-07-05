interface MembershipBoxProps {
  title: string;
  details: string;
}

const MembershipBox = ({ title, details }: MembershipBoxProps) => {
  return (
    <div className="membership-box">
      <h1 className="membership-level header-med">{title}</h1>
      <p className="membership-desc para-med">{details}</p>
    </div>
  );
};

export default MembershipBox;
