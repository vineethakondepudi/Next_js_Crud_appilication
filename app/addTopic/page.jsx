"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL } from "../config";


export default function Page() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

      const router = useRouter();

    const handleSubmit = async(e) => {
          e.preventDefault();

          if(!title || !description ){
alert("Title and Description are dequired.");
return;
          }
         try {
           const res =  await fetch(`${BASE_URL}/api/topics`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, description})
            });

            if(res.ok){
                router.refresh();
               router.push("/")
            } else{ 
      throw new Error("Failed to create a topic")
            }
         } catch (error) {
            console.log(error);
         }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <input
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add Topic</button>
        </form>
    )
}
