import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior })
      return
    }
    const id = hash.slice(1)
    const scrollToTarget = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    const timeout = setTimeout(scrollToTarget, 0)
    return () => clearTimeout(timeout)
  }, [pathname, hash])

  return null
}
