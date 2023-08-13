interface MenuButtonProps {
  isOpened: boolean
  onClick: () => void
}

export const MenuButton = ({isOpened, onClick}: MenuButtonProps) => {
  const svgDifferences = {
    svg1: {
      width: 35,
      height: 15,
      viewBox: '"0 0 35 15"',
      line1: {
        x1: 5,
        y1: 14,
        x2: 30,
        y2: 14,
        stroke: "white",
        strokeWidth: 2,
      },
      line2: {
        x1: 5,
        y1: 1,
        x2: 30,
        y2: 1,
        stroke: "white",
        strokeWidth: 2,
      },
      line3: {
        x1: 0,
        y1: 7.5,
        x2: 35,
        y2: 7.5,
        stroke: "white",
        strokeWidth: 2,
      },
    },
    svg2: {
      width: 27,
      height: 27,
      viewBox: '0 0 27 27',
      line1: {
        x1: 1.29289,
        y1: 25.9706,
        x2: 18.9706,
        y2: 8.2929,
        stroke: "white",
        strokeWidth: 2,
      },
      line2: {
        x1: 8.29289,
        y1: 18.9706,
        x2: 25.9706,
        y2: 1.2929,
        stroke: "white",
        strokeWidth: 2,
      },
      line3: {
        x1: 0.832748,
        y1: 1.4185,
        x2: 25.5815,
        y2: 26.1672,
        stroke: "white",
        strokeWidth: 2,
      },
    },
  };
  
  const props = isOpened ?  svgDifferences.svg2 : svgDifferences.svg1

  return (
    <button onClick={onClick} className='md:hidden block'>
       <svg width={props.width} height={props.height} viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" 
        style={{
          transition: 'all 300ms ease-in-out',
        }}
       >
        <line x1={props.line1.x1} y1={props.line1.y1} x2={props.line1.x2} y2={props.line1.y2} stroke="white" stroke-width="2"/>
        <line x1={props.line2.x1} y1={props.line2.y1} x2={props.line2.x2} y2={props.line2.y2} stroke="white" stroke-width="2"/>
        <line x1={props.line3.x1} y1={props.line3.y1} x2={props.line3.x2} y2={props.line3.y2} stroke="white" stroke-width="2"/>
      </svg>
    </button>
  )
}