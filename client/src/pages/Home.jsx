import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:9090/users");
        setUsers(result.data); 
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            axios.delete(`http://localhost:9090/user/${id}`)
                .then(() => {
                    loadUsers();
                })
                .catch((err) => {
                    console.error("There was an error deleting the user!", err);
                });
        }
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
                                        <Link to={`/uservieu/${user.id}`} className='bg-blue-600 py-2 px-4 rounded-lg mx-2 text-white hover:bg-blue-800 transition-all'>Vieu</Link>
                                        <Link to={`/edituser/${user.id}`} className='bg-green-600 py-2 px-4 rounded-lg mx-2 text-white hover:bg-green-800 transition-all'>Edit</Link>
                                        <button onClick={() => handleDelete(user.id)} className='bg-red-600 py-2 px-4 rounded-lg mx-2 text-white hover:bg-red-800 transition-all'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <div className='text-center font-bold mt-5'>
                                Nothing for Now
                            </div>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
