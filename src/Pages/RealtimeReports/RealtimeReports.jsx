import React from 'react'
import "./RealtimeReports.css"
import { useUserAuth } from '../../UserAuthContext';
import {Link} from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RealtimeReports() {
    const {data,handleDelete} = useUserAuth();
    
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
      Realtime Reports
     </div>
  
    <DataGrid
    style={{ height: '60%', width: '100%' }}
    disableSelectionOnClick
    rows={data}
    columns={columns}
    pageSize={10}
    rowsPerPageOptions={[10]}
  />  
  </div>
  
    )
}
