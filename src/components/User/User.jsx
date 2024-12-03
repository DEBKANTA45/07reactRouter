import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-2xl m-4 p-4 rounded-md'>
      User: {userid}
    </div>
  )
}

export default User
