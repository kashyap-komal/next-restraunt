'use client'

import { useRouter } from "next/navigation";

export default function Notfound()
{
    const router=useRouter();
    return (
        <div>
            <h1>😕 Oops! Something Went Wrong</h1>
            <p>The page which you are looking for doesnot exist</p>
        </div>
    )
}