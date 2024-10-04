import React from 'react'
import Navbar from '../Components/Navbar'
import EmployeeList from '../Components/EmployeeList'
import Input from '../Components/Input'
import Header from '../Components/Header'


function Home() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <Input/>
     <EmployeeList/>
    </main>
  )
}

export default Home
