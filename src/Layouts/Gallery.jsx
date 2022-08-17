import React from "react"

import "../Assets/Styles/Gallery/Gallery.css"

import milkBottles from "../Assets/images/mobile/image-gallery-milkbottles.jpg"
import orange from "../Assets/images/mobile/image-gallery-orange.jpg"
import cone from "../Assets/images/mobile/image-gallery-cone.jpg"
import sugarCubes from "../Assets/images/mobile/image-gallery-sugar-cubes.jpg"

function Gallery(){

    const galleryImages = [milkBottles, orange, cone, sugarCubes]

    return(
        <section id="gallery">
            {
                galleryImages.map(item => {
                    return(
                        <img className="gallery-image" src={item} alt="Gallery" />
                    )
                })
            } 
        </section>
    )
}

export default Gallery;