import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/pictures/banners/guitar.png'
import img2 from '../../../assets/pictures/banners/cello.png'
import img3 from '../../../assets/pictures/banners/drums.png'
import img4 from '../../../assets/pictures/banners/piano.png'
import img5 from '../../../assets/pictures/banners/saxophone.png'
import img6 from '../../../assets/pictures/banners/trumpet .png'
// import img7 from '../../../assets/pictures/banners/violin.png'
import { motion } from "framer-motion"
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';


const Banner = () => {
	const {user} = useContext(AuthContext)
	return (

			<Carousel>
        <div className='relative'>
            <img src={img1} />
            <div className="absolute top-1/2 left-1/4  text-white font-bold">
				<div>
					<motion.h1 initial={{ opacity: 0, x: 500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 3 }}
					className='md:text-4xl'>
						Attention is given to all aspects of music:
					</motion.h1>

					<motion.p initial={{ opacity: 0, y: -500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 3 }} className='text-xs md:text-xl text-center'>Rhthm | Pitch | Melody | Composition </motion.p>

					<motion.p initial={{ opacity: 0, x: 500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Music notation | Performance Skills | Listening Skills</motion.p>

					<motion.p initial={{ opacity: 0, x: -500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Collaboration and Music History:</motion.p>

					<motion.p initial={{ opacity: 0, y: 500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>
							Studying composers, style, genre
					</motion.p>

					<motion.p initial={{ opacity: 0, y: -500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Cultural differences, and the effect on society.</motion.p>
				</div>
			</div>
        </div>
                <div>
                    <img src={img4} />
                    <div className="absolute top-1/2 left-1/4  text-white font-bold">
				<div>
					<motion.h1 initial={{ opacity: 0, x: 500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 3 }}
					className='md:text-4xl'>
						Attention is given to all aspects of music:
					</motion.h1>

					<motion.p initial={{ opacity: 0, y: -500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 3 }} className='text-xs md:text-xl text-center'>Rhthm | Pitch | Melody | Composition </motion.p>

					<motion.p initial={{ opacity: 0, x: 500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Music notation | Performance Skills | Listening Skills</motion.p>

					<motion.p initial={{ opacity: 0, x: -500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Collaboration and Music History:</motion.p>

					<motion.p initial={{ opacity: 0, y: 500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>
							Studying composers, style, genre
					</motion.p>

					<motion.p initial={{ opacity: 0, y: -500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Cultural differences, and the effect on society.</motion.p>
				</div>
			</div>
                </div>


                <div>
                    <img src={img3} />
                    <div className="absolute top-1/2 left-1/4  text-white font-bold">
				<div>
					<motion.h1 initial={{ opacity: 0, x: 500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 3 }}
					className='md:text-4xl'>
						Attention is given to all aspects of music:
					</motion.h1>

					<motion.p initial={{ opacity: 0, y: -500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 3 }} className='text-xs md:text-xl text-center'>Rhthm | Pitch | Melody | Composition </motion.p>

					<motion.p initial={{ opacity: 0, x: 500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Music notation | Performance Skills | Listening Skills</motion.p>

					<motion.p initial={{ opacity: 0, x: -500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Collaboration and Music History:</motion.p>

					<motion.p initial={{ opacity: 0, y: 500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>
							Studying composers, style, genre
					</motion.p>

					<motion.p initial={{ opacity: 0, y: -500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Cultural differences, and the effect on society.</motion.p>
				</div>
			</div>
                </div>


                <div>
                    <img src={img2} />
                    <div className="absolute top-1/2 left-1/4  text-white font-bold">
				<div>
					<motion.h1 initial={{ opacity: 0, x: 500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 3 }}
					className='md:text-4xl'>
						Attention is given to all aspects of music:
					</motion.h1>

					<motion.p initial={{ opacity: 0, y: -500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 3 }} className='text-xs md:text-xl text-center'>Rhthm | Pitch | Melody | Composition </motion.p>

					<motion.p initial={{ opacity: 0, x: 500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Music notation | Performance Skills | Listening Skills</motion.p>

					<motion.p initial={{ opacity: 0, x: -500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Collaboration and Music History:</motion.p>

					<motion.p initial={{ opacity: 0, y: 500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>
							Studying composers, style, genre
					</motion.p>

					<motion.p initial={{ opacity: 0, y: -500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Cultural differences, and the effect on society.</motion.p>
				</div>
			</div>
                </div>


                <div>
                    <img src={img5} />
                    <div className="absolute top-1/2 left-1/4  text-white font-bold">
				<div>
					<motion.h1 initial={{ opacity: 0, x: 500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 3 }}
					className='md:text-4xl'>
						Attention is given to all aspects of music:
					</motion.h1>

					<motion.p initial={{ opacity: 0, y: -500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 3 }} className='text-xs md:text-xl text-center'>Rhthm | Pitch | Melody | Composition </motion.p>

					<motion.p initial={{ opacity: 0, x: 500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Music notation | Performance Skills | Listening Skills</motion.p>

					<motion.p initial={{ opacity: 0, x: -500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Collaboration and Music History:</motion.p>

					<motion.p initial={{ opacity: 0, y: 500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>
							Studying composers, style, genre
					</motion.p>

					<motion.p initial={{ opacity: 0, y: -500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Cultural differences, and the effect on society.</motion.p>
				</div>
			</div>
                </div>


                <div>
                    <img src={img6} />
                    <div className="absolute top-1/2 left-1/4  text-white font-bold">
				<div>
					<motion.h1 initial={{ opacity: 0, x: 500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 3 }}
					className='md:text-4xl'>
						Attention is given to all aspects of music:
					</motion.h1>

					<motion.p initial={{ opacity: 0, y: -500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 3 }} className='text-xs md:text-xl text-center'>Rhthm | Pitch | Melody | Composition </motion.p>

					<motion.p initial={{ opacity: 0, x: 500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Music notation | Performance Skills | Listening Skills</motion.p>

					<motion.p initial={{ opacity: 0, x: -500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Collaboration and Music History:</motion.p>

					<motion.p initial={{ opacity: 0, y: 500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>
							Studying composers, style, genre
					</motion.p>

					<motion.p initial={{ opacity: 0, y: -500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }} className='text-xs md:text-xl text-center'>Cultural differences, and the effect on society.</motion.p>
				</div>
			</div>
                </div>

            </Carousel>
	);
};

export default Banner;