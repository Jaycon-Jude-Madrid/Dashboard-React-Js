import { createContext, useContext, useEffect, useState } from "react";
import { db ,auth } from "./Firebase";
import { confirm } from "react-confirm-box";

import { set, ref, onValue, remove, update } from "firebase/database";

const userAuthContext = createContext();
export function UserAuthContextProvider({ children }) {

const [data,setData] = useState([])





  //Read the Data
  useEffect(() => {
    onValue(ref(db, 'Users/'), (snapshot) => {
      setData([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setData((oldArray) => [...oldArray, todo  ]);
        });
      }
    });
  }, []);


  // console.log(data)

  
  

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel"
    }
  }
//Delete Data
  const handleDelete = async(id) => {
  const result = await confirm("Are you sure you want to get rid of this data ?",options);
  if(result) {
  setData(data.filter((item) => item.id !== id));
  remove(ref(db,`Users/${id}`))
  console.log(id)
  return;

 }  
  };


  return (
    <userAuthContext.Provider 
      value={{
        data,
        handleDelete,
        setData,
        

        }}
    >
      {children}
    </userAuthContext.Provider>
  );
    }


export function useUserAuth() {
    return useContext(userAuthContext);
  }