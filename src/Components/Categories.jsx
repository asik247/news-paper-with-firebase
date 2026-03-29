import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise = fetch("/categories.json")
.then(res=>res.json())
const Categories = () => {
    console.log(categoriesPromise);
    const categories = use(categoriesPromise)
    console.log(categories);
    return (
        <div>
            <h1 className='font-bold'>All Categories ({categories.length})</h1>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(categorie=><NavLink to={`/category/${categorie.id}`} className={'btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent'} key={categorie.id}>{categorie.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;