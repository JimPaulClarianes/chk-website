import { ChevronRight } from "./Icons"

import image1 from '../image/imag1.jpg'
import image2 from '../image/image2.jpg'
import image3 from '../image/imag3.jpg'
import image4 from '../image/imag4.jpg'

const About = () => {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">About Catanduanes Howling Kick</h2>
                        <p className="text-gray-600 mb-4">
                            Founded in 2010, Catanduanes Howling Kick has been the premier taekwondo training facility in the region.
                            Our mission is to promote the physical and mental benefits of taekwondo while fostering a supportive
                            community.
                        </p>
                        <p className="text-gray-600 mb-6">
                            We offer classes for all ages and skill levels, from beginners to advanced practitioners. Our certified
                            instructors are dedicated to helping you achieve your goals, whether you're looking to improve fitness,
                            learn self-defense, or compete at the highest levels.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex items-center h-9 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 font-medium">
                                Our Philosophy
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </button>
                            <button className="flex items-center h-9 px-4 py-2 bg-transparent border border-gray-300 rounded-md hover:bg-gray-100 font-medium">
                                Our History
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={image1} alt="Taekwondo training" className="rounded-lg object-cover h-full" />
                        <img src={image2} alt="Taekwondo training" className="rounded-lg object-cover h-full mt-8" />
                        <img src={image3} alt="Taekwondo training" className="rounded-lg object-cover h-full" />
                        <img src={image4} alt="Taekwondo training" className="rounded-lg object-cover h-full mt-8" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
