import React, { ReactComponentElement, ReactNode } from 'react'

const Container = ({children} : {children: ReactNode}) => {
  return (
    <div className='w-full mx-auto px-5 lg:px-0 flex flex-col items-center'>
        {children}
    </div>
  )
}

export default Container