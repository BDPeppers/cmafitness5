import ServiceCard from "./ServiceCard";

import GroupFitnessPic from "../../../../../public/imgs/services/groupfitness.png";
import PersonalTrainingPic from "../../../../../public/imgs/services/personaltraining.png";
import BodyBuildingPic from "../../../../../public/imgs/services//bodybuildingprep.png";
import CMAKidzPic from "../../../../../public/imgs/services/kidzfitness.png";
import FemaleFitnessPic from "../../../../../public/imgs/services/women.png";
import CoedGymPic from "../../../../../public/imgs/services/coed.png";
import AllTheTimePic from "../../../../../public/imgs/services/24hourfitness.png";
import BestCustPic from "../../../../../public/imgs/services/bestcust.png";

type ServiceCardData = {
  title: string;
  description: string;
  img: any;
};

const cardList: Array<ServiceCardData> = [];

const GroupFitness: ServiceCardData = {
  title: "Group Fitness",
  description: `Our passionate instructors lead exhilarating fitness
  classes welcoming to both beginners and pros.`,
  img: GroupFitnessPic,
};
cardList.push(GroupFitness);

const PersonalTraining: ServiceCardData = {
  title: "Personal Training",
  description: `Try our one-on-one sessions with personal trainers dedicated
    to helping you reach your fitness goals!`,
  img: PersonalTrainingPic,
};
cardList.push(PersonalTraining);

const BodyBuilding: ServiceCardData = {
  title: "Bodybuilding Prep Coaching",
  description: `We provide contest prep coaching and programs
    for women's physique and men's physique competitions!`,
  img: BodyBuildingPic,
};
cardList.push(BodyBuilding);

const CMAKidz: ServiceCardData = {
  title: "CMA Kidz Care",
  description: `Child care is provided at the gym so that you can 
  focus on your workout! Kidz Fit classes are available seasonally!`,
  img: CMAKidzPic,
};
cardList.push(CMAKidz);

const FemaleFitness: ServiceCardData = {
  title: "Exclusive Female Fitness",
  description: `Women-only group fitness classes are offered
  along with designated workout areas!`,
  img: FemaleFitnessPic,
};
cardList.push(FemaleFitness);

const CoedGym: ServiceCardData = {
  title: "Coed Gym",
  description: `During business hours the gym will be open to all, regardless of gender.`,
  img: CoedGymPic,
};
cardList.push(CoedGym);

const AllTheTime: ServiceCardData = {
  title: "24 Hour Fitness",
  description: "24 hour key fob access is available.",
  img: AllTheTimePic,
};
cardList.push(AllTheTime);

const BestCust: ServiceCardData = {
  title: "Best Customer Service In Town",
  description: `We strive to provide the
  best fitness experience in Warner Robins and the Middle GA area.`,
  img: BestCustPic,
};
cardList.push(BestCust);

const ServiceCardList = () => {
  return (
    <>
      {cardList.map((card, x) => {
        return (
          <ServiceCard
            title={card.title}
            description={card.description}
            img={card.img}
            key={x}
          />
        );
      })}
    </>
  );
};

export default ServiceCardList;
