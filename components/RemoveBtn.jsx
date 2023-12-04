"use client"

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/app/config";


export default function RemoveBtn({ id }) {

    const router = useRouter();

    const removeTopic = async () => {
        const confirmed = confirm("Are tou sure?");

        if (confirmed) {
          const res =   await fetch(`${BASE_URL}/api/topics?id=${id}`, {
                method: "DELETE"
            });
      if(res.ok){
        router.refresh();
      } 
           
        }
    }

  return (
   <button onClick={removeTopic} className="text-red-400">
    <HiOutlineTrash size={24}/>
   </button>
  )
}
