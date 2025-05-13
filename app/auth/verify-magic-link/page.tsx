"use client"
import { useRouter } from "next/router"

const page = () => {
    // const URL = 'https://nuna-core-server.onrender.com/'
        const router = useRouter()
        const { token } = router.query

    return (
        <div>{0}</div>
    )
}

export default page