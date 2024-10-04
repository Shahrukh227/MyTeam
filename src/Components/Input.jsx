import React, { useContext } from 'react'
import css from "../Style/Input.module.css"
import { EmployeeStoreProvider } from '../Store/EmployeeStore'

function Input() {

 const {team,setTeam } = useContext(EmployeeStoreProvider)
  return (
    <section className={css.Input}>
 <select className={css.select} onChange={(e)=>setTeam(e.target.value)} value={team}>
      <option value="TeamA">TeamA</option>
      <option value="TeamB">TeamB</option>
      <option value="TeamC">TeamC</option>
      <option value="TeamD">TeamD</option>
    </select>
    </section>
   
  )
}

export default Input
