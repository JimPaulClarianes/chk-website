import { Link } from "react-router-dom"
import { MapPin, Phone, Mail } from "./Icons"

const Footer = () => {
    return (
        <footer className="py-8 bg-gray-900 text-white">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
                            <span className="text-red-500">Catanduanes</span>
                            <span>Howling Kick</span>
                        </Link>
                        <p className="text-gray-400">Transforming lives through the art and discipline of taekwondo since 2010.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="#about" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="#classes" className="text-gray-400 hover:text-white transition-colors">
                                    Classes
                                </Link>
                            </li>
                            <li>
                                <Link to="#membership" className="text-gray-400 hover:text-white transition-colors">
                                    Membership
                                </Link>
                            </li>
                            <li>
                                <Link to="#instructors" className="text-gray-400 hover:text-white transition-colors">
                                    Instructors
                                </Link>
                            </li>
                            <li>
                                <Link to="#contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Programs</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                                    Children's Classes
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                                    Teen Programs
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                                    Adult Training
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                                    Competition Team
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                                    Private Lessons
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact</h3>
                        <address className="not-italic text-gray-400 space-y-2">
                            <p className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                123 Martial Arts Street, Virac, Catanduanes
                            </p>
                            <p className="flex items-center">
                                <Phone className="h-4 w-4 mr-2" />
                                +63 912 345 6789
                            </p>
                            <p className="flex items-center">
                                <Mail className="h-4 w-4 mr-2" />
                                info@catanduaneshowlingkick.com
                            </p>
                        </address>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Catanduanes Howling Kick. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link to="#" className="text-gray-400 hover:text-white">
                            Privacy Policy
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
