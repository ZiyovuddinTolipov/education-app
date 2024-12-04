'use client'
import { useState } from "react"
import { Link } from "react-router-dom"

export default function CourseModules() {
    const [expandedModule, setExpandedModule] = useState(null)

    const modules = [
        {
            title: "1-Modul. JavaScript asoslari",
            lessons: [
                { id: 1, title: "N°1. Kirish", duration: "10:00" },
                { id: 2, title: "N°2. O'zgaruvchilar", duration: "15:00" },
                { id: 3, title: "N°3. Funksiyalar", duration: "20:00" },
                { id: 4, title: "N°4. Mantiqiy operatorlar", duration: "12:00" },
                { id: 5, title: "N°5. Tsikllar", duration: "18:00" },
                { id: 1, title: "N°1. Kirish", duration: "10:00" },
                { id: 2, title: "N°2. O'zgaruvchilar", duration: "15:00" },
                { id: 3, title: "N°3. Funksiyalar", duration: "20:00" },
                { id: 4, title: "N°4. Mantiqiy operatorlar", duration: "12:00" },
                { id: 5, title: "N°5. Tsikllar", duration: "18:00" },
            ],
            totalLessons: 5,
            duration: "7.21 soat"
        },
        {
            title: "2-Modul. JavaScript loyiha",
            lessons: [
                { id: 7, title: "N°21. ClassList & Delegatsiya", duration: "17:49" },
                { id: 7, title: "N°22. Amaliyot. ClassList & Delegatsiya", duration: "20:24" },
                { id: 7, title: "N°23. Animatsiya va Interval", duration: "15:12" },
                { id: 7, title: "N°24. Date", duration: "16:21" },
                { id: 7, title: "N°25. Amaliyot. Date va Loader", duration: "23:18" },
            ],
            totalLessons: 11,
            duration: "3.23 soat"
        },
        {
            title: "3-Modul. Murakkab terminlar",
            lessons: [
                { id: 7, title: "N°1. Kirish", duration: "10:00" },
                { id: 7, title: "N°2. O'zgaruvchilar", duration: "15:00" },
                { id: 7, title: "N°3. Funksiyalar", duration: "20:00" },
                { id: 7, title: "N°4. Mantiqiy operatorlar", duration: "12:00" },
                { id: 7, title: "N°5. Tsikllar", duration: "18:00" },
            ],
            totalLessons: 12,
            duration: "4.53 soat"
        },
        {
            title: "4-Modul. Paint loyihasi",
            lessons: [
                { id: 7, title: "N°1. Kirish", duration: "10:00" },
                { id: 7, title: "N°2. O'zgaruvchilar", duration: "15:00" },
                { id: 7, title: "N°3. Funksiyalar", duration: "20:00" },
                { id: 7, title: "N°4. Mantiqiy operatorlar", duration: "12:00" },
                { id: 7, title: "N°5. Tsikllar", duration: "18:00" },
            ],
            totalLessons: 12,
            duration: "1.40 soat"
        },
    ]

    return (
        <div className="border-r h-[100svh] overflow-y-auto relative">
            <div className="flex flex-col pb-2 sticky top-0 bg-white dark:bg-black z-10">
                <h3>Kurs tugatildi</h3>
                <div className="h-4 bg-gray-500 w-full">
                    <span className="h-4 w-[60%] bg-blue-600 block"></span>
                </div>
                <p>60%</p>
            </div>
            <div className="py-4">
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
                    </button>
                    {expandedModule === index && (
                        <div className="p-4 pt-0 space-y-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                                <div key={lessonIndex} className="flex items-center">
                                    <input type="checkbox" className="h-4 w-4" />
                                    <Link
                                        to={`/admin/course/${lesson.id}`}
                                        className="flex items-center w-full p-3 rounded hover:bg-zinc-800 transition-colors"
                                    >
                                        <span className="text-sm text-zinc-300">{lesson.title}</span>
                                        <span className="text-sm text-zinc-400">{lesson.duration}</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            </div>
        </div>
    )
}

