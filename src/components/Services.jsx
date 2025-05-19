import React from 'react';
import {
  FaUserGraduate,
  FaUniversity,
  FaHandsHelping,
  FaClipboardList,
  FaUsers,
  FaPiggyBank,
  FaMoneyCheckAlt,
  FaWallet,
  FaBook,
  FaPassport,
  FaUser,
  FaBriefcase
} from 'react-icons/fa';

const services = [
  {
    title: 'Career Counselling',
    icon: <FaUserGraduate size={30} />,
    description: 'Career counselling from experienced career counsellors.'
  },
  {
    title: 'Admission Guidance',
    icon: <FaUniversity size={30} />,
    description: 'Admission guidance through proper channels.'
  },
  {
    title: 'Ease Up Admissions',
    icon: <FaHandsHelping size={30} />,
    description: 'Easing up the admission process in well-known institutes.'
  },
  {
    title: 'Reservation Facility',
    icon: <FaClipboardList size={30} />,
    description: 'Reservation facilities with a first-come, first-serve method.'
  },
  {
    title: 'Direct Meetup',
    icon: <FaUsers size={30} />,
    description: 'Direct meeting with college authorities and concerned officials.'
  },
  {
    title: 'Scholarships',
    icon: <FaPiggyBank size={30} />,
    description: 'Provide scholarships and fee concessions.'
  },
  {
    title: 'Loan Assistance',
    icon: <FaMoneyCheckAlt size={30} />,
    description: 'Educational loan assistance for those in need.'
  },
  {
    title: 'Easy Payment Plans',
    icon: <FaWallet size={30} />,
    description: 'Installment facilities in fee payment.'
  },
  {
    title: 'Course Briefing',
    icon: <FaBook size={30} />,
    description: 'Doubt clearance and proper guidance about courses and universities abroad.'
  },
  {
    title: 'Visa Processing',
    icon: <FaPassport size={30} />,
    description: 'Assistance for visa processing and loans for admissions abroad.'
  },
  {
    title: 'Personalized Attention',
    icon: <FaUser size={30} />,
    description: 'One-on-one attention for students and parents.'
  },
  {
    title: 'Placement',
    icon: <FaBriefcase size={30} />,
    description: 'Placement assistance and further follow-ups.'
  },
];

const Services = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="text-center mb-12 px-4">
        <p className="text-blue-600 font-semibold">OUR SERVICES</p>
        <h1 className="text-4xl font-bold mt-4">Some of the services we offer</h1>
        <p className="text-gray-600 mt-6">
          We strive to provide you with the best services. Our expert team ensures your procedures run smoothly with the best possible results.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white text-center p-6 rounded-2xl shadow hover:bg-blue-600 transition duration-300"
          >
            <div className="flex justify-center mb-4 text-blue-600 group-hover:text-white transition">
              {/* Clone icon with correct color on hover */}
              {React.cloneElement(service.icon, {
                className: 'group-hover:text-white text-blue-600 transition duration-300'
              })}
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-white">{service.title}</h2>
            <p className="text-sm text-gray-600 group-hover:text-white transition duration-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;