import React from "react"

import "../Assets/Styles/Gallery/Gallery.css"


function Gallery(){

    const galleryImages = ["milk-bottles", "orange", "cone", "sugar-cubes"]

    return(
        <section id="gallery">
            {
                galleryImages.map(item => {
                    return(
                        <div id={item} className="gallery-image"> </div>
                    )
                })
            } 
        </section>
    )
}

export default Gallery;