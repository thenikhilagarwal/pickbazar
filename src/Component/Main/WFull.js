import React from 'react';
import WFullList from './WFullList';


function WFull(){

    return(
        <div className='w-full w-100 p-4'>
            <div className='row'>
            {WFullList.map((items, index)=>
                <div className='col-xxl-2 col-md-3 col-sm-2 col-12 mb-3' key={index}>
                    <article className='product-card bg-white'>
                        <div className='product-card-img'>
                            <img src={items.itemImage} alt='Item' className='img-fluid'/>
                        </div>
                        <div className='product-card-content p-3'>
                            <h6><span>{items.itemPrice}</span> <del className='text-muted'>{items.itemDisPrice}</del></h6>
                            <p className='text-secondary'>{items.itemName}</p>
                            <button type='button' className='btn btn-light d-flex align-items-center w-100 p-0 overflow-hidden'>
                                <span className='w-100'>Add</span>
                                <span className='btn-plus bg-secondary'>
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 stroke-2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                </span>
                            </button>
                        </div>
                    </article>
                </div>
            )}
                
            </div>
        </div>
    )
}

export default WFull;