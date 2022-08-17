import emily from "./Assets/images/image-emily.jpg"
import jennie from "./Assets/images/image-jennie.jpg"
import thomas from "./Assets/images/image-thomas.jpg"


const featureData = [
    {
        id:"transform-img",
        container:"square"
    },

    {
        id:"transform-text",
        container:"square",
        textClass:" ",
        heading:"Tranform your brand",
        paragraph: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you",
        learnClass:"learn learn--yellow"
    }, 

    {
        id:"standout-img", 
        container:"square"
    },

    {
        id:"standout-text",
        container:"square",
        textClass:" ",
        heading:"Stand out to the right audience",
        paragraph:"Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
        learnClass:"learn learn--pink"
    },

    {
        id:"graphic-design-img",
        container:"square square--full",
        textClass:"feature-text--absolute feature-text--green",
        heading:"Graphic Design",
        paragraph:"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention"
    },

    {
        id:"photography-img",
        container:"square square--full",
        textClass:"feature-text--absolute feature-text--blue",
        heading:"Photography",
        paragraph:"Increase your credibility by getting the most stunning, high-quality photos that improve your business image"
    }

]

const testimonialData =[

    {
        name:"Emily R.",
        photo: emily,
        role: "Marketing Director",
        testimonial: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
    },

    {
        name:"Thomas S.",
        photo: thomas,
        role: "Chief Operating Officer",
        testimonial: "Sunnyside's enthusiasm couple with their keen interest in our brand's success made it satisfying and enjoyable experience."
    },

    {
        name:"Jennie F.",
        photo: jennie,
        role: "Business Owner",
        testimonial: "Excellent end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
    }


]

export {featureData, testimonialData};