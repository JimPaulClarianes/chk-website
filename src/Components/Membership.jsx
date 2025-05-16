import Card from "./ui/Card"
import { CheckIcon, XIcon } from "./Icons"

const Membership = () => {
    const plans = [
        {
            title: "Basic",
            description: "Perfect for beginners",
            price: "₱1,500",
            period: "/month",
            features: [
                { text: "2 classes per week", included: true },
                { text: "Access to basic equipment", included: true },
                { text: "Quarterly belt testing", included: true },
                { text: "Personal training sessions", included: false },
                { text: "Competition training", included: false },
            ],
            popular: false,
        },
        {
            title: "Premium",
            description: "For dedicated practitioners",
            price: "₱2,500",
            period: "/month",
            features: [
                { text: "Unlimited classes", included: true },
                { text: "Full access to all equipment", included: true },
                { text: "Quarterly belt testing", included: true },
                { text: "2 personal training sessions/month", included: true },
                { text: "Competition training", included: false },
            ],
            popular: true,
        },
        {
            title: "Elite",
            description: "For serious athletes",
            price: "₱3,500",
            period: "/month",
            features: [
                { text: "Unlimited classes", included: true },
                { text: "Full access to all equipment", included: true },
                { text: "Priority belt testing", included: true },
                { text: "4 personal training sessions/month", included: true },
                { text: "Competition training & coaching", included: true },
            ],
            popular: false,
        },
    ]

    return (
        <section id="membership" className="py-16 bg-gray-50">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Membership Plans</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the membership plan that fits your needs and goals. All plans include access to our facilities and
                        qualified instruction.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`border-2 ${plan.popular ? "border-red-600 shadow-lg relative" : "border-gray-200"}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                                    Most Popular
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold">{plan.title}</h3>
                                <p className="text-gray-500 mb-4">{plan.description}</p>
                                <div className="text-4xl font-bold mb-4">
                                    {plan.price}
                                    <span className="text-lg font-normal text-gray-500">{plan.period}</span>
                                </div>
                                <ul className="space-y-2 mb-6">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            {feature.included ? (
                                                <CheckIcon className="h-5 w-5 mr-2 text-green-500" />
                                            ) : (
                                                <XIcon className="h-5 w-5 mr-2 text-red-500" />
                                            )}
                                            <span className={feature.included ? "" : "text-gray-500"}>{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full h-10 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 font-medium">
                                    Join Now
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">
                        Need a custom plan? We offer family discounts and special rates for long-term commitments.
                    </p>
                    <button className="h-10 px-4 py-2 bg-transparent border border-gray-300 rounded-md hover:bg-gray-100 font-medium">
                        Contact Us for Custom Plans
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Membership
