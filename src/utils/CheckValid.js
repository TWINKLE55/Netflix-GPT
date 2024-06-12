

    export  const CheckValid=(Email,Password)=>{
        console.log(Email,Password);
        const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(Email);
        const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);
      
        if(!isEmailValid) return "Email ID is not valid";
        if(!isPasswordValid) return "Password is not valid"
        else return null;
      };
 
 