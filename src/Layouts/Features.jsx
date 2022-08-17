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
                            id={item.id}
                            container={item.container}
                            textClass={item.textClass}
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