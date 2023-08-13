import React, { useState, useEffect, useCallback } from "react"

export const useScreenScroll = () => {
  const [scroll, setScroll]  = useState(0);

  const listenScrollEvent = useCallback(() => {
    setScroll(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)

    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [listenScrollEvent])


  return {
    scroll
  }
}