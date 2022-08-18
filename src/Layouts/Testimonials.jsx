import React from "react"

import TestimonialText from "../Components/TestimonialText";
import {testimonialData} from "../ComponentData"

import "../Assets/Styles/Testimonials/Testimonials.css"

function Testimonials(){
    return(
        <section id="testimonials">
            <h2>Client Testimonials</h2>
            <div class="testimonial-flex">
            {
                testimonialData.map(item => {
                    return(
                        <TestimonialText 
                            photo={item.photo}
                            name={item.name}
                            role={item.role}
                            testimonial={item.testimonial}
                        />
                    )
                })
            }
            </div>
        </section>
    )
}

export default Testimonials;