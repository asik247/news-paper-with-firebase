import React from 'react';
import Headder from '../Components/Headder';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            {/* Header code start here */}
            <Headder></Headder>
            {/* Latest News Section code start here */}
            <section className='w-11/12 mx-auto my-4'>
                <LatestNews></LatestNews>
            </section>
            {/* nav code start here */}
            <nav className='w-11/12 mx-auto my-4'>
                <Navbar></Navbar>
            </nav>
        </div>
    );
};

export default HomeLayout;