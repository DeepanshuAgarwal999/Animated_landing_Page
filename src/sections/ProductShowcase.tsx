"use client"
import productImage from '@/assets/product-image.png'
import Image from 'next/image';
import pyramidImg from '@/assets/pyramid.png'
import tubeimg from '@/assets/tube.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

export const ProductShowcase = () => {
  const productShowcaseRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: productShowcaseRef,
    offset: ["start end", "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={productShowcaseRef} className='bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">

        <div className='max-w-[540px] mx-auto'>
          <div className='flex justify-center'>
            <div className='tag '>
              Boost your productivity
            </div>
          </div>
          <h2 className='section-title mt-5'>A more effective way to track progress</h2>
          <p className='section-description mt-5'>
            Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
          </p>
        </div>
        <div className='relative'>
          <Image src={productImage} alt='productImage' className='mt-10' />
          <motion.img src={pyramidImg.src}
            style={{
              translateY: translateY
            }}
            alt='pyramidimg' className='hidden md:block absolute -right-36 -top-32' height={262} width={262} />
          <motion.img
            style={{
              translateY: translateY
            }}
            src={tubeimg.src} alt='tube img' className='hidden md:block absolute -left-36 bottom-24' height={262} width={262} />
        </div>
      </div>

    </section>
  )

};
