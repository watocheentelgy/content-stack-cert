/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
import React from "react";

import SliderMain from "./slider-main";
import OurTaxisSection from "./our-taxis-section";

export default function RenderComponents(props) {
  const { pageComponents, webInfo } = props;
  return (
    <div>
    {pageComponents?.map((component, key) => {
        if (component.slider_main) {
          return (
            <SliderMain key={component.slider_main._metadata.uid} 
              sliderMain={component.slider_main}
              webInfo={webInfo}
            />
          );
        }else if(component.our_taxis_banner){
          return (
            <OurTaxisSection key={component.our_taxis_banner._metadata.uid} 
              ourTaxisBanner={component.our_taxis_banner}
              webInfo={webInfo}
            />
          );
        }
      })
    }
    </div>
  );
}
