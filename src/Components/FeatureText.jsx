import React from "react"



function FeatureText(props){
    return(
        <div className={props.container}>
            <img className={props.imgClass} src={props.image} alt="" />
            <article className={props.class}>
                <h2 className={props.textClass}>{props.heading}</h2>
                <p className={props.textClass}>{props.paragraph}</p>
                <span className={props.learnClass} style={{display:'none'}}>Learn More</span>
            </article>
        </div>
    )
}

export default FeatureText;