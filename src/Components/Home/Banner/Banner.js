import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div className=" main_Banner">
      <div className="container ">
        <div className="d-flex justify-content-around align-items-center Banner_container">
          <div className="banner_div left_banner">
            <div className="banner_content">
              <div className="logo_hot-deal text-bold">
                <i className="fa-solid fa-fire-flame-curved"></i>
                <span className="hot">Hot Deal In This Week</span>
              </div>


              <div className="banner_title-group">
                <h1 className="banner_title">Roco Wireless <br /> Headphone</h1>
                <br />

                <div className="d-flex justify-content-around align-items-center ">

               <div className="titleDiv">
               <button className="shop_button">
                  <Link to='/'>
                    <span className="cart_count"></span>
                    <i className="sss fa-solid fa-cart-plus"></i>
                    <span className="shopButton">Shop Now</span>
                    </Link>
                    </button>
               </div>
               <div className="image_div">
                <img width="70px" height='70px' className="rounded" src="https://new.axilthemes.com/demo/template/etrade/assets/images/others/author1.png" alt="" />
                <img width="70px" height='70px' className="rounded" src="https://new.axilthemes.com/demo/template/etrade/assets/images/others/author2.png" alt="" />
                <img width="70px" height='70px' className="rounded" src="https://new.axilthemes.com/demo/template/etrade/assets/images/others/author3.png" alt="" />
                <img width="70px" height='70px' className="rounded" src="https://new.axilthemes.com/demo/template/etrade/assets/images/others/author4.png" alt="" />
               </div>
               <div className="titleDiv">
               <div className="small-ratings">
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <span className="extra_div">
               <i class="fa-solid fa-star-half-stroke"></i>
               </span>

                <div className="reew">
                  <span>100+</span>
                  <span className="title_rev_container">
                  <span className="title_rev">
                  Reviews
                  </span>
                  </span>
                </div>
            </div>
               </div>




                    </div>
              </div>
            </div>
          </div>
          <div className="banner_div right_banner">
            <div className="banner__imag">
              <img className="img-fluid" src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-38.png" alt="" />
            <div className="product-price">
              <span className="text">Form</span> <br />
              <span className="price-amount">$49.00</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
