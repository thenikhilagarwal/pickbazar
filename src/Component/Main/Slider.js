import React from "react";

function Slider(){
    const bannerImage = "banner/grocery.webp";

    return(
        <div className="banner_section">
            <img src={bannerImage} alt="Banner Image" className="img-fluid banner_image"/>
            <div className="banner_content">
                <div className="container text-center">
                    <h1 className="banner_title">Groceries Delivered in 90 Minute</h1>
                    <p className="banner_sub_title">Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>
                    <form>
                        <div className="search_form mt-5">
                            <input type="text" className="form-control" placeholder="Search your products from here"/>
                            <button type="button" className="btn btn-primary"><i className="fa fa-search me-2"></i> Serach</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Slider;