import React from 'react';
import FormButton from '../FormButton';
import {useState} from 'react';
import FormLabel from '../Formlabel';
import FormTextInput from '../FormTextinput';
import FormValidationMessage from '../FormValidationMessage';
import { useHistory } from 'react-router';

const Login = () => {
    const history = useHistory();
    const initialState = {
        isSubmitting:  false,
        user_name : "",
        password : "",
    };
    const [formData, setFormData] = useState(initialState);
    const [formError, setFormError] = useState(null);

 const {user_name, password, isSubmitting} = formData;
 const onSubmit = (e) => {
     e.preventDefault();
     
    //  history.push('/HomePage');
     setFormError(null);
     setFormData({
        ...formData,
        isSubmitting: true,
    });
     setTimeout(() => {
        let error = validateForm();
         if (error) {
            setFormError(error);
            console.log('form validation failed, hence didnot submit');
            setFormData({
                ...formData,
                isSubmitting: false,
            });
            return;
         } 
          },3000);
          console.log('validation successful, submitting data to backend'); 
          localStorage.setItem('user_name', user_name);
        //   history.push('/TaskPage');
        function reload(){
            window.location.reload(false);
        }
        function fetchTask() {
            // setLoading(true);
            fetch("http://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => {
            const loggedInUser = parseInt(localStorage.getItem("user_name"));
            let newData = data.filter((data) => data.userId === loggedInUser);
            localStorage.setItem('user_tasks',JSON.stringify(newData));
            // setLoading(false);
            reload();
            })
            .catch((error) => {
            // setLoading(false);
            });
            
            }
            
            fetchTask();
            
          setTimeout(() => {
              //this is for form submission to backend,
              setFormError({
                ...formData,
                isSubmitting: false,
            });
            console.log('Got response from backend');
          }, 5000);
 };

const validateForm = () => {
    let error = false;
    if(user_name === '') {
         error = {
            field_id: 'user_name',
            message: "Username is required",
        };  
        return error;  
     }
    if(password === '') {
        console.log(password);
         error = {
            field_id: 'password',
            message: "Password is required",
        };  
        return error;  
     }
     return error;
};

 const onChange = (e) => {
     setFormData({
         ...formData,
         [e.target.name]: e.target.value,
     });    
 };

    return <div className="login">
        <form onSubmit={onSubmit}>
            <FormLabel htmlFor="user_name">  UserName </FormLabel>
            <FormTextInput id="user_name" name="user_name" onChange={onChange} value={user_name} disabled={isSubmitting} />
             {formError && formError.field_id === 'user_name' ? <FormValidationMessage>{formError.message}</FormValidationMessage> : null}

            <FormLabel htmlFor="password">  Password </FormLabel>
            <FormTextInput id="password" name="password" onChange={onChange} value={password} disabled={isSubmitting} />
            {formError && formError.field_id === 'password' ? <FormValidationMessage>{formError.message}</FormValidationMessage> : null}

            <FormButton primary disabled={isSubmitting}>Submit</FormButton>
        </form>

    </div>
}

export default Login