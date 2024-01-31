import React from 'react'
import './Home.css'
// import HeroImage from '../../components/heroImage/HeroImage'
// import bgImage from "../../assets/banner.png";

const Home = () => {
  return (
    <>
    <div className=''>
      <div className='heroHome-img container'>
        <div className='heroHome-content'>
            <h1 className='heading-primary'>
                <span>welcome</span> to demo project
            </h1>

            <p className='text-white'>
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className='text-white'>
              Book online or call 
              <span className='special-word'>(555)123-4567</span>
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

export default Home