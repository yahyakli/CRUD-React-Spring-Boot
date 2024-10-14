import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:9090/users");
        setUsers(result.data); 
    };

    return (
        <div className='p-10'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map(user => (
                                <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.username}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4 flex items-center justify-center">
                                        <button className='bg-blue-600 py-2 px-4 rounded-lg mx-2 text-white hover:bg-blue-800 transition-all'>Vieu</button>
                                        <button className='bg-green-600 py-2 px-4 rounded-lg mx-2 text-white hover:bg-green-800 transition-all'>Edit</button>
                                        <button className='bg-red-600 py-2 px-4 rounded-lg mx-2 text-white hover:bg-red-800 transition-all'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <th colSpan="4" className="px-6 py-4 text-center">
                                    Nothing for Now
                                </th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
