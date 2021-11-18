import Layout from "components/Layout";
import About from "components/parts/LandingPage/About";
import Features from "components/parts/LandingPage/Features";
import Hero from "components/parts/LandingPage/Hero";
import Partners from "components/parts/LandingPage/Partners";
import Testimony from "components/parts/LandingPage/Testimony";

export default function LandingPage(props) {
  return (
    <Layout pageTitle="Landing">
      <Hero />
      <About />
      <Partners />
      <Features />
      <Testimony />
    </Layout>
  );
}
