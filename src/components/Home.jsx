import React from 'react';
import { Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  DocumentCheckIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/solid';

// Import images
import Home1 from '../assets/Home1.jpg';
import Home2 from '../assets/Home2.jpeg';
import Home3 from '../assets/Home3.jpeg';
import Home4 from '../assets/Home4.webp';
import OIP1 from '../assets/OIP1.jpg';
import OIP2 from '../assets/OIP2.jpg';
import OIP3 from '../assets/OIP3.jpg';
import OIP4 from '../assets/OIP4.avif';

const Home = () => {
  // Array of Images for Slideshow
  const images = [Home1, Home2, Home3];

  // Zoom effect properties
  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="ml-2 sm:ml-4 md:ml-8 lg:ml-10 top-1/2 transform -translate-y-1/2">
        <ArrowLeftIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-2 sm:mr-4 md:mr-8 lg:mr-10 top-1/2 transform -translate-y-1/2">
        <ArrowRightIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white cursor-pointer" />
      </div>
    ),
  };

  // Carousel properties for consultancy cards
  const carouselProperties = {
    duration: 3000, // Auto-slide every 3 seconds
    transitionDuration: 500,
    infinite: true,
    indicators: true, // Show dots for navigation
    arrows: true,
    prevArrow: (
      <div className="ml-2 sm:ml-4 md:ml-8 lg:ml-10 top-1/2 transform -translate-y-1/2">
        <ArrowLeftIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-2 sm:mr-4 md:mr-8 lg:mr-10 top-1/2 transform -translate-y-1/2">
        <ArrowRightIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 cursor-pointer" />
      </div>
    ),
    slidesToShow: 2, // Default to 2 cards for larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Consultancy card data
  const consultancyCards = [
    {
      title: 'Ravi patel',
      description: 'Our experienced counselors work closely with students to help them identify their interests, aptitudes, and career goals, guiding them towards paths that align with their aspirations.',
    },
    {
      title: 'Suresh kumar',
      description: 'With a vast network of partner institutions, both domestic and international, Edurights assists students in finding the perfect university to pursue their desired course of study.',
    },
    {
      title: 'Priya sharma',
      description: 'Navigating the admissions process can be daunting. Edurights simplifies the process by providing expert guidance on application procedures, documentation requirements, and more.',
    },
    {
      title: 'Anjali',
      description: 'We understand that financial considerations play a significant role in educational decision-making. That’s why we offer guidance on scholarships, loans, and other forms of financial assistance.',
    },
  ];

  return (
    <>
      <div className="min-h-screen">
        {/* Slideshow Section */}
        <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] max-h-[600px] relative">
          <Zoom {...zoomInProperties}>
            {images.map((each, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] max-h-[600px] relative overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover object-center"
                  src={each}
                  alt={`Slide ${index + 1}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
                <div className="absolute z-20 text-center px-4 sm:px-6 md:px-8">
                  <h1 className="text-white font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 sm:mb-4 leading-tight">
                    Your Trusted Education <br /> Consultant
                  </h1>
                  <p className="text-white font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    Guiding Your Future with Expertise
                  </p>
                </div>
              </div>
            ))}
          </Zoom>
        </div>

        {/* Spacer */}
        <div className="w-full h-6 sm:h-8 md:h-12 lg:h-16" />

        {/* Main Section with Image and Text */}
        <div className="w-full bg-white">
          <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full lg:w-1/2 relative mb-6 lg:mb-0">
              <img
                src={Home4}
                alt="Students in Library"
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain rounded-r-[20px] sm:rounded-r-[30px] md:rounded-r-[50px] lg:rounded-r-[80px] mx-auto lg:mx-0"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 mb-3 sm:mb-4 leading-tight">
                Welcome to <br /> Education Hub
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6">
                Collaboratively simplify user-friendly networks after principle-centered coordinate effective methods of empowerment distributed niche markets pursue market positioning web-readiness applications.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div className="flex flex-col">
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium">
                    With flexible courses
                  </p>
                  <ul className="mt-2 space-y-1 sm:space-y-2">
                    <li className="flex items-center text-gray-600 text-xs sm:text-sm">
                      <span className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600">•</span>
                      Our unique learning environment sparks physical growth
                    </li>
                    <li className="flex items-center text-gray-600 text-xs sm:text-sm">
                      <span className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600">•</span>
                      Discovery while our creative curriculum which combines
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* Consultancy Section */}
        <div className="w-full py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Our Consultancy
          </div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] rounded-lg shadow-lg p-4 sm:p-5 md:p-6 text-center transition duration-300 hover:border-2 hover:border-blue-500">
                <BriefcaseIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-500 mx-auto mb-2 sm:mb-3" />
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4">
                  Career Counseling
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  Our experienced counselors <br />
                  work closely with students to <br />
                  help them identify their <br />
                  interests, aptitudes, and <br />
                  career goals, guiding them <br />
                  towards .
                </p>
              </div>
              <div className="bg-white h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] rounded-lg shadow-lg p-4 sm:p-5 md:p-6 text-center transition duration-300 hover:border-2 hover:border-blue-500">
                <AcademicCapIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-500 mx-auto mb-2 sm:mb-3" />
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4">
                  University Selection
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  With a vast network of <br />
                  partner institutions,<br /> both domestic 
                  and international, Edurights <br />
                  assists students in finding the <br />
                  perfect university to pursue <br />
                  their desired course of study.
                </p>
              </div>
              <div className="bg-white h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] rounded-lg shadow-lg p-4 sm:p-5 md:p-6 text-center transition duration-300 hover:border-2 hover:border-blue-500">
                <DocumentCheckIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-500 mx-auto mb-2 sm:mb-3" />
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4">
                  Admission Assistance
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  Navigating the admissions process can be daunting. Edurights simplifies the process by providing expert guidance on application procedures, documentation requirements, and more.
                </p>
              </div>
              <div className="bg-white h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] rounded-lg shadow-lg p-4 sm:p-5 md:p-6 text-center transition duration-300 hover:border-2 hover:border-blue-500">
                <CurrencyDollarIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-500 mx-auto mb-2 sm:mb-3" />
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4">
                  Financial Aid
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  We understand that financial considerations play a significant role in educational decision-making. That's why we offer guidance on scholarships, loans, and other forms of financial assistance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}

        {/* Why Choose Section */}
        <div className="w-full container mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-10">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Why Choose?
              </h1>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                    Our Expertise
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    With over a decade of expertise in the field, EduRights boasts a team of seasoned professionals.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600">
                    Personalized Approach
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We recognize that each student is unique, with their own aspirations and challenges.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Our track record speaks for itself, with thousands of success stories under our belt.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600">
                    Comprehensive Services
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    EduRights offers a comprehensive suite of services designed to support students at every stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0 grid grid-cols-2 gap-4 sm:gap-6 pl-0 sm:pl-4 md:pl-6">
              <img src={OIP1} alt="Students studying together" className="rounded-2xl h-36 sm:h-40 md:h-44 w-full object-cover aspect-square shadow-md" loading="lazy"/>
              <img src={OIP2} alt="Students working on a project" className="rounded-2xl h-36 sm:h-40 md:h-44 w-full object-cover aspect-square shadow-md" loading="lazy"/>
              <img src={OIP3} alt="Student with a dog" className="rounded-2xl h-36 sm:h-40 md:h-44 w-full object-cover aspect-square shadow-md" loading="lazy"/>
              <img src={OIP4} alt="Student with a camera setup" className="rounded-2xl h-36 sm:h-40 md:h-44 w-full object-cover aspect-square shadow-md" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>

      
{/* Consultancy Section - Automatic Sliding Carousel */}

        <div className="w-full py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12">
           What our students say
          </div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <Slide {...carouselProperties}>
              {consultancyCards.map((card, index) => (
                
                <div
                  key={index}
                  className="px-2 sm:px-3 md:px-4"
                >
                  <div className="bg-white min-h-[150px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[200px] rounded-lg shadow-lg p-4 sm:p-5 md:p-6  transition duration-300 ">
                    {card.icon}
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4">
                      {card.title}
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base line-clamp-5">
                      {card.place}
                    </p>
                    <hr/>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base line-clamp-5">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>

    </>
  );
};

export default Home;