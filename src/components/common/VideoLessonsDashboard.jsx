'use client'
import { useState } from "react"
import { ChevronDown } from 'lucide-react'
import DashboardLayout from '../../layouts/common/DashboardLayout'

export default function CourseModules() {
    const [expandedModule, setExpandedModule] = useState(null)

    const modules = [
        {
            title: "1-Modul. JavaScript asoslari",
            lessons: [
                { title: "N°1. Kirish", duration: "10:00" },
                { title: "N°2. O'zgaruvchilar", duration: "15:00" },
                { title: "N°3. Funksiyalar", duration: "20:00" },
                { title: "N°4. Mantiqiy operatorlar", duration: "12:00" },
                { title: "N°5. Tsikllar", duration: "18:00" },
            ],
            totalLessons: 5,
            duration: "7.21 soat"
        },
        {
            title: "2-Modul. JavaScript loyiha",
            lessons: [
                { title: "N°21. ClassList & Delegatsiya", duration: "17:49" },
                { title: "N°22. Amaliyot. ClassList & Delegatsiya", duration: "20:24" },
                { title: "N°23. Animatsiya va Interval", duration: "15:12" },
                { title: "N°24. Date", duration: "16:21" },
                { title: "N°25. Amaliyot. Date va Loader", duration: "23:18" },
            ],
            totalLessons: 11,
            duration: "3.23 soat"
        },
        {
            title: "3-Modul. Murakkab terminlar",
            lessons: [
                { title: "N°1. Kirish", duration: "10:00" },
                { title: "N°2. O'zgaruvchilar", duration: "15:00" },
                { title: "N°3. Funksiyalar", duration: "20:00" },
                { title: "N°4. Mantiqiy operatorlar", duration: "12:00" },
                { title: "N°5. Tsikllar", duration: "18:00" },
            ],
            totalLessons: 12,
            duration: "4.53 soat"
        },
        {
            title: "4-Modul. Paint loyihasi",
            lessons: [
                { title: "N°1. Kirish", duration: "10:00" },
                { title: "N°2. O'zgaruvchilar", duration: "15:00" },
                { title: "N°3. Funksiyalar", duration: "20:00" },
                { title: "N°4. Mantiqiy operatorlar", duration: "12:00" },
                { title: "N°5. Tsikllar", duration: "18:00" },
            ],
            totalLessons: 12,
            duration: "1.40 soat"
        },
    ]

    return (
        <DashboardLayout>
            <div className="flex bg-black text-white">
                <div className="w-1/2 mx-auto p-4 space-y-2">
                    {modules.map((module, index) => (
                        <div key={index} className="border border-zinc-800 rounded-lg">
                            <button
                                onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                                className="w-full p-4 flex items-center justify-between hover:bg-zinc-800 rounded-lg transition-colors"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-zinc-400">◇</span>
                                    <span className="font-medium">{module.title}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-400">
                                    <span>{module.totalLessons} darslik</span>
                                    <span>•</span>
                                    <span>{module.duration}</span>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${expandedModule === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </div>
                            </button>
                            {expandedModule === index && (
                                <div className="p-4 pt-0 space-y-2">
                                    {module.lessons.map((lesson, lessonIndex) => (
                                        <div
                                            key={lessonIndex}
                                            className="flex items-center justify-between p-3 rounded hover:bg-zinc-800 transition-colors"
                                        >
                                            <span className="text-sm text-zinc-300">{lesson.title}</span>
                                            <span className="text-sm text-zinc-400">{lesson.duration}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="w-1/2">
                    yangi video dars
                </div>
            </div>
        </DashboardLayout>
    )
}

