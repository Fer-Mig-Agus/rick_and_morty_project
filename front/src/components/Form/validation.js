
// const validation =(userData,errors,setErrors)=>{
//     //username
//     if(!userData.email)
//         setErrors({...errors,email:"Por favor completa este campo"});
//     else if (userData.email.length > 35)
//         setErrors({...errors,email:"No puede seperar los 35 caracteres"});
//     else if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)){
//         setErrors({...errors,email:"Email invalido"});
//     }else{
//         setErrors({...errors,email:""});
//     }

//     if(!userData.password)
//         setErrors({...errors,password:"Por favor completa este campo"});
//     else if (userData.password.length < 6 && userData.password.length > 10)
//         setErrors({...errors,email:"Debe tener en 6 y 10 digitos"});
//     else if(!userData.password.match(/\d/))
//         setErrors({...errors,password:"Debe tener al menos un numero"});
//     else{
//         setErrors({...errors,password:""});
//     }     

// };

// export default validation;


//IMPORTANT: Funciones de verificacion por separado


const validateEmail=(form,setErrors,errors)=>{

    if(!form.email){
        setErrors({...errors,email:"Email Vacio"});
    }else{
        if(form.email.length < 35){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)){
                setErrors({...errors,email:""});
            }else{
                setErrors({...errors,email:"Email inválido"});
            }
        }else{
            setErrors({...errors,email:"Supera los 35 caracteres"});
        }
        
    }
}

const validatePass=(form,setErrors,errors)=>{
    if(!form.password){
        setErrors({...errors,password:"Password Vacio"})
    }else{
        if(form.password.length < 6 || form.password.length > 10){
            setErrors({...errors,password:"Debe tener entre 6 y 10 caracteres"})
        }else{
            if(!form.password.match(/\d/)){
                setErrors({...errors,password:"Debe tener al menos un numero"})
            }else{
                setErrors({...errors,password:""})
            }
        }
    }
}


module.exports={
    validateEmail,
    validatePass,
}























