import React from 'react'
import { useLocation } from 'react-router-dom'
import { IoStar } from "react-icons/io5";
import { IoMdPlay, IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import Header from '../components/Header'
import Footer from '../components/Footer'

const Moviepage = ({ wishlistCount, toggleWishlist, isInWishlist }) => {
  const location = useLocation()
  const movie = location.state?.movie
  if (!movie) return <p className='text-white'>No Movies Avaialble yet!</p>
  const saved = isInWishlist(movie.id)
  return (
    <div className='bg-[#0a0a0b]'>
      <Header wishlistCount={wishlistCount} />
      <div className='relative h-[80vh] min-h-[400px]'>
        <img
          src={movie.img}
          alt="image"
          className='absolute inset-0 w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-black/70'></div>

        <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent'></div>

        <div className='relative z-10 flex flex-col justify-center h-full px-24 max-xl:px-16 max-lg:px-8 max-md:px-6 max-sm:px-4 text-white'>
          <div className='max-w-2xl'>
            <div>
              <h1 className='text-[50px] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-medium'>{movie.name}</h1>
              <div>
                <ul className='flex flex-wrap gap-x-0'>
                  <li className="flex items-center text-[15px] max-sm:text-[13px] after:content-['•'] after:mx-3 last:after:content-['']">
                    <span className='text-[#c8a96e] flex items-center gap-2'>
                      <IoStar className='-mt-1 h-4 w-4 max-sm:h-3 max-sm:w-3'/>
                      9.5
                    </span>
                  </li>
                  <li className="text-[15px] max-sm:text-[13px] after:content-['•'] after:mx-3 last:after:content-['']">2024</li>
                  <li className='text-[15px] max-sm:text-[13px]'>Action/Sci-fi</li>
                </ul>

                <p className='mt-10 max-sm:mt-6 text-white/60 max-sm:text-sm line-clamp-4 max-sm:line-clamp-3'>
                  Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.
                </p>

                <div className='flex gap-5 max-sm:gap-3 max-sm:flex-col max-sm:items-start mt-10 max-sm:mt-6'>
                  <button className='flex items-center gap-2 font-semibold text-[13px] max-sm:text-xs bg-[#c8a96e] rounded p-3 px-7 max-sm:p-2 max-sm:px-5 text-black cursor-pointer'>
                    <IoMdPlay/>
                    Watch Now
                  </button>

                  <button onClick={() => toggleWishlist(movie)} className='flex items-center gap-2 font-semibold text-[13px] max-sm:text-xs bg-[#161619] border border-white/10 rounded p-3 px-7 max-sm:p-2 max-sm:px-5 text-white cursor-pointer'>
                    {saved ? <IoMdHeart/> : <IoIosHeartEmpty/>}
                    {saved ? "Saved" : "Add to Wishlist"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Moviepage