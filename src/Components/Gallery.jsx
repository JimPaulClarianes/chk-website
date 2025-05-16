import image5 from '../image/image5.jpg'
import image6 from '../image/image6.jpg'
import image7 from '../image/image7.jpg'
import image8 from '../image/image8.jpg'
import image9 from '../image/image9.jpg'
import image10 from '../image/image10.jpg'
import image11 from '../image/image11.jpg'
import image12 from '../image/image12.jpg'

const Gallery = () => {
    // const images = [
    //     { img: { image5 }, alt: "Taekwondo class" },
    //     { img: { image6 }, alt: "Taekwondo competition" },
    //     { alt: "Taekwondo training" },
    //     { alt: "Taekwondo demonstration" },
    //     { alt: "Taekwondo facility" },
    //     { alt: "Taekwondo belt ceremony" },
    //     { alt: "Taekwondo kids class" },
    //     { alt: "Taekwondo adult class" },
    // ]


    return (
        <section className="py-16 bg-white">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Gallery</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Take a look at our facilities and classes in action.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <img src={image5} className="rounded-lg object-cover w-full h-full" />
                    <img src={image6} className="rounded-lg object-cover w-full h-full" />
                    <img src={image7} className="rounded-lg object-cover w-full h-full" />
                    <img src={image8} className="rounded-lg object-cover w-full h-full" />
                    <img src={image9} className="rounded-lg object-cover w-full h-full" />
                    <img src={image10} className="rounded-lg object-cover w-full h-full" />
                    <img src={image11} className="rounded-lg object-cover w-full h-full" />
                    <img src={image12} className="rounded-lg object-cover w-full h-full" />
                </div>
            </div>
        </section>
    )
}

export default Gallery
