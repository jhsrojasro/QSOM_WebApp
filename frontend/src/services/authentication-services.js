import axios from 'axios'
import {BACKEND_API_URL} from './api'

export const SignUp = (form) =>  { // Registro de usuario en la plataforma.
  var formData = new FormData();
  formData.append('email', form.email);
  formData.append('firstname', form.name);
  formData.append('lastname', form.surname);
  formData.append('password', form.password);

  return axios.post(BACKEND_API_URL + '/register', formData, {});
}

export const SignIn = (form) => {  // Inicio de sesión de usuario en la plataforma.
  return axios.post(BACKEND_API_URL + '/login', form, {
    headers: {
        'Content-Type': 'application/json'
    }});
}

export const WhoIAm = (token) => { // Obtener información del usuario.
  return axios.get(BACKEND_API_URL + '/whoami', {
    headers: {
        'Authorization': 'Bearer ' + token
    }
  })
}