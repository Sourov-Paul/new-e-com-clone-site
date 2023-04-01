import './Category.css';




const Category = () => {


  return (
    <div>
      <div className='main_category_container'>
  
  <div className="row m-auto small">
   
    <div className="col-sm-6 col-md-4 col-lg-2">
    <div className="mini_div">
      <img  className='img-fluid' src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-4.png" alt="" />
      <br />
      <span className='mini_card_title'>Phones</span>
    </div>
    </div>
    <div className="col-sm-6 col-md-4 col-lg-2">
    <div className="mini_div">
      <img  className='img-fluid' src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-5.png" alt="" />
      <br />
      <span className='mini_card_title'>Computers</span>
    </div>
    </div>
    <div className="col-sm-4 col-md-4 col-lg-2">
    <div className="mini_div">
      <img  className='img-fluid' src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-11.png" alt="" />
      <br />
      <span className='mini_card_title'>Accessories</span>
    </div>
    </div>
    <div className="col-sm-4 col-md-4 col-lg-2">
    <div className="mini_div">
      <img  className='img-fluid' src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-6.png" alt="" />
      <br />
      <span className='mini_card_title'>Laptop</span>
    </div>
    </div>
    <div className="col-sm-4 col-md-4 col-lg-2">
    <div className="mini_div">
      <img  className='img-fluid' src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-2.png" alt="" />
      <br />
      <span className='mini_card_title'>Monitors</span>
    </div>
    </div>
    <div className="col-sm-4 col-md-4 col-lg-2">
    <div className="mini_div">
      <img  className='img-fluid' src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-7.png" alt="" />
      <br />
      <span className='mini_card_title'>Networking</span>
    </div>
    </div>
  
  </div>
  
  
  

</div>

<div className="main_enhance">
  <div className="container missingPart">
    <div className="row m-auto ">
      <div className="col-sm-12 col-md-6 col-6 col-lg-6">
        <div className="dont_miss">
        <div className="missContainer">
        <i className="fa-solid fa-headphones-simple"></i> <span>Don't Miss</span>
        <br />
        </div>
        <h2 className='enhance'>Enhance Your <br /> Music Experience</h2>
        <div className="time_container">
        <div className='mainTime'>
            <div className="d-flex">
                <div className="day text-center">
                    <span className= 'time'>0</span> <br />
                    <span>Day</span>
                </div>
                <div className="hours text-center">
                <span className='time'>00</span> <br />
                    <span>Hrs</span>
                </div>
                <div className="min text-center">
                <span className='time'>00</span> <br />
                    <span>Min</span>
                </div>
                <div className="sec text-center">
                <span className='time'>00</span> <br />
                    <span>Sec</span>
                </div>
            </div>
        </div> <br />
          <button>Check it Out!</button>
        </div>
        </div>
        
      </div>
      <div className="col-sm-12 col-md-6 col-6 col-lg-6">
        <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-03.png" className='img-fluid image' alt="" />
      </div>
    </div>
  </div>
  </div> 




    </div>
  );
};

export default Category;