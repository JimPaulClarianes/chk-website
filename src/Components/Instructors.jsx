import Card from "./ui/Card"
import karl from '../image/karl.jpg'

const Instructors = () => {
    const instructors = [
        {
            img: karl,
            name: "Master Kim",
            title: "Head Instructor, 6th Dan Black Belt",
            bio: "With over 20 years of experience, Master Kim has trained champions at national and international levels.",
        },
        {
            img: karl,
            name: "Instructor Maria",
            title: "Children's Program Director, 4th Dan Black Belt",
            bio: "Specializing in teaching children, Maria brings patience, enthusiasm, and expert technique to every class.",
        },
        {
            img: karl,
            name: "Coach David",
            title: "Competition Team Coach, 5th Dan Black Belt",
            bio: "A former national champion, David now trains the next generation of competitive taekwondo athletes.",
        },
    ]

    return (
        <section id="instructors" className="py-16 bg-white">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Meet Our Instructors</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our team of certified black belt instructors brings decades of combined experience in taekwondo training and
                        competition.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {instructors.map((instructor, index) => (
                        <Card key={index} className="text-center">
                            <div className="p-6">
                                <div className="flex justify-center mb-4">
                                    <img src={instructor.img} alt={instructor.name} className="rounded-full w-32 h-32 object-cover" />
                                </div>
                                <h3 className="text-xl font-bold">{instructor.name}</h3>
                                <p className="text-gray-500 mb-4">{instructor.title}</p>
                                <p className="text-gray-600">{instructor.bio}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Instructors
