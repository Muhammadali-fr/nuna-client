'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import magic_stick from '@/app/icons/magic-stick.png'
import Image from 'next/image'

export default function Page() {

    const router = useSearchParams()
    const token = router.get('token')
    localStorage.setItem("token", `${token}`)

    return (
        <div className='flex flex-col items-start gap-2'>
            <Image alt='magic stick img' src={magic_stick} width={116} height={116} />
            <h1 className='text-5xl'>
                Magic link sent to your email
            </h1>
            <p className='text-[#8C8998]'>we have send magic link to your email you can click it.</p>
            <Link href='https://gmail.com/' className='inline-block'>Open Gmail page</Link>
            <Link href='/' className='px-14 py-5 bg-[#0C8CE9] inline-block rounded-md text-sm'>Back to Home</Link>
        </div>
    )
}