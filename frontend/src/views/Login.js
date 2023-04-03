import React, { useState } from "react";
import { SignIn, WhoIAm } from '../services';
import { useDispatch } from 'react-redux';
import { signIn, whoAmI} from '../redux/reducers/user';
import { Redirect, useHistory } from "react-router-dom";
import store from '../redux/store';
import { colores } from "utils/utils";
// reactstrap components
import { Input, Form, FormGroup, Button, Row, Col, CardFooter, Card, CardHeader, CardBody, Container } from "reactstrap";


function Login() {
    const [loginEmailInput, setLoginEmailInput] = useState("");
    const [loginPasswordInput, setLoginPasswordInput] = useState("");
    const [msg, setMsg] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleLogin = async () => {
        if (!loginEmailInput || !loginPasswordInput){
            setMsg("Enter your credentials")
            return;
        }
            
        try{
          setMsg("")

          let result = await SignIn(loginEmailInput.target.value, loginPasswordInput.target.value)
          dispatch(signIn(result)); 
          
          let result_who = await WhoIAm(store.getState().user.token)
          dispatch(whoAmI(result_who));
          console.log(store.getState().user.token !== "")
          if(store.getState().user.token !== ""){
            history.push("/home");
          }
          return;
        }catch(e){
            console.log(e)
            setMsg("Invalid credentials, please try again")
            //user.token = 'Fail'
            console.log("Error en el login")
            return;
        }
        
    }

  return (
    <>
    <div class="content">
      <Container>
      <Row className="row pt-5">
          <Col className="col-md-6 mt-5 offset-md-3 pt-5 mt-5">
            <Form action="JavaScript:void(0);" onSubmit={handleLogin}>
              <Card className="text-center">
                <CardHeader>
                  <h5 className="title">Login</h5>
                  {msg ? <p className="text-danger">{msg}</p> : null}
                </CardHeader>
                <CardBody >
                    <Row >
                      <Col >
                        <FormGroup>
                          <label>
                            Email address
                          </label>
                          <Input 
                            placeholder="mike@email.com" 
                            type="email" 
                            onChange={setLoginEmailInput}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Passwords</label>
                          <Input
                            defaultValue=""
                            placeholder="Password"
                            type="password"
                            onChange={setLoginPasswordInput}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="info" type="submit">
                    Login
                  </Button>
                  <br /><br />
                  <p>
                      You do not have an account? <a href="/register" color={colores['blue']} class="text-primary">Register</a>                            
                  </p>
                </CardFooter>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default Login;
