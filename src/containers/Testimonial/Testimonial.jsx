import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';


const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonial"]';

    client.fetch(query).then((data) => {
      setTestimonial(data);
    });

  }, []);


  return (
    <>
    </>
  )
}

export default Testimonial