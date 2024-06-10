import React, { useContext } from 'react'
import { dataFood } from '../../Data/Data'
import { ThemeDark } from '../../Theme/Theme';
export default function Shop() {
    let Foods = useContext(dataFood)
    let { darkthemfun, setdarkthemfun, changeTheme } = useContext(ThemeDark)
    console.log(Foods);
    let m
    return (
        <div className={`${darkthemfun ? ' bg_dark text-white' : 'bg_gray'}`}>
            <div className="container py-5">
                <div className="row gy-3">
                    {Foods.map((item, index) => {
                        return (

                            <div className="col-md-4  align-items-stretch align-content-stretch " key={index}>
                                <div className={`m-2 p-3 align-items-stretch align-content-stretch h-100 ps-0 ${darkthemfun ? `card_dark` : `bg-wit`}  rounded-5 row`}>
                                    <div className="col-5 mt-4 align-content-center h-100" >
                                        <img src={require('../../Assits/' + `${Foods[index].image}` + `${Foods[index].type}`)} className='w-100' alt="" />
                                    </div>
                                    <div className="col-7 align-content-center">
                                        <div className=" d-flex justify-content-between mb-3">
                                            <span>${Foods[index].prise}</span>
                                            <span>
                                                <i className="fa-solid fa-star text-orange me-2"></i>
                                                {Foods[index].rating}
                                            </span>
                                        </div>
                                        <h3 className=' mb-3'>{Foods[index].name}</h3>
                                        <button className='btn bg-orange text-white'> Order Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
