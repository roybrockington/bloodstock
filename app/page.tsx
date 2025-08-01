"use client"

import guitars from "./assets/guitars.json"
import merch from "./assets/merch.json"
import { useState } from "react"
import Products from "./components/Products"


export default function Home() {

    const [tab, setTab] = useState(false)

    return (
        <div className="font-sans min-h-screen px-8">
            <aside className="w-full flex list-none gap-4 justify-center text-xl my-4">
                <li onClick={() => setTab(false)} className={`px-2 rounded-xl cursor-pointer ${!tab ? 'text-white bg-black' : ''}`}>Guitars</li>
                <li>|</li>
                <li onClick={() => setTab(true)} className={`px-2 rounded-xl cursor-pointer ${tab ? 'text-white bg-black' : ''}`}>Merch</li>
            </aside>
            <main className="flex flex-col [30px] row-start-2 items-center sm:items-start">
                <span className="mb-2 h-2 border-b-1 border-b-zinc-300 w-full"></span>
                <Products products={guitars} show={!tab} />
                <Products products={merch} show={tab} />
            </main>
        </div>
    )
}
