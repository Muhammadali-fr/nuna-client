'use client'

import { useSearchParams } from 'next/navigation'

const Page = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  return (
    <div>
      <h1>Verifying Token...</h1>
      <p>Token: {token}</p>
    </div>
  )
}

export default Page
