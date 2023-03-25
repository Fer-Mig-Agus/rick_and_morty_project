import React from 'react'
import { useState,useEffect } from 'react';
import styles from "../../assets/styles/components/Form/Form.module.css";
import { validateEmail, validatePass } from './validation';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAccess } from '../../redux/actions';




const Form = () => {

    const access=useSelector(state=>state.access);
    const dispatch=useDispatch();

    //Creo el estado para el formulario
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    //Creo un formulario para los errores
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    

    const navigate = useNavigate();
    const username = 'ejemplo@gmail.com';
    const password = '1password';

    function login(userData) {

        
        if (userData.password === password && userData.email === username) {
            
            dispatch(setAccess(true));
            navigate('/home');
            //setForm({...form,email:"", password:""})
        }else{
            dispatch(setAccess(false));
            alert("Error");
        }
    }

    useEffect(() => {
        !access && navigate("/");
    }, [access]);



    //Estado para ver la contraseña
    const [pass,setPass]=useState({
        visibility:false
    })



    const statusPassword=(event)=>{
        event.preventDefault();
        if(!pass.visibility){
            event.target.innerHTML='<i class="fa-sharp fa-regular fa-eye-slash"></i>';
            setPass({visibility:true})
        }else{
            event.target.innerHTML='<i class="fa-regular fa-eye"></i>';
            setPass({visibility:false})
        }
    }


    //Esta funcion va escribiendo en tiempo real
    //los atributos del formulario en el estado

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({ ...form, [property]: value });
        // validation({...form, [property]:value},errors,setErrors);
        if (property === "email") {
            validateEmail({ ...form, [property]: value }, setErrors, errors);
        } else {
            validatePass({ ...form, [property]: value }, setErrors, errors);
        }


    }

    const submitHandler =(event)=>{
        event.preventDefault();
        login(form);
    }

    return (
        <div>
            <form  className={styles.form} onSubmit={submitHandler}>
                <div className={styles.contentEmail} >
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input
                        placeholder='Email aqui....'
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`${errors.email ? styles.error : styles.success}  ${styles.input}`}
                    />
                    <span className={styles.errorSpan}>{errors.email}</span>
                </div>
                <div className={styles.contentPassword}>
                    <label className={styles.label} htmlFor="password">Password:</label>
                    <div>
                    <input
                        placeholder='Password aqui...'
                        type="password"
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                        className={`${errors.password ? styles.error : styles.success} ${styles.input}`}
                    />
                    <button onClick={statusPassword} className={`${styles.eyes}  ${pass.visibility ? styles.visibility : styles.notVisibility}`}><i class="fa-sharp fa-regular fa-eye-slash"></i></button>
                    
                    </div>
                    <span className={styles.errorSpan}>{errors.password}</span>
                </div>
                <button className={styles.button}  type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Form
