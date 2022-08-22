import React from "react"


function TestimonialText(props){ 
    return(
        <div className="testimonial-text-container">
            <img className="testimonial-img" src={props.photo} alt="Testimonial" />
            <p className="testimonial-text">{props.testimonial}</p>
            <h3>{props.name}</h3>
            <span>{props.role}</span>
        </div>
    )
}

export default TestimonialText;