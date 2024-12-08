import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Fish1 from "../assets/Fish1.jpg";
import Fish2 from "../assets/Fish2.jpg";
import Fish3 from "../assets/Fish3.jpg";

const headphoneData = [
  {
    id: 1,
    image: Fish1,
    title: "Fish 1",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
  },
  {
    id: 2,
    image: Fish2,
    title: "Fish 2",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
  },
  {
    id: 3,
    image: Fish3,
    title: "Fish 3",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headphoneData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
     
      <div className="relative bg-brandDark text-white h-screen flex flex-col justify-between overflow-hidden">
        <AnimatePresence>
          {headphoneData.map((item, index) => (
            <motion.section
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: index === currentIndex ? "relative" : "absolute",
              }}
              className="w-full h-full top-0 left-0"
            >
               <Navbar />
              <div className="flex flex-col justify-center items-center relative h-full">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, ease: easeInOut }}
                  className="text-center px-4"
                >
                  <h1 className="text-4xl font-bold">{item.title}</h1>
                  <p className="mt-4 max-w-md">{item.subtitle}</p>
                  <p className="text-2xl font-semibold mt-2">{item.price}</p>
                </motion.div>
              </div>
            </motion.section>
          ))}
        </AnimatePresence>

        {/* Dot Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
  {headphoneData.map((_, index) => (
    <button
      key={index}
      className={`w-3 h-3 rounded-full ${
        index === currentIndex ? "bg-white" : "bg-gray-400"
      }`}
      onClick={() => handleDotClick(index)}
      aria-label={`Slide ${index + 1}`}
    />
  ))}
</div>


        {/* WhatsApp Icon */}
        <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
