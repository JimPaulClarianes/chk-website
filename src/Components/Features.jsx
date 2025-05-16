import Card from "./ui/Card"

const Features = () => {
    const features = [
        {
            title: "Expert Instructors",
            description: "Our instructors are certified black belts with years of teaching and competition experience.",
        },
        {
            title: "Modern Facilities",
            description: "Train in our spacious dojang with professional-grade mats, equipment, and changing rooms.",
        },
        {
            title: "All Ages Welcome",
            description: "We offer specialized programs for children, teens, adults, and families.",
        },
        {
            title: "Competition Training",
            description:
                "Prepare for local, national, and international competitions with our specialized training programs.",
        },
        {
            title: "Belt Advancement",
            description: "Regular belt testing and advancement opportunities to track your progress.",
        },
        {
            title: "Supportive Community",
            description: "Join a welcoming community of practitioners who support each other's growth and development.",
        },
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        At Catanduanes Howling Kick, we provide a comprehensive taekwondo experience with state-of-the-art
                        facilities and expert instruction.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index}>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
