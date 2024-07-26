import ArrowRight from '@/assets/arrow-right.svg'
import Image from 'next/image';
import Logo from '@/assets/logosaas.png'
import MenuIcon from '@/assets/menu.svg'

const navItems = [
  {
    name: 'About'
  },
  {
    name: 'Features'
  }, {
    name: 'Customers'
  }, {
    name: 'Updates'
  }, {
    name: 'Help'
  },

]
const Navbar = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-50'>
      <div className="bg-black text-white flex items-center justify-center py-3 text-sm gap-3">
        <p className='text-white/60 hidden md:block'>Streamline your workflow  and boost your productivity</p>
        <div className='inline-flex gap-1 items-center'>
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Image src={Logo} height={40} width={40} alt='logo' />
            <MenuIcon className="h-5 w-5 cursor-pointer md:hidden" />
            <nav className='hidden md:flex items-center gap-6 text-black/60'>
              {navItems.map((item, i) => (
                <a href="#" key={i}>{item.name}</a>
              ))}
              <button className='btn btn-primary'>
                Got for Free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
};
export default Navbar