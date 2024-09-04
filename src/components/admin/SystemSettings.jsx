import  { useState } from 'react';
import { FaSave } from 'react-icons/fa';

const SystemSettings = () => {
    const [settings, setSettings] = useState({
        language: 'uz',
        passwordComplexity: 'medium',
        sessionDuration: 30,
    });

    const handleChange = (e) => {
        setSettings({ ...settings, [e.target.name]: e.target.value });
    };

    const saveSettings = () => {
        // Bu yerda backendga so'rov yuborish kerak
        console.log('Saqlangan sozlamalar:', settings);
    };

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Tizim sozlamalari</h1>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Umumiy sozlamalar</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Tizim tili</label>
                        <select
                            name="language"
                            value={settings.language}
                            onChange={handleChange}
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        >
                            <option value="uz">Ozbek</option>
                            <option value="ru">Русский</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Parol murakkabligi</label>
                        <select
                            name="passwordComplexity"
                            value={settings.passwordComplexity}
                            onChange={handleChange}
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        >
                            <option value="low">Past</option>
                            <option value="medium">Orta</option>
                            <option value="high">Yuqori</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Sessiya davomiyligi (daqiqa)</label>
                        <input
                            type="number"
                            name="sessionDuration"
                            value={settings.sessionDuration}
                            onChange={handleChange}
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                    </div>
                    <button onClick={saveSettings} className="mt-4 p-2 bg-blue-500 text-white rounded flex items-center hover:bg-blue-600">
                        <FaSave className="mr-2" /> Saqlash
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SystemSettings;