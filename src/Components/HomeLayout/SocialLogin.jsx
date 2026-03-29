import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-5'>LogIn With</h1>
            <div className='space-y-3'>
                <button className='btn w-full btn-outline btn-primary'><FaGoogle /> Login With Google</button>
                <button className='btn w-full btn-outline btn-secondary '><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin; 