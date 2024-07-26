import logo from '@/assets/logosaas.png'
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg'
import SocialLinkedin from '@/assets/social-linkedin.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialYoutube from '@/assets/social-youtube.svg'
import SocialPin from '@/assets/social-pin.svg'

export const Footer = () => {
  return <footer className='py-10 bg-black text-sm text-white text-center'>
    <div className="container">
      <div className="inline-flex relative before:content[''] before:w-full before:bottom-0 before:top-2 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
        <Image src={logo} width={40} height={40} alt='logo' className='relative' />
      </div>
      <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Customers</a>
        <a href="#">Pricing</a>
        <a href="#">Help</a>
        <a href="#">Careers</a>
      </nav>
      <div className='flex justify-center gap-6 mt-6'>
        <SocialX clasName="size-5" />
        <SocialLinkedin clasName="size-5" />
        <SocialInsta clasName="size-5" />
        <SocialYoutube clasName="size-5" />
        <SocialPin clasName="size-5" />
      </div>
      <p className='mt-6'>&copy; 2024 Your Company,Inc. All rights reserved. </p>
    </div>
  </footer>;
};
