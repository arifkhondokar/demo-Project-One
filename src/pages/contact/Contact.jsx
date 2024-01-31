import React from 'react'
import './Contact.css'
// import bgImage from "../../assets/contactImage.png";
// import HeroImage from '../../components/heroImage/HeroImage';


const Contact = () => {
  return (
    <>
    <div className=''>
      <div className='heroContact-img container'>
        <div className='heroContact-content'>
            <h1 className='heading-primary'>
            contact <span>us</span>
            </h1>

            <p className='text-white'>
            Feel free to contact with us..........
            </p>
        </div>
      </div>
    </div>


    {/* <HeroImage
        bgImage={bgImage}
        heading={["contact ", <span>us</span>]}
        text="Feel free to contact with us"
      /> */}

    </>
  )
}

export default Contact