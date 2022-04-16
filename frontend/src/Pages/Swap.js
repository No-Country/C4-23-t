import React from 'react'
import GraphicSwap from '../Components/Swap/GraphicSwap'
import SwapCard from '../Components/Swap/SwapCard'
import UserLayout from '../Components/UserLayout'

const Swap = () => {
  return (
    <UserLayout>
    <div className='md:flex flex-row gap-[1%]'  >
    <GraphicSwap />
    <SwapCard />
    </div>
    </UserLayout>
  )
}

export default Swap