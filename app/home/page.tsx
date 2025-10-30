import Hero from "../../components/Hero";
import About from "../../components/About";
import UpcomingEvents from "../../components/UpcomingEvents";
import Courses from "../../components/Courses";
import WhatOurStudentsSay from "../../components/WhatOurStudentsSay";
import WhyChooseUs from "../../components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Courses />
        <WhyChooseUs />
        <WhatOurStudentsSay />
        <UpcomingEvents />
      </main>
    </>
  );
}
