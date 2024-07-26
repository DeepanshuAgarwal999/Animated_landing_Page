import { pricingTiers } from '@/constants/pricingTiers'
import CheckIcon from '@/assets/check.svg'
import React from 'react'
import { cn } from '@/lib/cn'

export const Pricing = () => {
  return (
    <section className='py-24 bg-white'>
      <div className="container">

        <div className='max-w-[540px] mx-auto'>
          <div className='flex justify-center'>
            <div className='tag '>
              Boost your productivity
            </div>
          </div>
          <h2 className='section-title mt-5'>Pricing</h2>
          <p className='section-description mt-5'>
            Free forever, Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row lg:items-end lg:justify-center gap-6 items-center mt-10'>
          {pricingTiers.map(({ title, monthlyPrice, buttonText, features, inverse, popular }) => (
            <figure className={cn("card", inverse && "border-black text-white bg-black")} key={title}>
              <div className='flex justify-between'>
                <h3 className={cn('text-lg font-bold text-black/50 ', inverse && "text-white/60")}>{title}</h3>
                {popular && (
                  <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20 '>
                    <span className='bg-[linear-gradient(to_right,#DD7DDf,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] bg-clip-text text-transparent'>Popular</span>
                  </div>
                )}
              </div>
              <div className='flex items-baseline gap-1 mt-[30px]'>
                <span className='text-4xl font-bold tracking-tighter leading-none'>{monthlyPrice}</span>
                <span className='tracking-tighter font-bold text-black/50'>/month</span>
              </div>
              <button className={cn('btn btn-primary w-full mt-[30px]', inverse && "bg-white text-black")}>{buttonText}</button>
              <ul className='flex flex-col gap-5 mt-8'>
                {features.map((feature) => (
                  <li className='text-sm flex items-center gap-4' key={feature}>
                    <CheckIcon className="size-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </figure>
          ))}
        </div>

      </div>
    </section>
  )
}
