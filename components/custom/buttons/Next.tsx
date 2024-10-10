import { Button } from '@/components/ui/button'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'lucide-react'
import React from 'react'

const Next = ({link}:{link:string}) => {
  return (
    <Link href={link} className='rounded-lg'>
    <Button  className='flex items-center justify-center gap-2 rounded-lg'>
      Next
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
    </Link>
  )
}

export default Next
