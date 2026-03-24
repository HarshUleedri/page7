import Expertise from "./component/Expertise";
import FAQ from "./component/FAQ";
import Hero from "./component/Hero";
import JoinUs from "./component/JoinUs";
import OurTeam from "./component/OurTeam";
import Testimonials from "./component/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Expertise />
      <OurTeam />
      <Testimonials />
      <FAQ />
      <JoinUs />
    </>
  );
};

export default Home;
