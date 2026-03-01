import React from 'react'
import { Link } from 'react-router-dom'
import { IoStar } from 'react-icons/io5'
import { IoMdHeart } from 'react-icons/io'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyListpage = ({ movies, wishlist, wishlistCount, toggleWishlist }) => {
  const wishlistMovies = movies.filter(m => wishlist.some(w => w.id === m.id))
  return (
    <div className='bg-[#0a0a0b] min-h-screen'>
      <Header wishlistCount={wishlistCount} />
      <div className='px-24 max-xl:px-16 max-lg:px-8 max-md:px-6 max-sm:px-4 py-10 max-sm:py-6'>
        <Link to='/' className='inline-flex items-center gap-2 text-white/70 text-sm hover:text-[#c8a96e] transition-colors mb-8 max-sm:mb-6'>
          <span>←</span> Back to Browse
        </Link>
        <h1 className='text-white text-[28px] max-sm:text-[22px] font-medium'>
          My List <span className='text-white/50 text-[15px] max-sm:text-[13px] font-normal ml-3'>{wishlistMovies.length} saved</span>
        </h1>
        <div className='grid grid-cols-6 max-2xl:grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4 gap-y-6 max-sm:gap-3 mt-8 max-sm:mt-6'>
          {wishlistMovies.map((movie) => (
            <div key={movie.id} className='rounded-[13px] max-sm:rounded-[10px] border border-white/30 overflow-hidden relative'>
              <Link to={`/movies/${movie.id}`} state={{ movie }}>
                <div className='relative'>
                  <img src={movie.img} alt={movie.name} className='aspect-[2/3] object-cover w-full' />
                  <div className='absolute inset-0 bg-black/20' />
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(movie); }}
                    className='absolute top-2 right-2 z-10 p-1.5 max-sm:p-1 rounded-full bg-black/50 text-[#c8a96e] hover:bg-black/70 transition-colors'
                    aria-label='Remove from list'
                  >
                    <IoMdHeart className='h-5 w-5 max-sm:h-4 max-sm:w-4' />
                  </button>
                </div>
              </Link>
              <div className='bg-[#161619] p-5 max-sm:p-3 rounded-b-[13px] max-sm:rounded-b-[10px]'>
                <Link to={`/movies/${movie.id}`} state={{ movie }}>
                  <h2 className='text-white/90 truncate text-sm max-sm:text-xs'>{movie.name}</h2>
                </Link>
                <div className='flex justify-between items-center mt-2'>
                  <span className='text-white/50 text-[13px] max-sm:text-[11px]'>{movie.year}</span>
                  <div className='flex items-center text-[#c8a96e] gap-1'>
                    <IoStar className='h-3.5 w-3.5 max-sm:h-3 max-sm:w-3' />
                    <span className='text-[13px] max-sm:text-[11px]'>{movie.rate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {wishlistMovies.length === 0 && (
          <p className='text-white/50 text-center py-16 max-sm:py-10 max-sm:text-sm'>No titles in your list yet. Add some from Browse or a movie page.</p>
        )}
      </div>
      <Footer/>
    </div>
  )
}

export default MyListpage
