import { testimonials } from '@/constants/testimonials'
import { cn } from '@/lib/cn'
import Image from 'next/image'
import React from 'react'

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialsColumn = (props: { testimonials: typeof testimonials, className?: string }) => {

  return (
    <div className={cn('flex flex-col gap-6 mt-10  [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]', props.className)}>
      {
        props.testimonials.map(({ text, imageSrc, name, username }) => (
          <div className='card'>
            <div>{text}</div>
            <div className='flex items-center gap-2 mt-5'>
              <Image src={imageSrc} alt={name} width={40} height={40} className='size-8 rounded-full' />
              <div className='flex flex-col'>
                <div className='font-medium tracking-tight leading-5'>{name}</div>
                <div className='leading-5 tracking-tight'>{username}</div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export function Testimonials() {
  return (
    <section className='bg-white py-24'>
      <div className='container'>
        <div className='max-w-[540px] mx-auto'>
          <div className='flex items-center justify-center'>
            <div className='tag'>Testimonials</div>
          </div>
          <h2 className='section-title mt-5'>What our users say</h2>
          <p className='section-description mt-5'>
            From intuitive design to powerful design, our app has become an element essential tool for users  around the world.
          </p>
        </div>

        <div className='flex justify-center gap-6'>
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn testimonials={secondColumn} className='hidden md:flex' />
          <TestimonialsColumn testimonials={thirdColumn} className='hidden lg:flex' />
        </div>

      </div>
    </section>
  )
}
