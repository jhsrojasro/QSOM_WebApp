/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import store from '../redux/store';
import { colores } from "utils/utils";
import { UpdateUser } from "services";
import { update } from "../redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UpdatePassword } from "services";

function UserProfile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(store.getState().user.email);
  const [institution, setInstitution] = useState(store.getState().user.institution);
  const [firstname, setFirstname] = useState(store.getState().user.firstname);
  const [lastname, setLastname] = useState(store.getState().user.lastname);
  const [city, setCity] = useState(store.getState().user.city);
  const [country, setCountry] = useState(store.getState().user.country);

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState("");

  const handleUpdate = async () => {
    const response = await UpdateUser(store.getState().user.id, email, firstname, lastname, institution, city, country);
    dispatch(update(response));
    alert('User updated successfully!');
    history.push('/home');
  }

  const handleChangePassword = async () => {
    if(password === '' || newPassword === '' || confirmPassword === ''){
      setMsg("Enter your credentials")
      return;
    }
    if(newPassword !== confirmPassword){
      setMsg("Passwords do not match")
      return;
    }
    try{
      setMsg("")
      const response = await UpdatePassword(password, newPassword);
      dispatch(update(response));
      alert('Password updated successfully!');
      history.push('/home');
      return;
    }catch(e){
      console.log(e)
      setMsg("Invalid credentials, please try again")
      return;
    }
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Form action="JavaScript:void(0);" onSubmit={handleUpdate}>
              <Card>
                <CardHeader className="text-center">
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody className="content-center">
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Institution</label>
                          <Input
                            defaultValue={store.getState().user.institution}
                            placeholder="Username"
                            onChange={(e) => setInstitution(e.target.value)}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input defaultValue={store.getState().user.email} 
                            placeholder="mike@email.com" 
                            type="email" 
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={true}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue={store.getState().user.firstname}
                            placeholder="Company"
                            type="text"
                            onChange={(e) => setFirstname(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue={store.getState().user.lastname}
                            placeholder="Last Name"
                            type="text"
                            onChange={(e) => setLastname(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col >
                        <FormGroup>
                          <label>City</label>
                          <Input
                            defaultValue={store.getState().user.city}
                            placeholder="City"
                            type="text"
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col >
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue={store.getState().user.country}
                            placeholder="Country"
                            type="text"
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className="btn-fill" color={colores['blue']} type="submit">
                    Save
                  </Button>
                </CardFooter>
              </Card>
                </Form>
          </Col>
          <Col>
            <Form action="JavaScript:void(0);" onSubmit={handleChangePassword}>
              <Card className="text-center">
                <CardHeader>
                  <h5 className="title">Change Password</h5>
                  {msg ? <p className="text-danger">{msg}</p> : null}
                </CardHeader>
                <CardBody>
                    <Row> 
                      <Col>
                        <FormGroup>
                          <label>Current Password</label>
                          <Input placeholder="Current Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>New Password</label>
                          <Input placeholder="New Password" type="password" onChange={(e) => setNewPassword(e.target.value)} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Confirm Password</label>
                          <Input placeholder="Confirm Password" type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </FormGroup>
                      </Col>
                    </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className="btn-fill" color={colores['blue']} type="submit">
                    Change Password
                  </Button>
                </CardFooter>
              </Card>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
