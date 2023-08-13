import { ReactNode, useEffect, useRef, useState } from "react"

export const Container = ({children} : {children: ReactNode}) => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLElement>(null)

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    const { isIntersecting} = entry;

    setIsVisible(isIntersecting)
  }

  useEffect(() => {
    const containerEl = containerRef.current;
    console.log('runEffect', containerEl)
    
    const observer = new IntersectionObserver(callbackFunction, {
      root: null,
      threshold: 0.6
    })
    if (containerEl) observer.observe(containerEl)

    return () => {
      if (containerEl) {
        observer.unobserve(containerEl)
      }
    }
  }, [containerRef])

  return (
    <section ref={containerRef} 
    className={`
      min-h-[100vh] 
      bg-black
      transition 
      duration-700 
      ease-in-out
    `}
      style={{
        opacity: isVisible ? '100%' : '0%'
      }}
    >
      {children}
    </section>
  )
}