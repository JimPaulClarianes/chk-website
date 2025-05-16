
import HeroBg from '../image/chk-bg.jpg'

const Hero = () => {
    return (
        <section className="relative">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img src={HeroBg} alt="Taekwondo training" className="w-full h-[600px] object-cover" />
            <div className="container relative z-20 flex flex-col items-center justify-center h-[600px] text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Transform Your Body, <span className="text-red-500">Transform Your Life</span>
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8">
                    Join Catanduanes Howling Kick Taekwondo Gym and discover the ancient martial art that builds strength,
                    discipline, and confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="h-10 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 font-medium">
                        Book a Free Trial
                    </button>
                    <button className="h-10 px-4 py-2 bg-transparent text-white border border-white rounded-md hover:bg-white/10 font-medium">
                        View Class Schedule
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
