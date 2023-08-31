import React from "react";
import Typed from 'react-typed';
import Banner1 from './assets/pictures/banner1.png'

const Hero = () => {

  

    const handleCalendlyClick = (e) => {
        e.preventDefault();
        window.Calendly.initPopupWidget({url: 'https://calendly.com/ryanhood/30min'});
    };

    return (
        <div className="">
            <div className="pt-12 max-w-[800px] mt-[-96px] w-full h-[50vh]  mx-auto text-center flex flex-col justify-center">
                <p className="py-12 text-[#FF0033] text-l font-bold p-2"> <br></br></p> 
                <p className="md:text-5xl sm:text-4xl text-xl font-bold pt-16">Grow with Data</p>
                <div>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">Find your Web Solutions</h1>                   
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500 md:pl-4 pl-2">
                    <Typed 
                        strings={[
                            'Boost your online presence with our dynamic web solutions. Enhance user experience, save resources, and leverage our expertise in chatbot integration for business growth.'
                        ]}
                        startDelay={600}
                        typeSpeed={10}
                        showCursor={true}
                    />
                     <Typed 
                        strings={[
                            '🤖'
                        ]}
                        typeSpeed={5}
                        startDelay={5000}
                        showCursor={false}
                    />
                </p>


                <button onClick={handleCalendlyClick} className="bg-[#FF0033] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Book a Meeting Today!</button>
                <br></br>
            </div>
        </div>
    )
}

export default Hero;
