import React, { useState } from "react";
import { SignIn, WhoIAm } from '../services';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, whoAmI} from '../redux/reducers/user';
import { Redirect } from "react-router-dom";
import store from '../redux/store';
// reactstrap components
import { Input } from "reactstrap";

function Login() {
    const user = useSelector((state) => state.user);
    const [loginEmailInput, setLoginEmailInput] = useState("");
    const [loginPasswordInput, setLoginPasswordInput] = useState("");
    const dispatch = useDispatch();

    const handleLogin = async () => {
        if (!loginEmailInput || !loginPasswordInput) return;
        try{
            console.log(loginEmailInput)
            console.log(loginPasswordInput)
            dispatch(signIn(await SignIn(loginEmailInput, loginPasswordInput)));
            dispatch(whoAmI((await WhoIAm())));
            if(store.getState().user.token){
                Redirect("/home");
            }
        }catch(e){
            console.log(e)
            user.token = 'Fail'
            
            console.log("Error en el login")
        }
        
    }

  return (
    <>
    <div class="content">
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-6 mt-5 offset-md-3 pt-5 mt-5">
                <div class="card">
                    <div class="card-header text-center py-4">
                        <h4 class="title">
                            Login
                        </h4>
                    </div>
                    <form method="post" action={handleLogin}>
                        <div class="card-body px-5 py-3"> 
                            <div class="row">
                                <div class="col-md-12 px-md-1">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <Input defaultValue=""
                                            placeholder="Email"
                                            type="email"
                                            onChange={setLoginEmailInput}
                                            >                                                
                                        </Input>
                                    </div>
                                </div>
                                <div class="col-md-12 px-md-1">
                                    <div class="form-group">
                                        <label>Password</label>
                                        <Input defaultValue=""
                                            placeholder="Password"
                                            type="password"
                                            onChange={setLoginPasswordInput}>                                                
                                        </Input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <button type="submit" name="login" class="btn btn-fill btn-primary">Login</button>
                            <br /><br />
                            <p>
                                Don't have an account? <a href="/" class="text-primary">Register</a>                            
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default Login;
