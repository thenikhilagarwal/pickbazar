import React, { useState } from 'react';
import CategoryList from './CategoryList';

function Aside(){
    const [isOpen, setOpen] = useState();

    const openSideNav = (index) => {
        if(index === isOpen){
            setOpen(null);
        }else{
            setOpen(index);
        }
    };

    return(
        <aside className='col-xl-2 col-lg-3 col-3 bg-white'>
            <div className='os-content px-4'>
                <ul className='category_listing py-5'>
                    {CategoryList.map((itmes, index)=>
                            <li key={index}>
                                <button className='w-100 py-2' onClick={()=> openSideNav(index)}>
                                    <span className='cat_icon me-3'>
                                        {itmes.icon}
                                    </span>
                                    <span className='cat_title'>{itmes.name}</span>
                                    <span className='arrow'><img src={itmes.arrowIcon} alt='arrow icon'/></span>
                                </button>
                                <ul className='submenuList'>
                                    {isOpen === index && itmes.subMenu.map((item, index)=>
                                        <li key={index}>
                                            <button className='w-100 py-2'>
                                                {item.subItem}
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </li>
                        )}
                </ul>
            </div>
        </aside>
    )
}

export default Aside;
