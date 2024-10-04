import React, { useContext } from 'react'
import male from "../assets/maleProfile.jpg"
import female from "../assets/femaleProfile.jpg"
import css from "../Style/Employee.module.css"
import { EmployeeStoreProvider } from '../Store/EmployeeStore'

function Employee({item}) {
  const {team , selectingItem} = useContext(EmployeeStoreProvider)
  return (
  <section className={`${css.Employee} ${team === item.teamName ? css.teamName : ""}`} onClick={()=>selectingItem(item.id)}>
    <div>
      {(item.gender === "male") ? <img src={male}/> : <img src={female}/>}
    </div>
    <div className={css.text}>
      <p>Name : {item.fullName}</p>
      <p>Designation : {item.designation}</p>
    </div>
  </section>
  )
}

export default Employee
