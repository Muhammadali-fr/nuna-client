'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import authService from '../api/services/authService'
import { setUser } from '@/lib/store/feature/userSlice'
import { useDispatch } from 'react-redux'

export default function StoreUser() {
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        const storeuserinfo = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                return router.push('/auth/login');
            }
            try {
                let res = await authService.getProfile();
                dispatch(setUser(res));
            } catch (error) {
                console.log(error, "this error while storing information");
                return router.push('/auth/login');

            }
        }
        storeuserinfo();

    }, [router])

    return null // no UI
}
