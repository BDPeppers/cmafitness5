import Image from "next/image";

export interface ServiceCardProps {
  title: string;
  description: string;
  img: any;
}

const ServiceCard = ({ title, description, img }: ServiceCardProps) => {
  return (
    <div className="cma-service-card">
      <div className="service-header">
        <h1 className="header-med">{title}</h1>
      </div>
      <div className="service-img-box">
        <Image src={img} alt={title} />
      </div>

      <div className="service-description">
        <h2 className="para-small">{description}</h2>
      </div>
    </div>
  );
};

export default ServiceCard;
