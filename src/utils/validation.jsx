export const HandleForm=(email,password,valid,name)=>{
    const emailCheck= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email)
     const passwordCheck=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)
    
     
if(!valid){
    
       if(!name || name.length<3)return "Name feild is mandatory"

}
     if(!emailCheck)return "Email is not valid"
     if(!passwordCheck) return "Password is not valid"

     return null

} 