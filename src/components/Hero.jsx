import React from 'react'

const Hero = ({title='Unleash the chef in you—one recipe at a time!',subtitle='"Cook, Create, Conquer!"'}) => {
  return (
    <section className="bg-indigo-100 py-20 mb-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div className="text-center">
        <h1 className="text-xl font-extrabold text-black sm:text-5xl md:text-5xl"
        >
          {title}
        </h1>
        <p className="my-4 text-xl text-black">
         {subtitle}
        </p>
      </div>
    </div>
  </section>
  )
}

export default Hero
