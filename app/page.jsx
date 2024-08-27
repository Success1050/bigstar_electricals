"use client";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Link from "next/link";
import { MdElectricBolt } from "react-icons/md";

import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          {" "}
          <section
            className='h-fit bg-cover  bg-center overflow-hidden'
            style={{ backgroundImage: "url(/banner2.jpg)" }}
          >
            <div className='md:w-[50%] py-[50%] sm:py-[20%] w-full flex mx-auto md:ml-[5%] flex-col  font-semibold top-[20%] md:top-[30%] gap-y-7 px-4'>
              <h2 className='text-cuscol2 text-[18px] md:text-[24px] uppercase font-[500]'>
                Electrical Solutions Provider
              </h2>
              <p className='md:text-[50px] text-[30px] font-semibold text-white'>
                BigStar Electrical company is here to illuminate your world
              </p>
              <p className='text-[20px] text-white w-full'>
                At Bigstar Electrical and Mechanical company, we pride ourselves
                on our unwavering commitment to quality. With a team of highly
                trained and certified electrical engineers, we are dedicated to
                delivering top-notch electrical solutions for both residential
                and commercial clients.
              </p>
              <button
                className='w-fit p-4 rounded-8px bg-cusBgCol2 rounded-[50px]  flex justify-between items-center gap-x-2 '
                type='button'
              >
                <h2 className='text-white text-[20px] font-semibold hover:text-cuscol2 transition-all duration-300'>
                  Contact Us Today
                </h2>

                <h2 className='w-[50px] h-[5-px] rounded-[50%] flex justify-center items-center bg-cuscol2 p-4'>
                  <MdElectricBolt />
                </h2>
              </button>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section
            className='h-fit bg-cover  bg-center overflow-hidden'
            style={{ backgroundImage: "url(/banner1.jpg)" }}
          >
            <div className='md:w-[50%] py-[50%] sm:py-[20%] w-full flex mx-auto md:ml-[5%] flex-col  font-semibold top-[20%] md:top-[30%] gap-y-7 px-4'>
              <h2 className='text-cuscol2 text-[18px] md:text-[24px] uppercase font-[500]'>
                Electrical Solutions Provider
              </h2>
              <p className='md:text-[50px] text-[30px] font-semibold text-white'>
                BigStar Electrical company is here to illuminate your world
              </p>
              <p className='text-[20px] text-white w-full'>
                At Bigstar Electrical and Mechanical company, we pride ourselves
                on our unwavering commitment to quality. With a team of highly
                trained and certified electrical engineers, we are dedicated to
                delivering top-notch electrical solutions for both residential
                and commercial clients.
              </p>
              <button
                className='w-fit p-4 rounded-8px bg-cusBgCol2 rounded-[50px]  flex justify-between items-center gap-x-2 '
                type='button'
              >
                <h2 className='text-white text-[20px] font-semibold hover:text-cuscol2 transition-all duration-300'>
                  Contact Us Today
                </h2>

                <h2 className='w-[50px] h-[5-px] rounded-[50%] flex justify-center items-center bg-cuscol2 p-4'>
                  <MdElectricBolt />
                </h2>
              </button>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>

      {/* second one */}

      <section className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h3 className='text-3xl font-bold text-center mb-8'>
            Popular Destination
          </h3>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {/* {cities.map((city) => {
              const { id, name, img, desc } = city;
              return (
                <div
                  key={id}
                  className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'
                >
                  <Image
                    src={img}
                    alt={name}
                    width={10}
                    height={10}
                    layout='responsive'
                    className='object-cover transform hover:scale-110 duration-300 cursor-pointer'
                  />
                  <div className='p-4'>
                    <h4 className='text-xl font-bold mb-2'>{name}</h4>
                    <p className='text-gray-600'>{desc}</p>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </section>
      <section className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <div className='flex sm:flex-row flex-col justify-between sm:items-start items-center'>
            <h3 className='text-3xl font-bold text-center mb-8'>
              Our Services
            </h3>

            <button
              className='w-fit p-4 rounded-[6px] text-white bg-blue-500 border-[1px] border-blue-500 border-solid text-center sm:mb-0 mb-3 transform transition-all duration-300 active:scale-[0.9]'
              type='submit'
            >
              View All
            </button>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {/* {services.map((service) => {
              const { id, name, icon, desc } = service;
              return (
                <div
                  key={id}
                  className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transform motion'
                >
                  <div className=' flex justify-center my-4 text-blue-500 text-4xl'>
                    {icon}
                  </div>

                  <div className='p-2'>
                    <h4 className='text-xl font-bold mb-2 text-center'>
                      {name}
                    </h4>
                    <p className='text-gray-600 text-center'>{desc}</p>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </section>
      <section className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <div className='flex sm:flex-row flex-col justify-between sm:items-start items-center'>
            <h3 className='text-3xl font-bold text-center mb-8'>
              What our clients say about us
            </h3>

            <button
              className='w-fit p-4 rounded-[6px] text-white bg-blue-500 border-[1px] border-blue-500 border-solid text-center sm:mb-0 mb-3 transform transition-all duration-300 active:scale-[0.9]'
              type='submit'
            >
              View All
            </button>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {/* {testimonials.map((testimonial) => {
              const { id, name, img, desc } = testimonial;
              return (
                <div
                  key={id}
                  className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transform motion py-4'
                >
                  <div className=' flex justify-center my-4  text-4xl'>
                    <Image
                      src={img}
                      alt={name}
                      width={100}
                      height={100}
                      className='rounded-full transform hover:scale-110 duration-300 h-24 w-24 cursor-pointer'
                    />
                  </div>

                  <div className='p-2'>
                    <h4 className='text-xl font-bold mb-2 text-center'>
                      {name}
                    </h4>
                    <p className='text-gray-600 text-center'>{desc}</p>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </section>
    </>
  );
}
