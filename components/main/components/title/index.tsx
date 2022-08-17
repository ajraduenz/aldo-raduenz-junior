import React from 'react'

type Props = {
  title:string
}

const Title = ({title}: Props) => {
  return (
    <div className='text-3xl'>{title}</div>
  )
}

export default Title