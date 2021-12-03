/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function OurTaxisSection(props) {
  const ourTaxis = props.ourTaxisBanner;
  const webInfo = props.webInfo;
  return (
    <div id={ourTaxis.id_anchor} className="taxis_section layout_padding" style={{backgroundColor: webInfo.background_color_web}}>
      <div className="container">
        <h1 className="our_text">{ReactHtmlParser(ourTaxis.title)}</h1>
        <div className="taxis_section_2">
          <div className={`${ourTaxis.taxis.length < 3 ? "row justify-content-md-center" : "row" }`}>
          {ourTaxis.taxis?.map((item, index) =>
            <div className="col-sm-4" key={`component-${index}`}>
              <div className="taxi_main">
                <div className="round_1">{item.number_item}</div>
                <h2 className="carol_text">{item.title}</h2>
                <p className="reader_text">{ReactHtmlParser(item.sub_title)}</p>
                <div className="images_2"><a href={item.url_link.href}><img src={item.imagen.url} alt={item.url_link.title} /></a></div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </div >
  );
}
