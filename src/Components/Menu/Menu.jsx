import React, { useContext } from 'react'
import { ThemeDark } from '../../Theme/Theme'
import { NavLink, Outlet } from 'react-router-dom'

export default function Menu() {
    let { darkthemfun, setdarkthemfun, changeTheme } = useContext(ThemeDark)

    return (
        <>
            <div className={`${darkthemfun ? `bg_dark text-white` : `bg_gray`} pb-5`}>
                <div className="pt-4 container">
                    <p className='text-orange text-center user-select-none '>CHOOSE BEST OF</p>
                    <h3 className='h1 display-1 text-uppercase text-center pb-5'>fast food menu</h3>
                    <div className=" d-flex flex-column justify-content-center align-items-center">
                        <ul className="nav nav-pills mb-5" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="bg-btn-nav nav-link active " id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">all</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="bg-btn-nav nav-link" id="pills-fast-tab" data-bs-toggle="pill" data-bs-target="#pills-fast" type="button" role="tab" aria-controls="pills-fast" aria-selected="false">fast food</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="bg-btn-nav nav-link" id="pills-drink-tab" data-bs-toggle="pill" data-bs-target="#pills-drink" type="button" role="tab" aria-controls="pills-drink" aria-selected="false">drink</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="bg-btn-nav nav-link" id="pills-dessert-tab" data-bs-toggle="pill" data-bs-target="#pills-dessert" type="button" role="tab" aria-controls="pills-dessert" aria-selected="false">dessert</button>
                            </li>

                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="p-3 bg-black tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
                                <div className="row">
                                    <div className="card-templet col-md-6 position-relative">
                                        <div className="m-2">
                                            <img src={require("../../Assits/h5-img-11.jpg")} className='h-80 w-100 image-fit ' alt="img" />
                                        </div>
                                        <div className="layer position-absolute w-100 h-100 top-0 start-0 d-none">
                                            <h3 className=' display-1 text-orange m-5'>pizza</h3>
                                            <p className='ms-5 w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum.</p>
                                            <div className="circle-red">20$</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="row m-2">
                                            <div className=" position-relative col-md-6 overflow-hidden">
                                                <div className="m-2">

                                                    <img src={require("../../Assits/pexels-willoworld-2332685.jpg")} className='h-40 image-fit' alt="img" />
                                                </div>
                                                <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                    <h3 className=' display-4 text-orange m-5'>pizza</h3>
                                                    <div className="circle-red">20$</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 position-relative">
                                                <div className="m-2">
                                                    <img src={require("../../Assits/pexels-caricatte-2336676.jpg")} className='h-40 w-100 image-fit' alt="img" />
                                                </div>
                                                <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                    <h3 className=' display-4 text-orange m-5'>Burger</h3>
                                                    <div className="circle-red">25$</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 position-relative">
                                                <div className="m-2">

                                                    <img src={require("../../Assits/pexels-leonardo-luz-338722550-14001636.jpg")} className='h-40 w-100 image-fit' alt="img" />
                                                </div>
                                                <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                    <h3 className=' display-4 text-orange m-5'>nugget</h3>
                                                    <div className="circle-red">23$</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 position-relative">
                                                <div className="m-2">

                                                    <img src={require("../../Assits/pexels-tim-samuel-6697264.jpg")} className='h-40 w-100 image-fit' alt="img" />
                                                </div>
                                                <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                    <h3 className=' display-4 text-orange m-5'>Broest</h3>
                                                    <div className="circle-red">30$</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-12 position-relative">
                                        <div className="m-2">
                                            <img src={require("../../Assits/h5-img-7.jpg")} className='w-100 h-40 image-fit  ' alt="img" />
                                        </div>
                                        <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                            <h3 className=' display-4 text-orange m-5'>pizza</h3>
                                            <div className="circle-red">20$</div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 position-relative">
                                        <div className="m-2">

                                            <img src={require('../../Assits/Screenshot 2024-06-06 152718.jpg')} alt="" className='w-100 h-40 image-fit' />
                                        </div>
                                        <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                            <h3 className=' display-4 text-orange m-5'>cola</h3>
                                            <div className="circle-red">5$</div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 position-relative">
                                        <div className="m-2">

                                            <img src={require('../../Assits/pexels-mlkbnl-20522892.jpg')} alt="" className='w-100 h-40 image-fit' />
                                        </div>
                                        <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                            <h3 className=' display-4 text-orange m-5'>Latte Caffè </h3>
                                            <div className="circle-red">20$</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 position-relative">
                                        <div className="m-2">
                                            <img src={require('../../Assits/pexels-valeriya-1199957.jpg')} alt="" className='w-100 h-40 image-fit' />
                                        </div>
                                        <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                            <h3 className=' display-4 text-orange m-5'>Burger</h3>
                                            <div className="circle-red">15$</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-fast" role="tabpanel" aria-labelledby="pills-fast-tab" tabIndex="0">
                                <div className="p-3 bg-black tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
                                    <div className="row">
                                        <div className="card-templet col-md-6 position-relative">
                                            <div className="m-2">
                                                <img src={require("../../Assits/h5-img-11.jpg")} className='h-80 w-100 image-fit ' alt="img" />
                                            </div>
                                            <div className="layer position-absolute w-100 h-100 top-0 start-0 d-none">
                                                <h3 className=' display-1 text-orange m-5'>pizza</h3>
                                                <p className='ms-5 w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum.</p>
                                                <div className="circle-red">20$</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 ">
                                            <div className="row m-2">
                                                <div className=" position-relative col-md-6 overflow-hidden">
                                                    <div className="m-2">

                                                        <img src={require("../../Assits/pexels-willoworld-2332685.jpg")} className='h-40 image-fit' alt="img" />
                                                    </div>
                                                    <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                        <h3 className=' display-4 text-orange m-5'>pizza</h3>
                                                        <div className="circle-red">20$</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 position-relative">
                                                    <div className="m-2">
                                                        <img src={require("../../Assits/pexels-caricatte-2336676.jpg")} className='h-40 w-100 image-fit' alt="img" />
                                                    </div>
                                                    <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                        <h3 className=' display-4 text-orange m-5'>Burger</h3>
                                                        <div className="circle-red">25$</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 position-relative">
                                                    <div className="m-2">

                                                        <img src={require("../../Assits/pexels-leonardo-luz-338722550-14001636.jpg")} className='h-40 w-100 image-fit' alt="img" />
                                                    </div>
                                                    <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                        <h3 className=' display-4 text-orange m-5'>nugget</h3>
                                                        <div className="circle-red">23$</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 position-relative">
                                                    <div className="m-2">

                                                        <img src={require("../../Assits/pexels-tim-samuel-6697264.jpg")} className='h-40 w-100 image-fit' alt="img" />
                                                    </div>
                                                    <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                        <h3 className=' display-4 text-orange m-5'>Broest</h3>
                                                        <div className="circle-red">30$</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-drink" role="tabpanel" aria-labelledby="pills-drink-tab" tabIndex="0">  <div className="p-3 bg-black tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
                                <div className="row">
                                    <div className="card-templet col-md-6 position-relative">
                                        <div className="m-2">
                                            <img src={require("../../Assits/h5-img-11.jpg")} className='h-80 w-100 image-fit ' alt="img" />
                                        </div>
                                        <div className="layer position-absolute w-100 h-100 top-0 start-0 d-none">
                                            <h3 className=' display-1 text-orange m-5'>pizza</h3>
                                            <p className='ms-5 w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum.</p>
                                            <div className="circle-red">20$</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="row m-2">
                                            <div className=" position-relative col-md-6 overflow-hidden">
                                                <div className="m-2">

                                                    <img src={require("../../Assits/pexels-willoworld-2332685.jpg")} className='h-40 image-fit' alt="img" />
                                                </div>
                                                <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                    <h3 className=' display-4 text-orange m-5'>pizza</h3>
                                                    <div className="circle-red">20$</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 position-relative">
                                                <div className="m-2">
                                                    <img src={require("../../Assits/pexels-caricatte-2336676.jpg")} className='h-40 w-100 image-fit' alt="img" />
                                                </div>
                                                <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                    <h3 className=' display-4 text-orange m-5'>Burger</h3>
                                                    <div className="circle-red">25$</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 position-relative">
                                                <div className="m-2">

                                                    <img src={require("../../Assits/pexels-leonardo-luz-338722550-14001636.jpg")} className='h-40 w-100 image-fit' alt="img" />
                                                </div>
                                                <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                    <h3 className=' display-4 text-orange m-5'>nugget</h3>
                                                    <div className="circle-red">23$</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 position-relative">
                                                <div className="m-2">

                                                    <img src={require("../../Assits/pexels-tim-samuel-6697264.jpg")} className='h-40 w-100 image-fit' alt="img" />
                                                </div>
                                                <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                    <h3 className=' display-4 text-orange m-5'>Broest</h3>
                                                    <div className="circle-red">30$</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div className="tab-pane fade" id="pills-dessert" role="tabpanel" aria-labelledby="pills-dessert-tab" tabIndex="0">  <div className="p-3 bg-black tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
                                <div className="row">
                                    <div className="card-templet col-md-6 position-relative">
                                        <div className="m-2">
                                            <img src={require("../../Assits/h5-img-11.jpg")} className='h-80 w-100 image-fit ' alt="img" />
                                        </div>
                                        <div className="layer position-absolute w-100 h-100 top-0 start-0 d-none">
                                            <h3 className=' display-1 text-orange m-5'>pizza</h3>
                                            <p className='ms-5 w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum.</p>
                                            <div className="circle-red">20$</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="row m-2">
                                            <div className=" position-relative col-md-6 overflow-hidden">
                                                <div className="m-2">

                                                    <img src={require("../../Assits/pexels-willoworld-2332685.jpg")} className='h-40 image-fit' alt="img" />
                                                </div>
                                                <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                    <h3 className=' display-4 text-orange m-5'>pizza</h3>
                                                    <div className="circle-red">20$</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 position-relative">
                                                <div className="m-2">
                                                    <img src={require("../../Assits/pexels-caricatte-2336676.jpg")} className='h-40 w-100 image-fit' alt="img" />
                                                </div>
                                                <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                    <h3 className=' display-4 text-orange m-5'>Burger</h3>
                                                    <div className="circle-red">25$</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 position-relative">
                                                <div className="m-2">

                                                    <img src={require("../../Assits/pexels-leonardo-luz-338722550-14001636.jpg")} className='h-40 w-100 image-fit' alt="img" />
                                                </div>
                                                <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                    <h3 className=' display-4 text-orange m-5'>nugget</h3>
                                                    <div className="circle-red">23$</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 position-relative">
                                                <div className="m-2">

                                                    <img src={require("../../Assits/pexels-tim-samuel-6697264.jpg")} className='h-40 w-100 image-fit' alt="img" />
                                                </div>
                                                <div className="layer position-absolute w-100 h-100 top-0 start-0 ">
                                                    <h3 className=' display-4 text-orange m-5'>Broest</h3>
                                                    <div className="circle-red">30$</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
