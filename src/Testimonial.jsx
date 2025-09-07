import React from 'react';

const testimonials = [
  {
    company: 'Tuple',
    quote:
      'Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Ornare arcu gravida natoque erat et tortor consequat.',
    name: 'Judith Black',
    title: 'CEO of Tuple',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    company: 'Reform',
    quote:
      'Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam reprehenderit nisi.',
    name: 'Joseph Rodriguez',
    title: 'CEO of Reform',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    company: 'Synthwave Inc.',
    quote:
      'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    name: 'Aisha Bello',
    title: 'Founder of Synthwave',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const TestimonialCard = ({ company, quote, name, title, image }) => (
  <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
    <div className="text-sm font-semibold text-indigo-400 mb-1">{company}</div>
    <p className="text-gray-300 text-sm mb-4">{quote}</p>
    <div className="flex items-center">
      <img
        src={image}
        alt={name}
        className="w-10 h-10 rounded-full object-cover mr-3"
      />
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-gray-400">{title}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="bg-gray-900 py-10 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {testimonials.map((t, index) => (
        <TestimonialCard key={index} {...t} />
      ))}
    </div>
  </div>
);

export default Testimonials;