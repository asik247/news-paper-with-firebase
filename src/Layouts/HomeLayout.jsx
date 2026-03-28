import React from 'react';
import Headder from '../Components/Headder';
import LatestNews from '../Components/LatestNews';

const HomeLayout = () => {
    return (
        <div>
            {/* Header code start here */}
            <Headder></Headder>
            {/* Latest News Section code start here */}
            <section>
                <LatestNews></LatestNews>
            </section>
        </div>
    );
};

export default HomeLayout;