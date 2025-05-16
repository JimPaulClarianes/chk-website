"use client"

import { useState } from "react"
import Card from "./ui/Card"
import { Clock } from "./Icons"

const Classes = () => {
    const [activeTab, setActiveTab] = useState("all")

    const tabs = [
        { id: "all", label: "All Classes" },
        { id: "children", label: "Children" },
        { id: "teens", label: "Teens" },
        { id: "adults", label: "Adults" },
    ]

    const allClasses = [
        {
            title: "Beginner Taekwondo",
            description: "For all ages, no experience required",
            details:
                "Learn the fundamentals of taekwondo, including basic stances, blocks, kicks, and punches. Focus on building coordination, flexibility, and strength.",
            schedule: "Mon, Wed, Fri: 5:00 PM - 6:00 PM",
            category: "all",
        },
        {
            title: "Intermediate Taekwondo",
            description: "Yellow belt and above",
            details:
                "Build on the basics with more advanced techniques, combinations, and forms (poomsae). Begin light contact sparring and breaking techniques.",
            schedule: "Tue, Thu: 6:00 PM - 7:30 PM",
            category: "all",
        },
        {
            title: "Advanced Taekwondo",
            description: "Blue belt and above",
            details:
                "Focus on complex techniques, advanced forms, and competitive sparring. Prepare for tournaments and black belt examinations.",
            schedule: "Mon, Wed, Fri: 7:30 PM - 9:00 PM",
            category: "all",
        },
        {
            title: "Family Taekwondo",
            description: "Parents and children training together",
            details:
                "A special class designed for families to train together. Build bonds while learning taekwondo in a fun, supportive environment.",
            schedule: "Saturday: 10:00 AM - 11:30 AM",
            category: "all",
        },
        {
            title: "Little Tigers (Ages 4-6)",
            description: "Introduction to martial arts",
            details:
                "A fun, engaging introduction to taekwondo basics with a focus on coordination, listening skills, and respect.",
            schedule: "Tue, Thu: 4:00 PM - 4:45 PM",
            category: "children",
        },
        {
            title: "Junior Warriors (Ages 7-12)",
            description: "Building foundations",
            details: "Develop strong taekwondo fundamentals while building confidence, discipline, and physical fitness.",
            schedule: "Mon, Wed, Fri: 4:30 PM - 5:30 PM",
            category: "children",
        },
        {
            title: "Teen Beginners (Ages 13-17)",
            description: "No experience required",
            details: "Learn taekwondo basics in a supportive environment designed specifically for teenagers.",
            schedule: "Tue, Thu: 5:00 PM - 6:00 PM",
            category: "teens",
        },
        {
            title: "Teen Competition Team",
            description: "By invitation only",
            details: "Intensive training for talented teens preparing for regional and national competitions.",
            schedule: "Mon, Wed, Fri: 6:30 PM - 8:00 PM",
            category: "teens",
        },
        {
            title: "Adult Beginners",
            description: "Ages 18+, no experience required",
            details: "A welcoming class for adults new to taekwondo, focusing on fitness, self-defense, and core techniques.",
            schedule: "Mon, Wed: 7:00 PM - 8:00 PM",
            category: "adults",
        },
        {
            title: "Fitness Taekwondo",
            description: "High-intensity workout",
            details: "Combine taekwondo techniques with cardio and strength training for an intense full-body workout.",
            schedule: "Tue, Thu: 7:30 PM - 8:30 PM",
            category: "adults",
        },
    ]

    const filteredClasses =
        activeTab === "all"
            ? allClasses.filter((c) => c.category === "all")
            : allClasses.filter((c) => c.category === activeTab)

    return (
        <section id="classes" className="py-16 bg-white">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Classes</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We offer a variety of classes to suit all ages and skill levels. Whether you're a beginner or an experienced
                        practitioner, we have a class for you.
                    </p>
                </div>
                <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`px-4 py-2 rounded-md ${activeTab === tab.id ? "bg-red-600 text-white" : "bg-gray-100 hover:bg-gray-200"
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {filteredClasses.map((classItem, index) => (
                        <Card key={index}>
                            <div className="p-6">
                                <h3 className="text-xl font-bold">{classItem.title}</h3>
                                <p className="text-gray-500 mb-4">{classItem.description}</p>
                                <p className="text-gray-600 mb-4">{classItem.details}</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <Clock className="mr-2 h-4 w-4" />
                                    <span>{classItem.schedule}</span>
                                </div>
                            </div>
                            <div className="px-6 pb-6">
                                <button className="w-full h-10 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 font-medium">
                                    Book Now
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Classes
