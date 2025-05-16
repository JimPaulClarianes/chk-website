const CTA = () => {
    return (
        <section className="py-16 bg-red-600 text-white">
            <div className="container text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
                <p className="max-w-2xl mx-auto mb-8">
                    Join Catanduanes Howling Kick today and begin your journey toward physical fitness, mental strength, and
                    martial arts mastery.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="h-10 px-6 py-2 bg-white text-red-600 rounded-md hover:bg-gray-100 font-medium">
                        Book a Free Trial
                    </button>
                    <button className="h-10 px-6 py-2 bg-transparent border border-white text-white rounded-md hover:bg-white/10 font-medium">
                        View Class Schedule
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CTA
