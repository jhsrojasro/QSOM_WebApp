import axios from 'axios'
import BACKEND_API_URL from './api'

class AuthService{
    
    SignUp(form) { // Registro de usuario en la plataforma.
      var formData = new FormData();
      formData.append('email', form.email);
      formData.append('firstname', form.name);
      formData.append('lastname', form.surname);
      formData.append('password', form.password);
      formData.append('password_confirmation', form.password_confirmation);

      return axios.post(BACKEND_API_URL + '/register', formData, {});
    }

    LogIn(form){  // Inicio de sesión de usuario en la plataforma.
      return axios.post(BACKEND_API_URL + '/login', form, {
        headers: {
            'Content-Type': 'application/json'
        }});
    }
    
}
export default new AuthService();