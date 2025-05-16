import Card from "./ui/Card"
import { StarIcon } from "./Icons"
import person1 from '../image/person1.jpg'
import person2 from '../image/person2.jpeg'
import person3 from '../image/person3.jpeg'

const Testimonials = () => {
    const testimonials = [
        {
            img: person1,
            quote:
                "My son has been training here for two years, and the transformation in his confidence and discipline is remarkable. The instructors are patient, skilled, and truly care about each student's progress.",
            name: "Maria Santos",
            title: "Parent of Junior Student",
        },
        {
            img: person2,
            quote:
                "I started taekwondo at 40 to get in shape, and it's been the best decision. The adult classes are challenging but accessible, and I've lost weight while gaining strength and flexibility.",
            name: "John Reyes",
            title: "Adult Student",
        },
        {
            img: person3,
            quote:
                "The competition team coaching is world-class. Since joining, I've won two regional championships and qualified for nationals. The training is intense but the results speak for themselves.",
            name: "Lisa Cruz",
            title: "Competition Team Member",
        },
    ]

    return (
        <section id="testimonials" className="py-16 bg-gray-50">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Hear from our students about how Catanduanes Howling Kick has transformed
                        their lives.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index}>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <img src={testimonial.img} alt={testimonial.name} className="rounded-full w-10 h-10 mr-3" />
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
