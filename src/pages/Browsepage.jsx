import { useState } from 'react'
import { IoStar } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const movies = [
        {
            id: 1,
            name: "Avengers: Infinity War",
            year: 2018,
            genre: ["Action", "Sci-fi", "Trending"],
            rate: 9.5,
            img:"/movies/infinitywar.jpg"
        },
        {
            id: 2,
            name: "The Batman",
            year: 2022,
            genre: ["Action", "Thriller"],
            rate: 9.5,
            img:"/movies/thebatman.jpg"
        },
        {
            id: 3,
            name: "Spider-Man: No Way Home",
            genre: ["Action", "Adventure"],
            year: 2021,
            rate: 9.5,
            img:"/movies/spiderman.webp"
        },
        {
            id: 4,
            name: "Doctor Strange in the Multiverse of Madness",
            year: 2022,
            genre: ["Action", "Fantasy"],
            rate: 9.5,
            img:"/movies/doctorstrange.webp"
        },
        {
            id: 5,
            name: "Black Panther: Wakanda Forever",
            year: 2022,
            genre: ["Action", "Adventure"],
            rate: 9.5,
            img:"/movies/wakanda.jpg"
        },
        {
            id: 6,
            name: "Guardians of the Galaxy Vol. 3",
            year: 2023,
            genre: ["Action", "Comedy", "Sci-fi"],
            rate: 9.5,
            img:"/movies/gog.webp"
        },
        {
            id: 7,
            name: "Avatar: The Way of Water",
            year: 2022,
            genre: ["Action", "Adventure", "Fantasy"],
            rate: 9.5,
            img:"/movies/avatar.jpg"
        },
        {
            id: 8,
            name: "Thor: Love and Thunder",
            year: 2022,
            genre: ["Action", "Comedy", "Fantasy"],
            rate: 9.5,
            img:"/movies/thor.jpg"
        },
        {
            id: 9,
            name: "Dune",
            year: 2024,
            genre: ["Sci-fi", "Adventure"],
            rate: 9.5,
            img:"/movies/dune.webp"
        },
        {
            id: 10,
            name: "The Flash",
            year: 2023,
            rate: 9.5,
            genre: ["Action", "Sci-fi"],
            img:"/movies/flash.jpg"
        },
]

const Browsepage = () => {
    const [filter, setFilter] = useState("All");

    const filteredMovies = filter === "All"
    ? movies
    : movies.filter(movies => movies.genre.includes(filter));

    const genre = ["All", "Trending", "Sci-fi", "Thriller", "Adventure", "Comedy", "Fantasy"]
  return (
    <div className='px-24 max-xl:px-16 max-lg:px-8 max-md:px-6 max-sm:px-4'>
        <div className='flex flex-wrap items-center gap-10 max-md:gap-4 max-sm:gap-3'>
            <h1 className='text-[15px] max-sm:text-[13px] text-white/70 tracking-wide'>FILTER</h1>
            <div className='flex flex-wrap gap-2'>
                {genre.map((g, index) => (
                    <button
                    key={index}
                    onClick={() => setFilter(g)}
                    className={`p-2 px-5 max-sm:p-1.5 max-sm:px-3 rounded-full text-[15px] max-sm:text-[13px] cursor-pointer ${ filter === g ? "text-black bg-[#c8a96e]" : "text-white/70 border border-white/20"}`}>
                        {g}
                    </button>
                ))}
            </div>
        </div>

        <h1 className='mt-10 max-sm:mt-6 text-white text-[25px] max-sm:text-[20px] mb-5'>All Titles <span className='text-white/50 text-[15px] max-sm:text-[13px] ml-3'>{filteredMovies.length} titles</span></h1>
        <div className='grid grid-cols-6 max-2xl:grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4 gap-y-4 w-full h-full'>
            {filteredMovies.map((movie, index) => (
                <Link to={`/movies/${movie.id}`} key={index} state={{ movie }}>
                    <div className='rounded-[13px] max-sm:rounded-[10px] border border-white/30 cursor-pointer'>
                        <div className='relative'>
                            <img src={movie.img} alt="" className='rounded-t-[13px] max-sm:rounded-t-[10px] aspect-[2/3] object-cover'/>
                            <div className='absolute inset-0 bg-black/20 rounded-t-[13px] max-sm:rounded-t-[10px]'></div>
                        </div>
                        <div className='bg-[#161619] p-5 max-sm:p-3 rounded-b-[13px] max-sm:rounded-b-[10px]'>
                            <h1 className='text-white/90 truncate text-sm max-sm:text-xs'>{movie.name}</h1>
                            <div className='flex justify-between mt-2'>
                                <h1 className='text-white/50 text-[13px] max-sm:text-[11px]'>{movie.year}</h1>
                                <div className='flex items-center text-[#c8a96e] gap-2'>
                                    <IoStar className='max-sm:w-3 max-sm:h-3'/>
                                    <p className='text-[13px] max-sm:text-[11px]'>{movie.rate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Browsepage