import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = ({ wishlistCount = 0 }) => (
  <div className='border-b border-white/10 bg-[#0a0a0b] p-3 px-24 max-xl:px-16 max-lg:px-8 max-md:px-4 max-sm:px-3'>
    <div className='flex items-center justify-between gap-2'>
      <Link to='/' className='text-white font-bold text-[20px] max-sm:text-base shrink-0'>CINE<span className='text-[#c8a96e] italic'>URA</span></Link>
      <div className='space-x-5 max-sm:space-x-2 flex items-center shrink-0'>
        <div className="flex items-center gap-2 bg-[#111114] border border-[#1e1e24] rounded-md px-3 py-1.5 text-sm max-sm:px-2 max-sm:py-1">
          <CiSearch className="text-[#7a7880] shrink-0" />
          <input type="text" placeholder="Search..." className="bg-transparent outline-none text-[#f0eeea] placeholder-[#7a7880] w-40 max-sm:w-20 max-sm:min-w-0" />
        </div>
        <Link to='/my-list' className='flex items-center gap-2 bg-[#3b322a] rounded-md pl-3 pr-2 py-1.5 max-sm:pl-2 max-sm:pr-1.5 text-[#c5a360] text-sm cursor-pointer hover:bg-[#4a4035] transition-all border border-[#4a4035]'>
          {wishlistCount > 0 ? <IoMdHeart className="shrink-0" /> : <IoIosHeartEmpty className="shrink-0" />}
          <span className='flex items-center gap-1.5'>
            My List
            {wishlistCount > 0 && (
              <span className='min-w-[20px] h-5 px-1.5 rounded-full bg-[#a8874f]/50 text-white font-semibold text-[10px] flex items-center justify-center border border-[#8a6f3d]'>
                {wishlistCount}
              </span>
            )}
          </span>
        </Link>
      </div>
    </div>
  </div>
)

export default Header