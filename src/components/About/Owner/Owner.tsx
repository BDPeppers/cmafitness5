import chanda1 from "../../../../public/imgs/staff/chanda1.png";
import Image from "next/image";

const Owner = () => {
  return (
    <div className="owner-box container ">
      <div className="bio-box column-start">
        <h1 className="header-xLarge">About the owner</h1>
        <br />
        <br />
        <p className="para-small">
          CMA Fitness takes a different approach compared to other gyms. Chanda
          Akles is the owner and operator of CMA and like many others, she has
          seen many approaches to gym memberships, and realized early on, it
          just doesn&apos;t work for most people. Chanda is a personal trainer
          and fitness instructor. While she was going to school at Middle
          Georgia State and finishing up her degree in Public & Human Services,
          she worked as an aerobics instructor. &quot;The problem with working
          at these gyms was that I loved my clients, we would develop a
          relationship. Then later, that gym would hurt the person, and maybe it
          was through a contract dispute or financial issues, and that would
          affect our relationship. I wanted to be somewhere I was in control of
          what the person received. I wanted it to be more intimate.&quot;
          Chanda decided to have her own space and she created CMA Fitness. No
          contracts, a diversified array of classes to take, with multiple
          instructors, and one on one attention. She takes a holistic approach
          and gets to know the person, their health issues, their behaviors, and
          develops a plan that works for that individual.
        </p>
      </div>
      <Image
        className="owner"
        src={chanda1}
        alt="Chanda Akles - CMA Fitness - Warner Robins Gym"
      />
    </div>
  );
};

export default Owner;
