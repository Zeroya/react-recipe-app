import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import React, { Suspense } from 'react'
import Dessert from "../components/Desserts";


function Home() {
  return (
     <div>
    <Veggie />
    <Popular />
    <Dessert />
    </div>
  )
}

export default Home