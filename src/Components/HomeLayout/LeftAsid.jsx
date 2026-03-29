import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAsid = () => {
    return (
        <div>
           <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                 <Categories></Categories>
           </Suspense>
        </div>
    );
};

export default LeftAsid;