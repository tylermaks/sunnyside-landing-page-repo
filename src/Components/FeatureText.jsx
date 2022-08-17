import React from "react"

function FeatureText(props){
    return(
        <div id={props.id} className={props.container}>
            <article className={"feature-text " + props.textClass}>
                <h2>{props.heading}</h2>
                <p>{props.paragraph}</p>
                <span className={props.learnClass} style={{display:'none'}}>Learn More</span>
            </article>
        </div>
    )
}

export default FeatureText;