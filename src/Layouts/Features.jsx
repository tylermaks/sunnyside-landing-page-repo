import React from "react"
import FeatureText from "../Components/FeatureText"

import "../Assets/Styles/Features/Features.css"
import {featureData} from "../ComponentData"



function Features() {

    return(
        <section id="features">
            {
                featureData.map(item => {
                    return(
                        <FeatureText 
                            container={item.container}
                            class={item.class}
                            image={item.image}
                            imgClass={item.imgClass}
                            heading={item.heading}
                            paragraph={item.paragraph}
                            learnClass={item.learnClass}
                        />
                    )
                   })
            }
           
        </section>
    )
}

export default Features;