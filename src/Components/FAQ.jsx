import Card from "./ui/Card"

const FAQ = () => {
    const faqs = [
        {
            question: "What age can my child start taekwondo?",
            answer:
                "We accept children as young as 4 years old in our Little Tigers program, which is specially designed for young children to develop basic motor skills, focus, and discipline in a fun environment.",
        },
        {
            question: "Do I need to be fit to start taekwondo?",
            answer:
                "No, you don't need to be fit to start. Our beginner classes are designed to gradually build your fitness level. Many students start taekwondo specifically to improve their fitness and achieve great results.",
        },
        {
            question: "How often should I train?",
            answer:
                "For beginners, we recommend 2-3 classes per week. Consistent practice is key to developing skills and seeing improvement. As you advance, you may want to increase your training frequency.",
        },
        {
            question: "How long does it take to earn a black belt?",
            answer:
                "On average, it takes 3-5 years of consistent training to achieve a black belt. However, the journey is different for everyone, and we focus on individual progress rather than rushing through belt ranks.",
        },
        {
            question: "Do you offer trial classes?",
            answer:
                "Yes, we offer a free trial class for new students. This allows you to experience our teaching style and facility before making a commitment. Contact us to schedule your free trial.",
        },
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our taekwondo programs.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <Card key={index}>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
