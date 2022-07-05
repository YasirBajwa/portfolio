import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import {HiChevronLeft,HiChevronRight} from 'react-icons/hi'
import './Testimonial.scss';


const Testimonial = () => {

  const [testimonial, setTestimonial] = useState([]);
  const[brands,setBrands] = useState([]);
  const [currentIndex,setCurrentIndex] = useState(0)

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandQuery = '*[_type == "brands"]';


    client.fetch(query).then((data) => {
      setTestimonial(data);
    });
    client.fetch(brandQuery).then((data) => {
      setBrands(data);
    });
  }, []);


  return (
    <>
    </>
  )
}

export default Testimonial
export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);