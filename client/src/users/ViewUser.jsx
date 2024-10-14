import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function VieuUser() {

    const [user, setUser] = useState({});

    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:9090/user/${id}`)
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])
    return (
        <div className='mx-36 mt-14 px-10 py-5 bg-gray-600'>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-bold leading-7 text-gray-100">User Information</h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-200">Id</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">{user.id}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-200">Name</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">{user.name}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-200">UserName</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">{user.username}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-200">Email</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">{user.email}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}
