import React, { useContext, useState } from 'react'
import css from "../Style/EmployeeList.module.css"
import Employee from "./Employee"
import { EmployeeStoreProvider } from '../Store/EmployeeStore'

function EmployeeList() {

 const {employeeList} = useContext(EmployeeStoreProvider)
  return (
    <section className={css.list}>
   {employeeList.map((item)=><Employee item={item} key={item.id}/>)}   
    </section>
  )
}

export default EmployeeList
