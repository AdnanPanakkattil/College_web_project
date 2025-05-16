import React from 'react';
import AboutUs1 from '../assets/about-1.png';
import About2 from '../assets/About.2.png';

const About = () => {
  return (
    <>
      <div className="w-full">
        <img
          src={AboutUs1}
          alt="Mapminds Team"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      <section className="flex flex-col md:flex-row min-h-[50vh] md:min-h-screen bg-gray-50">
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center p-4 sm:p-6">
          <img
            src={About2}
            alt="About Mapminds"
            className="w-full h-auto max-h-[600px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 w-full p-4 sm:p-6 md:p-10 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-6 md:py-10 text-gray-800">
              About Us
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              At Mapminds, we are passionate about helping students achieve their academic
              aspirations. With over 15 years of experience in educational counselling and
              consulting, we have successfully placed more than 1000 students in top colleges
              across India and abroad. Our deep network with over 100 colleges ensures our
              students receive the best opportunities. Whether you are looking to secure admission
              to a top medical, engineering, business, or law college, our expert team is here to
              guide you every step of the way.
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl font-bold py-4 text-gray-800">
              Our Journey
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              With a passion for education and a deep understanding of the challenges students
              face, our journey began with a commitment to make quality educational
              opportunities accessible to all. Over the years, we have successfully placed over
              1000 students in top colleges across India and abroad, helping them pave the way for
              a bright future.
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl font-bold py-4 text-gray-800">
              Our Expertise
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At Mapminds, we specialize in a broad spectrum of educational services. Whether
              you are looking for guidance on securing admission through government or private
              management quotas, or you are aiming to study at a prestigious university abroad,
              our team of seasoned professionals is here to help. Our expertise spans various
              fields including medical, engineering, business, and law education, making us a
              one-stop solution for students from diverse academic backgrounds.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;