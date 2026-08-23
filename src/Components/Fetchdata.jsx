import {useState, useEffect } from "react"

 function Fetchdata(){
    const[users, setUsers]=useState([])
    const[loading, setLoading]=useState(true)
    const[error, setError]=useState("")
    useEffect(()=>{
        async function getUsers(){
            try{
            const res = await fetch("https://dummyjson.com/users");
            if(!res.ok){
                throw new Error("failed to fetch users")
            }
            const data = await res.json()
            setUsers(data.users)
            
        }catch(error){
            setError(error.message)
        }finally{
            setLoading(false)
        }
        
        
        }
getUsers();
    },[])

 if (loading) {
    return (
      <p className="text-center text-lg">
        Loading users...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500">
        {error}
      </p>
    );
  }
//     return(
// <>
// <div>
//       {users.map((user) => (
//         <p key={user.id}>
//           {user.firstName} {user.lastName}
//         </p>
//       ))}


// </div>
// </>
//     )
return (
  <div>
    {users.map((user) => (
      <p key={user.id}>
        {user.firstName} {user.lastName}
      </p>
    ))}
  </div>
);
}
export default Fetchdata;