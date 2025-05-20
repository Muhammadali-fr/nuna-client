'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import authService from '../api/services/authService'
import { setUser } from '@/lib/store/feature/userSlice'
import { useDispatch } from 'react-redux'

// assets 
import Logo from "../icons/logo.svg";
import Image from 'next/image'

export default function StoreUser() {
    const router = useRouter()
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storeuserinfo = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/auth/login');
                return
            }
            try {
                setLoading(true)
                let res = await authService.getProfile();
                console.log(res);
                dispatch(setUser(res));
            } catch (error) {
                console.log(error, "this error while storing information");
                return router.push('/auth/login');
            } finally { setLoading(false)};
        }
        storeuserinfo();

    }, [router, dispatch])

    if (loading) {
        return (
            <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-between flex-col bg-black text-white z-100 py-10'>
                <span></span>
                <Image src={Logo} width={120} height={120} alt="nuna logo" />
                <p>Nuna</p>
            </div>
        )
    }

    return null
}
