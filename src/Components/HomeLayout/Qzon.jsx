import React from 'react';
import swimmingImgae from "../../assets/swimming.png"
import classImgae from "../../assets/class.png"
import playImgae from "../../assets/playground.png"
const Qzon = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold'>Qzon</h2>
            <div className='space-y-5'>
                <img src={swimmingImgae} alt="" />
                <img src={classImgae} alt="" />
                <img src={playImgae} alt="" />
            </div>
        </div>
    );
};

export default Qzon;