import Owner from "../src/components/About/Owner/Owner";
import WhyCma from "../src/components/About/WhyCMA/WhyCMA";
import Testimonials from "../src/components/Home/Testimonials/Testimonials";

const About = () => {
  return (
    <section className="cma-page">
      <WhyCma />
      <Owner />
      <Testimonials />
    </section>
  );
};

export default About;
