import banner from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className=' flex flex-col md:flex-row justify-between items-center gap-8 px-10 py-8 md:py-12  container mx-auto'>


            <div className='w-full md:w-1/2 py-4'>

                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
                    Build Your Ideal<br />
                    <span className='for applying text bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span>
                </h1>

                <p className='mt-5 text-gray-600 text-base lg:text-lg leading-7'>
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                    <button className='bg-linear-to-r from-[#F97316] to-[#EC4899]
                     text-white px-6 py-3 rounded-2xl'>
                        Explore Technologies
                    </button>

                    <button className='border border-pink-600  text-pink-600 px-6 py-3 rounded-2xl'>
                        Learn More
                    </button>
                </div>

            </div>


            <div className='w-full md:w-1/2 flex justify-center'>
                <img
                    src={banner}
                    alt="Development Stack"
                    className='w-full max-w-md lg:max-w-lg'
                />
            </div>

        </div>
    )
}

export default Hero