import React from 'react'
import spinner from './spinner2.gif'

const Spinner = () => {
    return (
      <div className='text-center'>
        <img style={{width:'5rem',hight:'5rem'}} src={spinner} alt="loading" />
      </div>
    )
}
export default Spinner