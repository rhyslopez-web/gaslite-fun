import React from 'react'

type FirstHeadingProps = {
    children: string
}

const FirstHeading = ({children} : FirstHeadingProps) => {
  return (
    <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance'>{children}</h1>
  )
}

export default FirstHeading