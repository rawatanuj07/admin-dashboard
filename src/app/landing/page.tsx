export const metadata = {
  title: "Decode Parvati - Admin Dashboard",
  description: "Page description",
};

import Hero from "../../components/landingcomponents/hero-home";
import BusinessCategories from "../../components/landingcomponents/business-categories";
import FeaturesPlanet from "../../components/landingcomponents/features-planet";
import LargeTestimonial from "../../components/landingcomponents/large-testimonial";
import Cta from "../../components/landingcomponents/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
