import React, { useContext } from 'react'
import { ThemeDark } from '../../Theme/Theme'
import { dataFood } from '../../Data/Data'

export default function Contact() {
    let { darkthemfun, setdarkthemfun, changeTheme } = useContext(ThemeDark)
    let gamal = useContext(dataFood)
    console.log("gamal: ", gamal);
    return (
        <div className={`p-5 ${darkthemfun ? ' bg_dark text-white' : 'bg_gray'}`}>
            <div className="container ">
                <div className="row border-bottom">
                    <div className="col-md-6 border-end">
                        <div className="titel m-5">
                            <h1 className='display-3'>CONTACT US</h1>
                            <p className='w-50 fs-6'>Any question? We would be happy to help you!</p>
                        </div>
                        <div className="contact m-5 w-50 position-relative">
                            <div className="mb-2 border border-2 p-3 rounded-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg> +0123456789 </div>
                            <div className={`${darkthemfun ? 'bg-light text-black' : 'bg-dark text-white'} mb-2 border border-2 p-3 rounded-2`}>
                                <i className="fa-regular fa-envelope fs-5"></i> example@email.com </div>
                            <div className="border border-2 p-3 rounded-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg> 775 Rolling Green Rd. </div>
                            <div className="posedite position-absolute">
                                <svg width="153" height="154" viewBox="0 0 223 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.311 126.237C25.5955 142.949 38.8144 173.834 81.4143 163.675M81.4143 163.675C134.664 150.977 107.697 111.079 77.945 114.584C48.1929 118.09 53.5409 154.526 81.4143 163.675ZM81.4143 163.675C91.9501 168.996 117.095 178.102 133.386 171.96C153.75 164.284 162.826 128.411 161.284 105.392" stroke="#C4C4C4" strokeOpacity="0.7" strokeWidth="3" strokeDasharray="9 9" />
                                    <path d="M155.043 73.6516C158.373 67.805 166.995 68.4314 169.445 74.6981L177.167 94.447C179.309 99.926 175.004 105.766 169.136 105.339L150.919 104.016C145.051 103.589 141.635 97.1887 144.547 92.0769L155.043 73.6516Z" fill="#C4C4C4" fillOpacity="0.7" />
                                </svg>

                            </div>
                            <div className="media d-flex mt-5 gap-4">
                                <div className={`${!darkthemfun ? 'bg-black text-white' : 'bg-white text-black'} circle`}><i className="fa-brands fa-facebook-f"></i></div>
                                <div className={`${!darkthemfun ? 'bg-black text-white' : 'bg-white text-black'} circle`}><i className="fa-brands fa-x-twitter"></i></div>
                                <div className={`${!darkthemfun ? 'bg-black text-white' : 'bg-white text-black'} circle`}><i className="fa-brands fa-instagram"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 mb-5 ">
                        <form action="">
                            <div className="w-75 m-auto row g-2">
                                <div className="col-md-6 d-flex flex-column">
                                    <label htmlFor="firstName" className='my-2'>First Name:</label>
                                    <input className='me-3 rounded-2 p-2 border-1' id='firstName' type="text" placeholder='Your Frist Name' />
                                </div>
                                <div className="col-md-6 d-flex flex-column">
                                    <label htmlFor="last" className='ms-3 my-2'>First Last:</label>
                                    <input className='ms-3 rounded-2 p-2 border-1' id='last' type="text" placeholder='Your last Name' />
                                </div>
                                <div className="col-md-12 d-flex flex-column">
                                    <label htmlFor="email" className='my-2'>Your Email:</label>
                                    <input className=' rounded-2 p-2 border-1' id='email' type="email" placeholder='example@email.com' />
                                </div>
                                <div className="col-md-12 d-flex flex-column">
                                    <label htmlFor="number" className='my-2'>phone Number:</label>
                                    <input className='rounded-2 p-2 border-1' id='number' type="text" placeholder='+0123456789' />
                                </div>
                                <div className="col-md-12 d-flex flex-column mb-3">
                                    <label htmlFor="masseg" className='my-2'>Youer Masseg:</label>
                                    <textarea name="" className=' rounded-2 ps-3 pt-2' id="masseg" placeholder='Youer Masseg' style={{ maxHeight: '200px', height: "105px", backgroundColor: "#" }}></textarea>
                                </div>
                                <div className="col-md-12 d-flex flex-column">
                                    <button className={`btn  ${darkthemfun ? 'btn-light' : 'btn-dark text-white'}`}>Send Your Masseg <i className="fa-regular fa-paper-plane"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
