import React,{useState} from 'react'
import './WidgetLarge.css'
import { useUserAuth } from '../../UserAuthContext';
export default function WidgetLarge() {

  const {data} = useUserAuth()
  const [searchTerm,setSearchTerm] = useState(" ")
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Users</h3>
      <tbody>
          <input type="text" onChange={event => {setSearchTerm(event.target.value)}} placeholder='Search...' className='inputSearch'/>
    

      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh" width="200px">Fullname</th>
          <th className="widgetLgTh"  width="150px">Email</th>
          <th className="widgetLgTh"  width="150px">Date Created</th>
          <th className="widgetLgTh"  width="150px"> Mobile No.</th>
        </tr>
        </table>
{data.filter((val)=>{
if(searchTerm == " "){
  return val;
} else if (val.fullname.toLowerCase().includes(searchTerm.toLowerCase())){
  return val;
} else if (val.email.toLowerCase().includes(searchTerm.toLowerCase())){
  return val
}else if (val.number.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
  return val
}else if (val.id.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
  return val
}
}).map((item)=>{
  return(
   <table>
        <tr className="widgeLgTr">
          <td className="widgetLgUser" width='200px'>
            <img src={item.value} alt="" className="widgetLgImg"  width="200px" />
            <span className="widgetLgName">{item.fullname}</span>
          </td>
          <td className="widgetLgDate" width='200px'>{item.email}</td>
          <td className="widgetLgAmount" width='200px'>{item.date}</td>
          <td className="widgetLgAmount" width='200px'>{item.number}</td>
        </tr>
      </table>
  )

})}
      
      </tbody>
    </div>
  )
}
