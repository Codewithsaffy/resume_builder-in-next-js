import { Button } from '@/components/ui/button'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <Link href={"/"} >
      <Button className='rounded-lg'>
        <FontAwesomeIcon icon={faHome} className='text-white'/>
      </Button>
    </Link>
  )
}

export default Home
