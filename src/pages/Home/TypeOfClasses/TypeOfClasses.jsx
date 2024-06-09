// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import slider1 from '../../../assets/pictures/TypeOfPictures/guitar.png'
import slider2 from '../../../assets/pictures/TypeOfPictures/drums.png'
import slider3 from '../../../assets/pictures/TypeOfPictures/piano.png'
import slider4 from '../../../assets/pictures/TypeOfPictures/Saxophone.png'
import slider5 from '../../../assets/pictures/TypeOfPictures/trumpet.png'
import slider6 from '../../../assets/pictures/TypeOfPictures/violin.png'
import slider7 from '../../../assets/pictures/TypeOfPictures/cello.png'
import { useState } from 'react';

const TypeOfClasses = () => {

	const [swiperRef, setSwiperRef] = useState(null);

	// let appendNumber = 4;
	// let prependNumber = 1;

	// const prepend2 = () => {
	// swiperRef.prependSlide([
	// 	'<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
	// 	'<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
	// ]);
	// };

	// const prepend = () => {
	// swiperRef.prependSlide(
	// 	'<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
	// );
	// };

	// const append = () => {
	// swiperRef.appendSlide(
	// 	'<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
	// );
	// };

	// const append2 = () => {
	// swiperRef.appendSlide([
	// 	'<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
	// 	'<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
	// ]);
	// };

	return (
		<div className='bg-yellow-400 p-5 md:p-20'>

		<h1 className='text-2xl md:text-3xl text-sky-700 font-extrabold mb-8 md:mb-16'>What do we offer?</h1>

		<Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
			<img className='rounded-xl' src={slider1} alt="" />
			<p className='text-sm md:text-2xl text-purple-500 font-extrabold'>Guitar</p>
		</SwiperSlide>

        <SwiperSlide>
			<img className='rounded-xl' src={slider2} alt="" />
			<p className='text-sm md:text-2xl text-purple-500 font-extrabold'>Drums</p>
		</SwiperSlide>

        <SwiperSlide>
			<img className='rounded-xl' src={slider3} alt="" />
			<p className='text-sm md:text-2xl text-purple-500 font-extrabold'>Piano</p>
		</SwiperSlide>

        <SwiperSlide>
			<img className='rounded-xl' src={slider4} alt="" />
			<p className='text-sm md:text-2xl text-purple-500 font-extrabold'>Saxophone</p>
		</SwiperSlide>

        <SwiperSlide>
			<img className='rounded-xl' src={slider5} alt="" />
			<p className='text-sm md:text-2xl text-purple-500 font-extrabold'>Trumpet</p>
		</SwiperSlide>

        <SwiperSlide>
			<img className='rounded-xl' src={slider6} alt="" />
			<p className='text-sm md:text-2xl text-purple-500 font-extrabold'>Violin</p>
		</SwiperSlide>

        <SwiperSlide>
			<img className='rounded-xl' src={slider7} alt="" />
			<p className='text-sm md:text-2xl text-purple-500 font-extrabold'>Cello</p>
		</SwiperSlide>
      </Swiper>


		</div>
	);
};

export default TypeOfClasses;