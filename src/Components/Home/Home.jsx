import React, { useContext, useRef } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ThemeDark } from '../../Theme/Theme';
export default function Home() {
    let { darkthemfun, setdarkthemfun, changeTheme } = useContext(ThemeDark)

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
    };
    return (
        <div className={`${darkthemfun ? `bg_dark text-white` : `bg_gray`}`}>
            <div className=" container-xl">
                <div className=' row '>
                    <div className=" col-6 ">
                        <h1 className={`d-flex pt-5 ${darkthemfun ? ` text-dark` : ``} `}>
                            <span className='biger text-orange'>Fast</span>
                            <span className='d-flex  flex-column align-bottom'>
                                <span className={`h-50  align-content-end display-5 ${darkthemfun ? ` text-white` : `text-black`}`}>Food</span>
                                <span className={`h-50 display-5 ${darkthemfun ? ` text-white` : `text-black`}`}> Delivery</span>
                            </span>
                        </h1>
                        <p className={`${darkthemfun ? `text-light` : `text-body-secondary`}  w-75`}>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium</p>
                        <div className="d-flex   align-content-center align-items-center">
                            <button className={`rounded-pill py-2 px-4  ${darkthemfun ? ` text-black btn bg-light ` : ` bg-black btn text-white`} me-3 shadow-lg`}>Order Now</button>
                            <a className="text-decoration-none text-black d-flex align-items-center" href=""> <span className="width-circl bg-white me-2"><i className="fa-solid fa-play"></i></span> <span className={`${darkthemfun ? ` text-white` : `text-black`}`}>Watch Video</span> </a>
                            <div className="ps-4">
                                <svg width="170" height="171" viewBox="0 0 223 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.311 126.237C25.5955 142.949 38.8144 173.834 81.4143 163.675M81.4143 163.675C134.664 150.977 107.697 111.079 77.945 114.584C48.1929 118.09 53.5409 154.526 81.4143 163.675ZM81.4143 163.675C91.9501 168.996 117.095 178.102 133.386 171.96C153.75 164.284 162.826 128.411 161.284 105.392" stroke="#C4C4C4" strokeOpacity="0.7" strokeWidth="3" strokeDasharray="9 9" />
                                    <path d="M155.043 73.6516C158.373 67.805 166.995 68.4314 169.445 74.6981L177.167 94.447C179.309 99.926 175.004 105.766 169.136 105.339L150.919 104.016C145.051 103.589 141.635 97.1887 144.547 92.0769L155.043 73.6516Z" fill="#C4C4C4" fillOpacity="0.7" />
                                </svg>


                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <div className="">
                                    <i className="fa-solid fa-star text-orange"></i>
                                    <i className="fa-solid fa-star text-orange"></i>
                                    <i className="fa-solid fa-star text-orange"></i>
                                    <i className="fa-solid fa-star text-orange"></i>
                                    <i className="fa-solid fa-star text-orange"></i>
                                </div>
                                <h5>5 star rating</h5>
                                <p className=''>based on 1788 reviews</p>
                            </div>
                            <div className="w-50 d-flex float-end me-5 pe-5 ps-3">
                                <i className="fa-solid fa-caret-right mt-1 me-2"></i>  Quick, easy, healthy, and delicious Grilled chicken rice spicy chickpeas!
                            </div>
                        </div>

                    </div>
                    <div className="col-6 position-relative mt-4 ">
                        <img src={require("../../Assits/bowl-food.png")} className='shadowx position-absolute start-0 bottom-0 translate-middle-x z-3 ' style={{ width: " 220px" }} />
                        <Swiper
                            centeredSlides={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            onAutoplayTimeLeft={onAutoplayTimeLeft}
                            direction={'vertical'}
                            className="mySwiper w-100 h-100"
                        >
                            <SwiperSlide className="bg-url-1 w-100 h-100 trans"></SwiperSlide>
                            <SwiperSlide className="bg-url-2 w-100 h-100 trans"></SwiperSlide>
                            <SwiperSlide className="bg-url-3 w-100 h-100 trans"></SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div>
            <div className="h-30 mt-5 grab" style={{ cursor: "grab" }}>
                <Swiper

                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={false}

                    watchSlidesProgress={true}
                    className="mySwiper position-relative "
                >
                    <div className=' big-box up-down position-absolute start top-0 '></div>
                    <div className='box up-down position-absolute start-25 top-0 '></div>
                    <div className='box up-down position-absolute start-20 bottom-0 '></div>
                    <SwiperSlide className=' opacity-100 '>
                        <div className={` p-3 ps-0 w-100 ${darkthemfun ? `card_dark` : `bg-wit`}  rounded-5 row`}>
                            <div className="col-5 mt-4 align-content-center">
                                <img src={require("./../../Assits/burger-1.png")} className='w-100' alt="" />
                            </div>
                            <div className="col-7 align-content-center">
                                <div className=" d-flex justify-content-between mb-3">
                                    <span>$ 24.00</span>
                                    <span>
                                        <i className="fa-solid fa-star text-orange"></i>
                                        4.9
                                    </span>
                                </div>
                                <h3 className=' mb-3'>Griled Chicken</h3>
                                <button className='btn bg-orange text-white'> Order Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' opacity-100'>
                        <div className={` p-3 ps-0 w-100 ${darkthemfun ? `card_dark` : `bg-wit`}  rounded-5 row`}>
                            <div className="col-5 mt-4 align-content-center">
                                <img src={require("./../../Assits/bowl-food.png")} className='w-100' alt="" />
                            </div>
                            <div className="col-7 align-content-center">
                                <div className=" d-flex justify-content-between mb-3">
                                    <span>$ 24.00</span>
                                    <span>
                                        <i className="fa-solid fa-star text-orange"></i>
                                        4.9
                                    </span>
                                </div>
                                <h3 className=' mb-3'>Griled Chicken</h3>
                                <button className='btn bg-orange text-white'> Order Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' opacity-100'>
                        <div className={` p-3 ps-0 w-100 ${darkthemfun ? `card_dark` : `bg-wit`}  rounded-5 row`}>
                            <div className="col-5 mt-4 align-content-center">
                                <img src={require("./../../Assits/bowl-food.png")} className='w-100' alt="" />
                            </div>
                            <div className="col-7 align-content-center">
                                <div className=" d-flex justify-content-between mb-3">
                                    <span>$ 24.00</span>
                                    <span>
                                        <i className="fa-solid fa-star text-orange"></i>
                                        4.9
                                    </span>
                                </div>
                                <h3 className=' mb-3'>Griled Chicken</h3>
                                <button className='btn bg-orange text-white'> Order Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' opacity-100'>
                        <div className={` p-3 ps-0 w-100 ${darkthemfun ? `card_dark` : `bg-wit`}  rounded-5 row`}>
                            <div className="col-5 mt-4 align-content-center">
                                <img src={require("./../../Assits/bowl-food.png")} className='w-100' alt="" />
                            </div>
                            <div className="col-7 align-content-center">
                                <div className=" d-flex justify-content-between mb-3">
                                    <span>$ 24.00</span>
                                    <span>
                                        <i className="fa-solid fa-star text-orange"></i>
                                        4.9
                                    </span>
                                </div>
                                <h3 className=' mb-3'>Griled Chicken</h3>
                                <button className='btn bg-orange text-white'> Order Now</button>
                            </div>
                        </div>
                    </SwiperSlide>



                </Swiper>
            </div>
        </div>
    )
}
