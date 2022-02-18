import React,{useEffect,useState}from 'react'
import './User.css'
import{useUserAuth} from'../../UserAuthContext'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PublishIcon from '@mui/icons-material/Publish';
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase';
import { set, ref, onValue, remove, update } from "firebase/database";
import Email from '@mui/icons-material/Email';

export default function User() { 
    const {userId} = useParams();
    const [dataFilter, setdataFilter] = useState([])

    const [fullname,setFullname] = useState("")

    const [email,setEmail] = useState('')
    const [id,setId] = useState("")
    const [number,setNumber] = useState('')
    const [points,setPoints] = useState(0)
    const [password,setPassword] = useState("")

    useEffect(() => {
        onValue(ref(db, `Users/${userId}`), (snapshot) => {
            setdataFilter([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((todo) => {
                setdataFilter((oldArray) => [...oldArray, todo  ]);
            });
          }
        });
      }, []);

{ 


  return (
    <div className='user'> 
    <div className="userTitleContainer">
    <h1 className="userTitle">Edit User</h1>
    <button className="userAddButton">Create</button>
    </div>
    <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src={dataFilter[8]} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
            
                <span className="userShowUsername">{dataFilter[2]}</span>
                <span className="userShowTitle">{dataFilter[4]}</span>
            </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitleDetails">Account Details</span>
                <div className="userShowInfo">
                <EmailIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">{dataFilter[1]}</span>
                </div>
                <div className="userShowInfo">
                <PermIdentityIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">{dataFilter[5]}</span>
                </div>
                <div className="userShowInfo">
                <BorderAllIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">{dataFilter[2]}</span>
                </div>
                <div className="userShowInfo">
                <HomeIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">{dataFilter[0]}</span>
                </div>
                <div className="userShowInfo">
                <AddIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">{dataFilter[6]}</span>
                </div>
             </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Fullname</label>
                            <input type='text' 
                            placeholder='Fullname . . . '
                            value={dataFilter[2]} 
                        
                    
                            className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type='text' 
                            value={dataFilter[1]}
                            placeholder='Email . . . ' 
                            className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Type of Plastic</label>
                            <input type='text'
                             placeholder='Type of Plastic ' 
                             className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Mobile</label>
                            <input type='text' 
                            placeholder='Mobile . . . ' 
                            className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Location</label>
                            <input type='text'
                            value={dataFilter[6]}
                             placeholder='Location . . . ' 
                             className='userUpdateInput' />
                        </div>
                        
                    </div>
                    <div className="userUpdateRight">
                        {/* <div className="userUpdateUpload">
                            <img src="" className='userUpdateimg' alt=''/>
                            <label htmlFor='file'> <PublishIcon className='userUpdateIcon' alt="" /></label>
                            <input type='file' id='file' style={{display: 'none'}}/>
                        </div> */}
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </span>
        </div>
    </div>
    </div>
  )
}
}