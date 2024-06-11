import Head from "next/head"
import Header from "@/components/header"
import useAuthRedirect from "@/components/useAuthRedirect"
import Chat from "@/components/Chat"
import RoomSelector from '@/components/RoomSelector'
import { useState } from 'react'
import Layout from "@/components/Layout"

export default function DashboardPage() {
    useAuthRedirect();
    const [currentRoom, setCurrentRoom] = useState<string | null>(null);

    return (
        <div className="flex min-h-screen w-full flex-col">
        <Head>
            <title>Thread about Python -Afro.dev</title>
        </Head>
        <Header current="threads" />
        <Layout>
            <RoomSelector currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} topic="python" />
            {currentRoom && <Chat currentRoom={currentRoom} topic="python" />}
        </Layout>
        </div>
    )
}
