import React, { useContext } from 'react'
import { EmployeeStoreProvider } from '../Store/EmployeeStore'

function Header() {
  const {team,employeeList} = useContext(EmployeeStoreProvider)

  const teamLength = employeeList.filter((employeTeam)=>employeTeam.teamName === team).length

  return (
    <section className='header'>
<h1>Team Management</h1>
<p>{team} consist of {teamLength} Members</p>
    </section>
  )
}

export default Header
