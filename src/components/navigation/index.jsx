import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton'

const Navigation = () => {

  const angelIncrement = 360/BtnList.length

  return (
    <div className='w-full h-screen fixed flex items-center justify-center'>
      <div className='w-max flex items-center justify-center group hover:pouse relative animate-spin-slow'>
      {
      BtnList?.map((btn , index) => {
          const angleRed = (index * angelIncrement * Math.PI)/180
          const radius = 'calc(20vw - 1rem)'
          const x = `calc(${radius} * ${Math.cos(angleRed)})`
          const y = `calc(${radius} * ${Math.sin(angleRed)})`
        return <NavButton   x={x} y={y} icon={btn?.icon} label={btn?.label} link={btn?.link} newTab={btn?.newTab} key={index}/>
       
      })
      }
    </div>
    </div>
  )
}

export default Navigation