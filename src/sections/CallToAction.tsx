'use client'
import React, { useRef } from 'react'
import ArrowRight from '@/assets/arrow-right.svg'
import startImg from '@/assets/star.png'
import springImg from '@/assets/spring.png'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
export function CallToAction() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  return (
    <section ref={sectionRef} className='py-24 bg-gradient-to-b from-white to-[#D3DCFF] overflow-x-clip'>
      <div className='container'>
        <div className='max-w-[540px] mx-auto relative'>
          <h2 className='section-title'>Sign up for free today</h2>
          <p className='section-description mt-5'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
          <motion.img src={startImg.src}
            style={{
              translateY: translateY
            }}
            alt="start Img" width={360} className='absolute -left-[350px] -top-[137px]' />
          <motion.img style={{
            translateY: translateY
          }} src={springImg.src} alt='spring img' width={360} className='absolute -right-[331px] -top-[19px]' />
        </div>
        <div className='flex items-center justify-center gap-2 mt-10'>
          <button className='btn btn-primary'>Grt for free</button>
          <button className='btn btn-text gap-1'>Learn more <ArrowRight className="size-5" /></button>
        </div>
      </div>
    </section>
  )
}
