export const registerUser=async (userData)=>{
       try{
            const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`,{
                        method:"POST",
                        headers:{
                                   "Content-Type":"aplication/json"
                        },
                        body:JSON.stringify(userData)
                       })
           
                       return res.json()
       }
       catch(error:any){
          return Error(error)
       }
}