import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import TEamMembers from '../Pages/TEamMembers'
import EmployeeStoreContainer from '../Store/EmployeeStore'

function App() {
  return (
    <EmployeeStoreContainer>
    <Routes>

<Route path='/' element={<Home/>}/>

<Route path='/teammembers' element={<TEamMembers/>}/>

    </Routes>
    </EmployeeStoreContainer>
  )
}

export default App
