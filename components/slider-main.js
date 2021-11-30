/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function SliderMain(props) {
  const sliderMain = props.sliderMain;
  const webInfo = props.webInfo;
  return (
    <div className="banner_section" style={{backgroundColor: webInfo.background_color_web}}>
      <div className="container-fluid">
        <div id="main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
          {sliderMain.slide?.map((item, index) =>
            <div className={`${index == 0 ? "carousel-item active" : "carousel-item" }`} key={`component-${index}`}>
              <div className="row">
                <div className="col-md-6">
                  <div className="book_now">
                    <h1 className="book_text">{item.title}</h1>
                    <h1 className="call_text">{item.sub_title}</h1>
                  </div>
                  <div className="image_1"><img src={item.image.url} /></div>
                </div>
                <div className="col-md-6">
                  <h1 className="booking_text">{item.form_title}</h1>
                  <div className="contact_bg">
                    <div className="input_main">
                      <div className="container">
                        <h2 className="request_text">{item.form_sub_title}</h2>
                        <form action="#">
                          <div className="form-group">
                            <input type="text" className="email-bt" placeholder={item.form_box_place_holder_pickup} name="pickup" />
                          </div>
                          <div className="form-group">
                            <input type="text" className="email-bt" placeholder={item.form_box_place_holder_drop} name="drop" />
                          </div>
                          <div className="form-group">
                            <input type="text" className="email-bt" placeholder={item.form_box_place_holder_when} name="when" />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="send_bt"><a href="#">{item.form_label_button}</a></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
          <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i className="fa fa-angle-left"></i>
          </a>
          <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
