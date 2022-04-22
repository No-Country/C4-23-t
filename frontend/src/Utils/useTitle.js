import { useEffect, useState } from 'react'

export default function useTitle(title) {
  const [titl,setTitl] = useState()
  useEffect(() => {
      setTitl(title)
    })
  }