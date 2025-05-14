"use client"
// components
import HomeHeader from "@/app/reuseable/HomeHeader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true) // Yuklanayotgan holatni ko'rsatish uchun
  const [error, setError] = useState(null)
  const router = useRouter()
  const token = ''

  useEffect(() => {
    // 1. LocalStorage'dan tokenni olish
    const token = localStorage.getItem('token')

    // if (!token) {
    //   router.push('/auth/login') // Agar token bo'lmasa, login sahifasiga yo'naltiramiz
    //   return
    // }

    // 2. Tokenni serverga yuborish
    const verifyToken = async () => {
      try {
        const response = await fetch(
          `https://nuna-core-server.onrender.com/auth/verify-magic-link/?token=${token}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const data = await response.json()

        if (data.success) {
          setIsLoading(false) // Token tekshirilganidan keyin, loadingni to'xtatamiz
        } else {
          // Agar token mos kelmasa, login sahifasiga yo'naltiramiz
          router.push('/auth/login')
        }
      } catch (err) {
        console.error(err)
        router.push('/auth/login')
      }
    }

    verifyToken()
  }, [router])

  if (isLoading) {
    return <div>Loading...</div> // Loading holati
  }

  if (error) {
    return <div>{error}</div> // Agar xato yuzaga kelsa, xato haqida xabar ko'rsatiladi
  }
  return (
    <div>
      {token ? (
        <p>Token: {token}</p>
      ) : (
        <p>Token topilmadi (yo'q yoki hali saqlanmagan)</p>
      )}
      <HomeHeader
        first="Posts"
        second="Users"
        third="Communities"
        firstLink="/"
        secondLink="/users"
        thirdLink="/communities"
      />
      {children}
    </div>
  );
}
