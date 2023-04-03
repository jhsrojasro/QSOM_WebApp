import React, { useState } from "react";
import { SignUp, SignIn } from '../services';
import { useSelector, useDispatch } from 'react-redux';
import { signUp, signIn} from '../redux/reducers/user';
import { useHistory  } from "react-router-dom";
import store from '../redux/store';
import { colores } from "utils/utils";
// reactstrap components
import { Input, Button, Form, FormGroup, Col, CardFooter, Row, CardBody, CardHeader, Container, Card } from "reactstrap";

function Register() {
    const user = useSelector((state) => state.user);
    const history = useHistory();
    const [msg, setMsg] = useState("");
    const [registerEmailInput, setRegisterEmailInput] = useState("");
    const [registerPasswordInput, setRegisterPasswordInput] = useState("");
    const [registerFirstNameInput, setRegisterFirstNameInput] = useState("");
    const [registerLastNameInput, setRegisterLastNameInput] = useState("");
    const [registerInstitutionInput, setRegisterInstitutionInput] = useState("");
    const [registerCountryInput, setRegisterCountryInput] = useState("");
    const [registerCityInput, setRegisterCityInput] = useState("");
    const dispatch = useDispatch();

    const handleRegister = async () => {
        if (!registerEmailInput 
            || !registerPasswordInput
            || !registerFirstNameInput
            || !registerLastNameInput
            || !registerInstitutionInput
            || !registerCountryInput
            || !registerCityInput
            ) {
                setMsg("Please fill all the fields");
                return;
            }
        try{
            setMsg("");
            let result = await SignUp(
                registerFirstNameInput.target.value, 
                registerLastNameInput.target.value, 
                registerEmailInput.target.value,
                registerPasswordInput.target.value,
                registerInstitutionInput.target.value, 
                registerCityInput.target.value,
                registerCountryInput.target.value 
            );
            dispatch(signUp(result));
            if(store.getState().user.token === "created"){
                dispatch(signIn(await SignIn(registerEmailInput.target.value, registerPasswordInput.target.value)))
                history.push("/home");
            }
        }catch(e){
            console.log(e)
            setMsg("Error in the register")
            console.log("Error en el Registro")
        }
        
    }

  return (
    <div class="content">
    <Container>
    <Row className="row pt-5">
    <Col className="col-md-6 mt-5 offset-md-3 pt-5 mt-5">
    <Card className="text-center">

    <CardHeader className="text-center py-4">
        <h5 class="title">Register</h5>
        {/* <h6 class="card-category">
            Complete your credentials
        </h6> */}
    </CardHeader>

    <Form action="JavaScript:void(0);" onSubmit={handleRegister}>
    <CardBody className="card-body px-5 py-3" >
        <Row>
            <Col>
            <FormGroup>
                <label>First Name</label>
                <Input defaultValue=""
                    placeholder="Firstname"
                    type="text"
                    onChange={setRegisterFirstNameInput}
                    >                                                
                </Input>
            </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col>
            <FormGroup>
                <label>Last Name</label>
                <Input defaultValue=""
                    placeholder="Lastname"
                    type="text"
                    onChange={setRegisterLastNameInput}
                    >                                                
                </Input>
            </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col>
            <FormGroup>
                <label>Email</label>
                <Input defaultValue=""
                    placeholder="Email"
                    type="email"
                    onChange={setRegisterEmailInput}
                    >                                                
                </Input>
            </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col>
            <FormGroup>
                <label>Password</label>
                <Input defaultValue=""
                    placeholder="Password"
                    type="password"
                    onChange={setRegisterPasswordInput}
                    >                                                
                </Input>
            </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col>
            <FormGroup>
                <label>Institution</label>
                <Input defaultValue=""
                    placeholder="University or Company" 
                    type="text"
                    onChange={setRegisterInstitutionInput}
                    >                                                
                </Input>
            </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col>
            <FormGroup>
                <label>City</label>
                <Input defaultValue=""
                    placeholder="City or Town" 
                    type="text"
                    onChange={setRegisterCityInput}
                    >                                                
                </Input>
            </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col>
            <FormGroup>
                <label>Country</label>
                <Input defaultValue=""
                    placeholder="Country name" 
                    type="text"
                    onChange={setRegisterCountryInput}
                    >                                                
                </Input>
            </FormGroup>
            </Col>
        </Row>
    </CardBody>
        <CardFooter className="text-center">
            <Button className="btn-fill" color={colores['blue']} type="submit">Register</Button>
            <br /><br />
            <p>
                Do you have an account? <a href="/login" class="text-primary">Login</a>                            
            </p>
        </CardFooter>

    </Form>

    </Card>
    </Col>
    </Row>
    </Container>
    </div>
  );
}

export default Register;
