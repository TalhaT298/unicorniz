import Banner from "./components/Home/Banner/Banner";
import OurStory from "./components/Home/OurStory/OurStory";
import Projects from "./components/Home/Projects/Projects";
import Services from "./components/Home/Services/Services";
import Testimonial from "./components/Home/Testimonial/Testimonial";
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Unicorniz | Home</title>
        <meta name="keywords" content="Unicorniz" />
      </Head>
      <div className="px-[4.75vw] ">
        <Banner />    
      </div>
        <OurStory/>
      <div className="px-[4.75vw] ">
        <Services/>
        <Projects />
        <Testimonial/>
      </div>
    </>
  )
}
