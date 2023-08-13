import { useScreenScroll } from "../hooks/useScreenScroll"

export const LogoIndicator = () => {
  const {scroll} = useScreenScroll()
  const opacity = 100 - (scroll * 5);

  return (
    <div className='absolute z-[-1] h-[100%] top-0 left-0 bottom-0 right-0 flex items-center justify-center '
      style={{
        transform: `translateY(${-scroll * 0.5}px)`,
        opacity:`${opacity}%`,
      }}
    >
      <svg width="313" height="150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="72" stroke="white" strokeWidth="6"/>
        <circle cx="225" cy="75" r="72" stroke="white" strokeWidth="6"/>
        <path d="M12.9043 102V59.0312H25.9902L29.6035 85.2275L33.1924 59.0312H46.4004V102H38.5391V71.043L33.6074 102H25.8926L20.668 71.043V102H12.9043ZM54.1641 102L48.8662 59.0068H57.0449L60.1943 88.2549L63.002 59.0068H71.1807L65.8828 102H54.1641ZM83.7051 102.391C80.5964 102.391 78.0898 101.422 76.1855 99.4854C74.2975 97.5485 73.3535 94.8385 73.3535 91.3555V71.5312C73.3535 67.3646 74.1755 64.1745 75.8193 61.9609C77.4795 59.7474 80.1732 58.6406 83.9004 58.6406C85.9349 58.6406 87.7415 59.015 89.3203 59.7637C90.9154 60.5124 92.1686 61.6354 93.0801 63.1328C93.9915 64.6139 94.4473 66.4857 94.4473 68.748V76.1699H85.9023V69.8223C85.9023 68.5365 85.7396 67.6738 85.4141 67.2344C85.0885 66.7786 84.584 66.5508 83.9004 66.5508C83.1029 66.5508 82.5658 66.8438 82.2891 67.4297C82.0124 67.9993 81.874 68.7643 81.874 69.7246V91.2334C81.874 92.4215 82.0449 93.2598 82.3867 93.748C82.7448 94.2363 83.2493 94.4805 83.9004 94.4805C84.6328 94.4805 85.1455 94.1794 85.4385 93.5771C85.7477 92.9749 85.9023 92.1937 85.9023 91.2334V83.4941H94.5449V91.624C94.5449 95.4001 93.5928 98.1426 91.6885 99.8516C89.7842 101.544 87.123 102.391 83.7051 102.391ZM96.2539 102L100.404 59.0312H114.979L119.057 102H110.927L110.316 95.0664H105.141L104.604 102H96.2539ZM105.751 88.2061H109.657L107.777 66.3555H107.387L105.751 88.2061ZM121.693 102V59.0312H134.877C137.074 59.0312 138.734 59.5358 139.857 60.5449C140.98 61.5378 141.729 62.9375 142.104 64.7441C142.494 66.5345 142.689 68.6423 142.689 71.0674C142.689 73.4111 142.388 75.2829 141.786 76.6826C141.2 78.0824 140.085 79.0508 138.441 79.5879C139.792 79.8646 140.736 80.54 141.273 81.6143C141.827 82.6722 142.104 84.0475 142.104 85.7402V102H133.632V85.1787C133.632 83.9255 133.371 83.1523 132.851 82.8594C132.346 82.5501 131.524 82.3955 130.385 82.3955V102H121.693ZM130.434 74.9492H132.509C133.697 74.9492 134.291 73.6553 134.291 71.0674C134.291 69.391 134.161 68.2923 133.9 67.7715C133.64 67.2507 133.152 66.9902 132.436 66.9902H130.434V74.9492ZM145.521 102V59.0312H154.066V74.3877H158.119V59.0312H166.664V102H158.119V82.5176H154.066V102H145.521ZM180.409 102.391C176.828 102.391 174.192 101.39 172.499 99.3877C170.806 97.3695 169.96 94.4072 169.96 90.501V59.0312H178.31V90.1592C178.31 90.8753 178.35 91.5671 178.432 92.2344C178.513 92.8854 178.7 93.4225 178.993 93.8457C179.286 94.2689 179.758 94.4805 180.409 94.4805C181.076 94.4805 181.557 94.277 181.85 93.8701C182.143 93.4469 182.322 92.9017 182.387 92.2344C182.468 91.5671 182.509 90.8753 182.509 90.1592V59.0312H190.858V90.501C190.858 94.4072 190.012 97.3695 188.319 99.3877C186.627 101.39 183.99 102.391 180.409 102.391ZM194.154 102V59.0312H202.992L206.947 79.6123V59.0312H215.248V102H206.85L202.553 80.5156V102H194.154ZM222.743 102V67.2832H217.641V59.0312H236.439V67.2832H231.337V102H222.743ZM238.832 102V59.0312H256.02V67.332H247.572V75.7061H255.678V83.7871H247.572V93.626H256.581V102H238.832ZM259.438 102V59.0312H272.621C274.818 59.0312 276.479 59.5358 277.602 60.5449C278.725 61.5378 279.473 62.9375 279.848 64.7441C280.238 66.5345 280.434 68.6423 280.434 71.0674C280.434 73.4111 280.132 75.2829 279.53 76.6826C278.944 78.0824 277.829 79.0508 276.186 79.5879C277.536 79.8646 278.48 80.54 279.018 81.6143C279.571 82.6722 279.848 84.0475 279.848 85.7402V102H271.376V85.1787C271.376 83.9255 271.116 83.1523 270.595 82.8594C270.09 82.5501 269.268 82.3955 268.129 82.3955V102H259.438ZM268.178 74.9492H270.253C271.441 74.9492 272.035 73.6553 272.035 71.0674C272.035 69.391 271.905 68.2923 271.645 67.7715C271.384 67.2507 270.896 66.9902 270.18 66.9902H268.178V74.9492Z" fill="#FF0000"/>
        <path d="M10.9043 102V59.0312H23.9902L27.6035 85.2275L31.1924 59.0312H44.4004V102H36.5391V71.043L31.6074 102H23.8926L18.668 71.043V102H10.9043ZM52.1641 102L46.8662 59.0068H55.0449L58.1943 88.2549L61.002 59.0068H69.1807L63.8828 102H52.1641ZM81.7051 102.391C78.5964 102.391 76.0898 101.422 74.1855 99.4854C72.2975 97.5485 71.3535 94.8385 71.3535 91.3555V71.5312C71.3535 67.3646 72.1755 64.1745 73.8193 61.9609C75.4795 59.7474 78.1732 58.6406 81.9004 58.6406C83.9349 58.6406 85.7415 59.015 87.3203 59.7637C88.9154 60.5124 90.1686 61.6354 91.0801 63.1328C91.9915 64.6139 92.4473 66.4857 92.4473 68.748V76.1699H83.9023V69.8223C83.9023 68.5365 83.7396 67.6738 83.4141 67.2344C83.0885 66.7786 82.584 66.5508 81.9004 66.5508C81.1029 66.5508 80.5658 66.8438 80.2891 67.4297C80.0124 67.9993 79.874 68.7643 79.874 69.7246V91.2334C79.874 92.4215 80.0449 93.2598 80.3867 93.748C80.7448 94.2363 81.2493 94.4805 81.9004 94.4805C82.6328 94.4805 83.1455 94.1794 83.4385 93.5771C83.7477 92.9749 83.9023 92.1937 83.9023 91.2334V83.4941H92.5449V91.624C92.5449 95.4001 91.5928 98.1426 89.6885 99.8516C87.7842 101.544 85.123 102.391 81.7051 102.391ZM94.2539 102L98.4043 59.0312H112.979L117.057 102H108.927L108.316 95.0664H103.141L102.604 102H94.2539ZM103.751 88.2061H107.657L105.777 66.3555H105.387L103.751 88.2061ZM119.693 102V59.0312H132.877C135.074 59.0312 136.734 59.5358 137.857 60.5449C138.98 61.5378 139.729 62.9375 140.104 64.7441C140.494 66.5345 140.689 68.6423 140.689 71.0674C140.689 73.4111 140.388 75.2829 139.786 76.6826C139.2 78.0824 138.085 79.0508 136.441 79.5879C137.792 79.8646 138.736 80.54 139.273 81.6143C139.827 82.6722 140.104 84.0475 140.104 85.7402V102H131.632V85.1787C131.632 83.9255 131.371 83.1523 130.851 82.8594C130.346 82.5501 129.524 82.3955 128.385 82.3955V102H119.693ZM128.434 74.9492H130.509C131.697 74.9492 132.291 73.6553 132.291 71.0674C132.291 69.391 132.161 68.2923 131.9 67.7715C131.64 67.2507 131.152 66.9902 130.436 66.9902H128.434V74.9492ZM143.521 102V59.0312H152.066V74.3877H156.119V59.0312H164.664V102H156.119V82.5176H152.066V102H143.521ZM178.409 102.391C174.828 102.391 172.192 101.39 170.499 99.3877C168.806 97.3695 167.96 94.4072 167.96 90.501V59.0312H176.31V90.1592C176.31 90.8753 176.35 91.5671 176.432 92.2344C176.513 92.8854 176.7 93.4225 176.993 93.8457C177.286 94.2689 177.758 94.4805 178.409 94.4805C179.076 94.4805 179.557 94.277 179.85 93.8701C180.143 93.4469 180.322 92.9017 180.387 92.2344C180.468 91.5671 180.509 90.8753 180.509 90.1592V59.0312H188.858V90.501C188.858 94.4072 188.012 97.3695 186.319 99.3877C184.627 101.39 181.99 102.391 178.409 102.391ZM192.154 102V59.0312H200.992L204.947 79.6123V59.0312H213.248V102H204.85L200.553 80.5156V102H192.154ZM220.743 102V67.2832H215.641V59.0312H234.439V67.2832H229.337V102H220.743ZM236.832 102V59.0312H254.02V67.332H245.572V75.7061H253.678V83.7871H245.572V93.626H254.581V102H236.832ZM257.438 102V59.0312H270.621C272.818 59.0312 274.479 59.5358 275.602 60.5449C276.725 61.5378 277.473 62.9375 277.848 64.7441C278.238 66.5345 278.434 68.6423 278.434 71.0674C278.434 73.4111 278.132 75.2829 277.53 76.6826C276.944 78.0824 275.829 79.0508 274.186 79.5879C275.536 79.8646 276.48 80.54 277.018 81.6143C277.571 82.6722 277.848 84.0475 277.848 85.7402V102H269.376V85.1787C269.376 83.9255 269.116 83.1523 268.595 82.8594C268.09 82.5501 267.268 82.3955 266.129 82.3955V102H257.438ZM266.178 74.9492H268.253C269.441 74.9492 270.035 73.6553 270.035 71.0674C270.035 69.391 269.905 68.2923 269.645 67.7715C269.384 67.2507 268.896 66.9902 268.18 66.9902H266.178V74.9492Z" fill="#00FFFF"/>
        <path d="M11.9043 102V59.0312H24.9902L28.6035 85.2275L32.1924 59.0312H45.4004V102H37.5391V71.043L32.6074 102H24.8926L19.668 71.043V102H11.9043ZM53.1641 102L47.8662 59.0068H56.0449L59.1943 88.2549L62.002 59.0068H70.1807L64.8828 102H53.1641ZM82.7051 102.391C79.5964 102.391 77.0898 101.422 75.1855 99.4854C73.2975 97.5485 72.3535 94.8385 72.3535 91.3555V71.5312C72.3535 67.3646 73.1755 64.1745 74.8193 61.9609C76.4795 59.7474 79.1732 58.6406 82.9004 58.6406C84.9349 58.6406 86.7415 59.015 88.3203 59.7637C89.9154 60.5124 91.1686 61.6354 92.0801 63.1328C92.9915 64.6139 93.4473 66.4857 93.4473 68.748V76.1699H84.9023V69.8223C84.9023 68.5365 84.7396 67.6738 84.4141 67.2344C84.0885 66.7786 83.584 66.5508 82.9004 66.5508C82.1029 66.5508 81.5658 66.8438 81.2891 67.4297C81.0124 67.9993 80.874 68.7643 80.874 69.7246V91.2334C80.874 92.4215 81.0449 93.2598 81.3867 93.748C81.7448 94.2363 82.2493 94.4805 82.9004 94.4805C83.6328 94.4805 84.1455 94.1794 84.4385 93.5771C84.7477 92.9749 84.9023 92.1937 84.9023 91.2334V83.4941H93.5449V91.624C93.5449 95.4001 92.5928 98.1426 90.6885 99.8516C88.7842 101.544 86.123 102.391 82.7051 102.391ZM95.2539 102L99.4043 59.0312H113.979L118.057 102H109.927L109.316 95.0664H104.141L103.604 102H95.2539ZM104.751 88.2061H108.657L106.777 66.3555H106.387L104.751 88.2061ZM120.693 102V59.0312H133.877C136.074 59.0312 137.734 59.5358 138.857 60.5449C139.98 61.5378 140.729 62.9375 141.104 64.7441C141.494 66.5345 141.689 68.6423 141.689 71.0674C141.689 73.4111 141.388 75.2829 140.786 76.6826C140.2 78.0824 139.085 79.0508 137.441 79.5879C138.792 79.8646 139.736 80.54 140.273 81.6143C140.827 82.6722 141.104 84.0475 141.104 85.7402V102H132.632V85.1787C132.632 83.9255 132.371 83.1523 131.851 82.8594C131.346 82.5501 130.524 82.3955 129.385 82.3955V102H120.693ZM129.434 74.9492H131.509C132.697 74.9492 133.291 73.6553 133.291 71.0674C133.291 69.391 133.161 68.2923 132.9 67.7715C132.64 67.2507 132.152 66.9902 131.436 66.9902H129.434V74.9492ZM144.521 102V59.0312H153.066V74.3877H157.119V59.0312H165.664V102H157.119V82.5176H153.066V102H144.521ZM179.409 102.391C175.828 102.391 173.192 101.39 171.499 99.3877C169.806 97.3695 168.96 94.4072 168.96 90.501V59.0312H177.31V90.1592C177.31 90.8753 177.35 91.5671 177.432 92.2344C177.513 92.8854 177.7 93.4225 177.993 93.8457C178.286 94.2689 178.758 94.4805 179.409 94.4805C180.076 94.4805 180.557 94.277 180.85 93.8701C181.143 93.4469 181.322 92.9017 181.387 92.2344C181.468 91.5671 181.509 90.8753 181.509 90.1592V59.0312H189.858V90.501C189.858 94.4072 189.012 97.3695 187.319 99.3877C185.627 101.39 182.99 102.391 179.409 102.391ZM193.154 102V59.0312H201.992L205.947 79.6123V59.0312H214.248V102H205.85L201.553 80.5156V102H193.154ZM221.743 102V67.2832H216.641V59.0312H235.439V67.2832H230.337V102H221.743ZM237.832 102V59.0312H255.02V67.332H246.572V75.7061H254.678V83.7871H246.572V93.626H255.581V102H237.832ZM258.438 102V59.0312H271.621C273.818 59.0312 275.479 59.5358 276.602 60.5449C277.725 61.5378 278.473 62.9375 278.848 64.7441C279.238 66.5345 279.434 68.6423 279.434 71.0674C279.434 73.4111 279.132 75.2829 278.53 76.6826C277.944 78.0824 276.829 79.0508 275.186 79.5879C276.536 79.8646 277.48 80.54 278.018 81.6143C278.571 82.6722 278.848 84.0475 278.848 85.7402V102H270.376V85.1787C270.376 83.9255 270.116 83.1523 269.595 82.8594C269.09 82.5501 268.268 82.3955 267.129 82.3955V102H258.438ZM267.178 74.9492H269.253C270.441 74.9492 271.035 73.6553 271.035 71.0674C271.035 69.391 270.905 68.2923 270.645 67.7715C270.384 67.2507 269.896 66.9902 269.18 66.9902H267.178V74.9492Z" fill="white"/>
      </svg>
    </div>
  )
}