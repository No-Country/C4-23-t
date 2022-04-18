import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GraphicSwap from '../Components/Swap/GraphicSwap'
import SwapCard from '../Components/Swap/SwapCard'
import UserLayout from '../Components/UserLayout'
import SwapCoinList from '../Components/Swap/SwapCoinList'

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

export default Swap;