import React, { useContext , useState } from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import { EmployeeStoreProvider } from '../Store/EmployeeStore'
import css from "../Style/TeamMember.module.css"

function TEamMembers() {

  const {employeeList,team,setTeam} = useContext(EmployeeStoreProvider)

  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];

    var teamAMembers = employeeList.filter((employee) => employee.teamName === 'TeamA');
    var teamA = { team: 'TeamA', members: teamAMembers, collapsed: team === 'TeamA' ? false : true };
    teams.push(teamA);

    var teamBMembers = employeeList.filter((employee) => employee.teamName === 'TeamB');
    var teamB = { team: 'TeamB', members: teamBMembers, collapsed: team === 'TeamB' ? false : true };
    teams.push(teamB);

    var teamCMembers = employeeList.filter((employee) => employee.teamName === 'TeamC');
    var teamC = { team: 'TeamC', members: teamCMembers, collapsed: team === 'TeamC' ? false : true };
    teams.push(teamC);

    var teamDMembers = employeeList.filter((employee) => employee.teamName === 'TeamD');
    var teamD = { team: 'TeamD', members: teamDMembers, collapsed: team === 'TeamD' ? false : true };
    teams.push(teamD);

    return teams;
  }

 const handleClick = (team)=>{
  let newGroupedData = groupedEmployees.map((groupedData) => groupedData.team === team ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);
  setGroupedData(newGroupedData);
  setTeam(team);
 }

  return (
  <>
  <Navbar/>
  <Header/>
  <section className={css.teamMember}>
 {groupedEmployees.map((item)=>{
  return (
    <div className={css.team} key={item.team}>
      <h3 onClick={()=>handleClick(item.team)}>
        Team Name : {item.team}
      </h3>

      <div className={item.collapsed === true ? css.collapsed : ""}>
{item.members.map((member)=>{
return (
  <div className={css.member} key={member.id}>
    <h5>Full Name : {member.fullName}</h5>
    <p>Designation : {member.designation}</p>
    </div>
)
})}
      </div>
    </div>
  )
 })}
  </section>
 
  </>
  )
}

export default TEamMembers
