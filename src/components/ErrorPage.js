import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from './Header'
 

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
    <Header></Header>
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
         <p>{error.statusText}</p>
         <p className='text-red-500 text-3xl'>{error.status}</p>
      </div>

    </>
  )
}

export default ErrorPage
