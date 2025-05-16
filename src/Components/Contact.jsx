import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "./Icons"

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                        <p className="text-gray-600 mb-8">
                            Have questions or ready to start your taekwondo journey? Get in touch with us today.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 text-red-600 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold">Location</h3>
                                    <p className="text-gray-600">123 Martial Arts Street, Virac, Catanduanes, Philippines</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="h-5 w-5 mr-3 text-red-600 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p className="text-gray-600">+63 912 345 6789</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="h-5 w-5 mr-3 text-red-600 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-gray-600">info@catanduaneshowlingkick.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Clock className="h-5 w-5 mr-3 text-red-600 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold">Hours</h3>
                                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 9:00 PM</p>
                                    <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                                    <p className="text-gray-600">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <Link to="#" className="text-gray-600 hover:text-red-600">
                                    <Facebook className="h-6 w-6" />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link to="#" className="text-gray-600 hover:text-red-600">
                                    <Instagram className="h-6 w-6" />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                                <Link to="#" className="text-gray-600 hover:text-red-600">
                                    <Twitter className="h-6 w-6" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className="space-y-4 bg-gray-50 p-6 rounded-lg">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium">
                                        First Name
                                    </label>
                                    <input
                                        id="first-name"
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium">
                                        Last Name
                                    </label>
                                    <input
                                        id="last-name"
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium">
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    placeholder="+63 912 345 6789"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="interest" className="text-sm font-medium">
                                    I'm interested in
                                </label>
                                <select
                                    id="interest"
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                >
                                    <option value="">Select an option</option>
                                    <option value="beginner">Beginner Classes</option>
                                    <option value="children">Children's Program</option>
                                    <option value="adult">Adult Classes</option>
                                    <option value="competition">Competition Training</option>
                                    <option value="private">Private Lessons</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    placeholder="Tell us about your goals or any questions you have..."
                                />
                            </div>
                            <button className="w-full h-10 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 font-medium">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
