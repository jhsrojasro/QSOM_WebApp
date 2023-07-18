import React, {useState} from "react";
import { Button, Card, CardBody, CardHeader, Row, Col, FormGroup, Input, Form, CardFooter, Spinner} from "reactstrap";
import { TrainSom } from "services/som-services";
import { useHistory } from "react-router-dom";
import store from '../redux/store';

function TrainModels(props) {
  const history = useHistory();
  
  if(!store.getState().user.token){
    alert("You need to be logged in to access this page");
    history.push("/login");
  }
  
  const [distribution, setDistribution] = useState("Uniform");
  
  //SOM variables
  const [epochs, setEpochs] = useState(100);
  const [initial_learning_rate, setInitialLearningRate] = useState(0.1);
  const [final_learning_rate, setFinalLearningRate] = useState(0.01);
  const [initial_neighborhood, setInitialNeighborhood] = useState(0.1);
  const [final_neighborhood, setFinalNeighborhood] = useState(0.01);
  const [distance, setDistance] = useState("manhattan");
  const [structure_length, setStructureLength] = useState(10);

  const [observations, setObservations] = useState(1000);
  const [loading, setLoading] = useState(false);

  //Distribution variables
  const [low, setLow] = useState(-1.0);
  const [high, setHigh] = useState(1);
  const [radix, setRadix] = useState(1);
  const [low_radix, setLowRadix] = useState(0.5);
  const [high_radix, setHighRadix] = useState(1.0);
  const [mean, setMean] = useState(0);
  const [std, setStd] = useState(1);
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(1);
  const [base, setBase] = useState(1);
  const [lower_base, setLowerBase] = useState(1);
  const [higher_base, setHigherBase] = useState(1);
  const [side, setSide] = useState(1);


  const distParams = () => {
      if(distribution === "Uniform" ) {
        return(<CardBody>
          <Col>
              <FormGroup>
                  <label>Low</label>
                  <Input type="number" step="any" name="low" onChange={(e) => setLow(e.target.value)} placeholder="-1.0" defaultValue={-1.0}/>
              </FormGroup>
          </Col>
          <Col>
              <FormGroup>
                  <label>High</label>
                  <Input type="number" step="any" name="high" onChange={(e) => setHigh(e.target.value)} placeholder="1.0" defaultValue={1.0}/>
              </FormGroup>
          </Col>
        </CardBody>)
      }
      if(distribution === "Circle"){
        return (
          <CardBody>
            <Col>
                <FormGroup>
                  <label>Radix</label>
                  <Input type="number" step="any" name="radix" onChange={(e) => setRadix(e.target.value)} defaultValue={1.0}/>
                </FormGroup>
            </Col>
          </CardBody>);
      }
      if(distribution === "Rectangle"){
        return (
        <CardBody>
          <Col>
              <FormGroup>
                <label>Width</label>
                <Input type="number" step="any" name="width" onChange={(e) => setWidth(e.target.value)} placeholder="2.0" defaultValue={2.0}/>
              </FormGroup>
          </Col>
          <Col>
              <FormGroup>
                <label>Height</label>
                <Input type="number" step="any" name="height" onChange={(e) => setHeight(e.target.value)} placeholder="1.0" defaultValue={1.0}/>
              </FormGroup>
          </Col>
        </CardBody>  );
      }
      if(distribution === "Triangle"){
        return (
          <CardBody>
            <Col>
                <FormGroup>
                  <label>Base</label>
                  <Input type="number" step="any" name="base" onChange={(e) => setBase(e.target.value)}/>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                  <label>Height</label>
                  <Input type="number" step="any" name="height" onChange={(e) => setHeight(e.target.value)}/>
                </FormGroup>
            </Col>
          </CardBody>);
      }
      if(distribution === "Ring"){
        return (
          <CardBody>
            <Col>
                <FormGroup>
                  <label>Low Radix</label>
                  <Input type="number" defaultValue={0.5} step="any" name="low_radix" onChange={(e) => setLowRadix(e.target.value)}/>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                  <label>High Radix</label>
                  <Input type="number" defaultValue={1.0} step="any" name="high_radix" onChange={(e) => setHighRadix(e.target.value)} />
                </FormGroup>
            </Col>
          </CardBody>);
      }
      if(distribution === "Rhombus"){
        return (
          <CardBody>
            <Col>
                <FormGroup>
                  <label>Side</label>
                  <Input type="number" step="any" name="side" onChange={(e) => setSide(e.target.value)}/>
                </FormGroup>
            </Col>
          </CardBody>);
      }
        
      if(distribution === "Trapezium"){
        return (
          <CardBody>
            <Col>
                <FormGroup>
                  <label>Lower Base</label>
                  <Input type="number" step="any" name="lower_base" onChange={(e) => setLowerBase(e.target.value)}/>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                  <label>Higher Base</label>
                  <Input type="number" step="any" name="higher" onChange={(e) => setHigherBase(e.target.value)}/>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                  <label>Height</label>
                  <Input type="number" step="any" name="height" onChange={(e) => setHeight(e.target.value)}/>
                </FormGroup>
            </Col>
          </CardBody>);
      }
      if(distribution === "Gaussian"){
        return (
          <CardBody>
            <Col>
                <FormGroup>
                  <label>Mean</label>
                  <Input type="number" step="any" name="mean" onChange={(e) => setMean(e.target.value)}/>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                  <label>Standard Deviation</label>
                  <Input type="number" step="any" name="std" onChange={(e) => setStd(e.target.value)}/>
                </FormGroup>
            </Col>
          </CardBody>);
      }
  }

  const handleTrain = async () => {
    let formdata = new FormData();
    formdata.append("distribution", distribution.toLowerCase());
    formdata.append("epochs", epochs);
    formdata.append("n_obs", observations);
    formdata.append("initial_learning_rate", initial_learning_rate);
    formdata.append("final_learning_rate", final_learning_rate);
    formdata.append("initial_neighbourhood_width", initial_neighborhood);
    formdata.append("final_neighbourhood_width", final_neighborhood);
    formdata.append("structure_length", structure_length);
    formdata.append("distance", distance.toLowerCase());
    // console.log("distance: ",distance);
    if(distribution === "Uniform" ) {
      formdata.append("low", low);
      formdata.append("high", high);
    }else if(distribution === "Circle"){
      formdata.append("radix", radix);
    }else if(distribution === "Rectangle"){
      formdata.append("width", width);
      formdata.append("height", height);
    }else if(distribution === "Triangle"){
      formdata.append("base", base);
      formdata.append("height", height);
    }else if(distribution === "Ring"){
      formdata.append("low_radix", low_radix);
      formdata.append("high_radix", high_radix);
    }else if(distribution === "Rhombus"){
      formdata.append("side", side);
    }else if(distribution === "Trapezium"){
      formdata.append("lower_base", lower_base);
      formdata.append("higher_base", higher_base);
      formdata.append("height", height);
    }else if(distribution === "Gaussian"){
      formdata.append("mean", mean);
      formdata.append("std", std);
    }
    // console.log("formdata: ", formdata);
    let training_results = await TrainSom(formdata);
    // console.log("training_results data: ", training_results);
    history.push({
      pathname: '/dashboard-som',
      state: { 
        data: training_results.data,
        params: Object.fromEntries(formdata.entries()),
        distorsions: training_results.distorsions,
        weights: training_results.weights, 
      }
    });
  }

  return (
    <>
      <div className="content">
        <h1 className="text-center">Test a Self Organizing Map yourself</h1>
        <Form action="JavaScript:void(0);" onSubmit={handleTrain}>
          <Card>
            <CardHeader className="text-center">
              <h3 className="title">Train your own SOM!</h3>
              <h5 className="card-category"> Try different parameters</h5>
            </CardHeader>
            <CardBody>
              {/* SOM properties */}
              <Card>
                <CardHeader>
                  <h3 className="title">Som Properties</h3>
                </CardHeader>
                <CardBody>
                <Row>
                  <Col>
                    <FormGroup>
                      <label>SOM's Structure Length</label>
                      <Input type="number" placeholder={10} defaultValue={10} min={10} max={30} onChange={(e) => setStructureLength(e.target.value)}/>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <label>Distance</label>
                      <Input type="select" onChange={(e) => setDistance(e.target.value)}>
                        <option>Manhattan</option>
                        <option>Euclidean</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                </CardBody>
              </Card>
              
              {/* Training properties */}
              <Card>
                <CardHeader>
                  <h3 className="title">Training Properties</h3>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Epochs</label>
                        <Input type="number" placeholder={50} defaultValue={50} min={10} max={500} onChange={(e) => setEpochs(e.target.value)}/>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label>Initial Learning Rate</label>
                        <Input type="number" placeholder={0.1} defaultValue={1} step="any" min={final_learning_rate} max={1} onChange={(e) => setInitialLearningRate(e.target.value)}/>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label>Final Learning Rate</label>
                        <Input type="number" placeholder={0.01} defaultValue={0.01} step="any" min={0.0} max={initial_learning_rate} onChange={(e) => setFinalLearningRate(e.target.value)}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Initial Neighbourhood Width</label>
                        <Input type="number" placeholder={5} defaultValue={10} step="any" min={final_neighborhood} onChange={(e) => setInitialNeighborhood(e.target.value)}/>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label>Final Neighbourhood Width</label>
                        <Input type="number" placeholder={1} defaultValue={0.01} step="any" min={0.0} max={initial_neighborhood} onChange={(e) => setFinalNeighborhood(e.target.value)}/>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              {/* Dataset Properties */}
              <Card>
                <CardHeader>
                  <h3 className="title">Dataset Properties</h3>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Distribution</label>
                        <Input type="select" onChange={(e) => setDistribution(e.target.value)}>
                          <option>Uniform</option>
                          <option>Circle</option>
                          <option>Rectangle</option>
                          <option>Triangle</option>
                          <option>Ring</option>
                          <option>Rhombus</option>
                          <option>Trapezium</option>
                          <option>Gaussian</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label>Number of Samples</label>
                        <Input type="number" placeholder={1000} defaultValue={1000} min={10} max={10000} onChange={(e) => setObservations(e.target.value)}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  </CardBody>
              </Card>

              {/* Dataset parameters */}
              <Card>
                <CardHeader>
                    <h3 className="title">{distribution}</h3>
                </CardHeader>
                {distParams()}
              </Card>
            </CardBody>
            <CardFooter>
              <center>
              <Button className="btn-fill" type="submit" >
                Train
              </Button>
              </center>
            </CardFooter>
          </Card>
        </Form>
      </div>
    </>
  );
}

export default TrainModels;
