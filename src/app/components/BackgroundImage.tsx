import { useMemo } from "react";
import { useScreenScroll } from "../hooks/useScreenScroll";
import Image from "next/image";

export const BackgroundImage = () => {
  const {scroll} = useScreenScroll()
  
  const targetActivator = Math.max(scroll, 0);
  const opacity = Math.min(targetActivator * 0.2, 100);

  return (
    <div className={`
      absolute
      h-[100%] 
      border-solid 
      border-green-400       
      bottom-0
      flex
      z-[-1]
    `} style={{
      transform: `translateY(${scroll * 0.5}px)`,
      opacity:`${opacity}%`,
    }}>
      {-targetActivator}
      <Image 
        src='/bg-bmw.png'
        alt='BMW Car'
        width={1429}
        height={818}
        style={{
          aspectRatio: '1 / 4'
        }}
      />
    </div>
  )
}