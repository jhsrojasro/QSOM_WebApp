import React from 'react';
import { Scatter, Line } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardBody, Row, Col, CardFooter, Button, Progress } from "reactstrap";
import { colores, scatter_options, line_options } from 'utils/utils';
import { useState } from 'react';
import Chart from 'chart.js/auto';
import { useHistory } from 'react-router-dom';

function DashboardSOM(props){
    const history = useHistory();
    Chart.defaults.font.size = 14;
    Chart.defaults.color = colores['gris'];
    Chart.defaults.borderColor = '#8f94923F';
    // Chart.defaults.scales.linear.min = -1;
    // Chart.defaults.scales.linear.max = 1;
    let color = "blue";
    // const [i, setI] = useState(0);
    const n = props.location.state.weights.length;
    const [state, setState] = useState({
        scatterData: {
            datasets: [ {
                label: "SOM Prototypes",
                data: props.location.state.weights[0],
                backgroundColor: colores['amarillo']
    
            }, {
                label: "Data",
                data: props.location.state.data,
                backgroundColor: colores[color]
            },
            ]
        },
        lineData: {
            labels: Array.from({ length: 0}, (value, index) => index),
            datasets: [{
                label: "distorsion",
                data: [],
                backgroundColor: colores['blue']
            }]
        },
        epoch: 0,
    });

    const handleAnimation = () => {
        for(let i = 0; i < n; i++){
            setTimeout(function(){
                setState({
                    lineData: {
                        labels: Array.from({ length: n - 1}, (value, index) => index),
                        datasets: [{
                            label: "distorsion",
                            data: props.location.state.distorsions.slice(0, i),
                            backgroundColor: colores['blue']
                        }]
                    },
                    scatterData: {
                        datasets: [ {
                            label: "SOM Prototypes",
                            data: props.location.state.weights[i],
                            backgroundColor: colores['amarillo']
                
                        }, {
                            label: "Data",
                            data: props.location.state.data,
                            backgroundColor: colores[color]
                        },
                        ]
                    },
                    epoch: i,
                });
            }, 500*i);
        } 
    }

    return (
        <div className="content">
            <Row>
                <Col md="12">
                    <Card className='text-center'>
                        <CardHeader>
                            <CardTitle tag="h2">Training Results</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col >
                                    <h3 className='text-center'>Epoch: {state.epoch}</h3>
                                    <Progress value={state.epoch} color="info"></Progress>
                                    <Scatter options={scatter_options} data={state.scatterData}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    <Line options={line_options} data={state.lineData}></Line>
                                </Col>
                            </Row>
                            {/* <Row>
                                
                            </Row> */}
                        </CardBody>
                        <CardFooter>
                            <Button onClick={handleAnimation}>See training animation</Button>
                            <Button onClick={(e) => history.push('/train_models')}>Return</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default DashboardSOM;