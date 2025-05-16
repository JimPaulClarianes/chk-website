import Hero from "../Components/Hero"
import About from "../Components/About"
import Features from "../Components/Features"
import Classes from "../Components/Classes"
import Membership from "../Components/Membership"
import Instructors from "../Components/Instructors"
import Testimonials from "../Components/Testimonials"
import Gallery from "../Components/Gallery"
import FAQ from "../Components/FAQ"
import Contact from "../Components/Contact"
import CTA from "../Components/CTA"

const HomePage = () => {
    return (
        <main className="flex-1">
            <Hero />
            <About />
            <Features />
            <Classes />
            <Membership />
            <Instructors />
            <Testimonials />
            <Gallery />
            <FAQ />
            <Contact />
            <CTA />
        </main>
    )
}

export default HomePage
