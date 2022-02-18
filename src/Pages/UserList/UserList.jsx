import React, { useState } from 'react'
import './UserList.css'
import {Link} from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { set, ref, onValue, remove, update } from "firebase/database";
import {useUserAuth} from '../../UserAuthContext';
import { db ,auth } from "../../Firebase";
export default function UserList() {
  const {data,handleDelete,setData} = useUserAuth();

  const [selectedRows,setSelectedRows] = useState([])

const handleDeleteSelectedRows =  () =>{
  setData(data.filter(row=>!selectedRows.includes(row.id)))
  selectedRows.map((item)=>{
  remove(ref(db,`Users/${item}`))
 }) 
  }

  const columns = [
    
    { field: 'id', headerName: 'Report ID No. ', width: 100 },
    { field: 'fullname', headerName: 'Full Name', width: 200 },
    { field: 'value', headerName: 'Value', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'number', headerName: 'Number', width: 200 },
    { field: 'password', headerName: 'Password', width: 200 },
    { field: 'points', headerName: 'Points', width: 100},
    {
          field: 'action',
          headerName: "Action",
          width: 100,
          renderCell:(params) =>{
            return(
              <>
              <Link to={"/user/" + params.row.id}>
                   <button className="userListEdit">Edit</button>
               </Link>  
                  {<DeleteIcon  className="userListDelete" onClick={ ()=>handleDelete(params.row.id)}/> }
                </>
            )
          }
        },    { field: 'value', headerName: 'Profile ', width: 200,renderCell:(params) =>{
          return(
            <>
              <img src={params.row.value} alt='' width='30px' height='30px'/>
            </>
          )
        } },
  ];
  return (
 <div className='userList'>
   <div className='reportTitle'>
   User details
   </div>

  <DataGrid
  style={{ height: '60%', width: '99%' }}
  disableSelectionOnClick
  rows={data}
  columns={columns}
  pageSize={10}
  rowsPerPageOptions={[5]}
  onSelectionModelChange={(rows) => setSelectedRows(rows)}
  checkboxSelection

/> 
<button onClick={handleDeleteSelectedRows}> Delete</button> 
</div>


  )
}
