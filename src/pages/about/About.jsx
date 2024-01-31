import React from 'react'
import "./About.css"
// import bgImage from "../../assets/aboutImage.png";
// import HeroImage from '../../components/heroImage/HeroImage';

const About = () => {
  return (
    <>
    <div className=''>
      <div className='heroAbout-img container'>
        <div className='heroAbout-content'>
            <h1 className='heading-primary'>
              about us
              <span className="ampersand"> & </span>
              photo gallery
            </h1>

            <p className='text-white'>
            Take a look at the place, the people and the................
            </p>
        </div>
      </div>
    </div>


    {/* <HeroImage
        bgImage={bgImage}
        heading={["about us ", <span className="ampersand"> & </span>, " photo gallery"]}
        text="Take a look at the place, the people and the food…"
      /> */}
    </>
  )
}

export default About