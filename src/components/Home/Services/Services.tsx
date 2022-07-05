import cma from "../../../../public/imgs/cma.png";
import Image from "next/image";
import ServiceCardList from "./ServiceCard/ServiceCardList";

const Services = () => {
  return (
    <div className="cma-services">
      <div className="service-header">
        <Image src={cma} alt="CMA Fitness - Warner Robins Gym" />
        <div className="cma-services-box column-start">
          <h1 className="header-med">Gym services:</h1>
          <p className="para-med">
            CMA Fitness provides personal and group fitness training,
            bodybuilding competition preparation coaching, and as well as meal
            and training guides. We target men and women of all ages looking for
            help reaching their health and fitness goals.
          </p>
        </div>
      </div>
      <div className="service-cards">
        <ServiceCardList />
      </div>
    </div>
  );
};
export default Services;
