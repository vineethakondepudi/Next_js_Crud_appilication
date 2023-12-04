"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/app/config";

export default function EditTopicForm({ id, title, description }) {

    const [newTitle, setNewTilte] = useState(title);
    const [newdescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newdescription })

            });

            if (res.ok) {
                router.refresh();
                router.push("/");
                
            } else{
                throw new Errorr("Failed to update topic");
            }

           

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setNewTilte(e.target.value)}
                value={newTitle}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Title"
            />
            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newdescription}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Description"
            />
            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Topic</button>
        </form>
    )
}
