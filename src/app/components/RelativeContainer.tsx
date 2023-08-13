import { ReactNode } from "react"

export const RelativeContainer = ({children}: {children: ReactNode}) => {
  return (
    <section className='relative min-h-[50vh]'>
      {children}
    </section>
  )
}