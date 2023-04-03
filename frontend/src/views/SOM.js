import React from "react";
import { Scatter } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Button,
  ButtonGroup,
  CardText,
  CardFooter,
  Container,
  CardImg,
} from "reactstrap";

import { 
  UniformData,
  CircleData,
  RectangleData,
  TriangleData,
  RingData,
  RhombusData,
  TrapeziumData,
  GaussianData
} from "services";
import { useState } from "react";
import classNames from "classnames";
import Chart from 'chart.js/auto';
import { colores, scatter_options } from "utils/utils";


function SOM(props) {

  Chart.defaults.font.size = 14;
  Chart.defaults.color = colores['gris'];
  Chart.defaults.borderColor = '#8f94923F';
  const distributions = ["uniform", "circle", "rectangle", "triangle", "ring", "rhombus", "trapezium", "gaussian"];
  const [distrib, setDistribution] = useState("uniform");

  const [scatterData, setScatterData] = useState({});
  
  

  const color = "blue"

  const handleData = async (distribution) => {
    try{
      let dataset;
      setDistribution(distribution);
      switch(distribution){
        case 'uniform':
          dataset = await UniformData(1000, 0.0, 1.0);
          break;
        case 'circle':
          dataset = await CircleData(1000, 1.0);
          break;
        case 'rectangle':
          dataset = await RectangleData(1000, 1.0, 2.0);
          break;
        case 'triangle':
          dataset = await TriangleData(1000, 1.0, 1.0);
          break;
        case 'ring':
          dataset = await RingData(1000, 0.5, 1.0);
          break;
        case 'rhombus':
          dataset = await RhombusData(1000, 1.0);
          break;
        case 'trapezium':
          dataset = await TrapeziumData(1000, 1.0, 0.8, 1.0);
          break;
        case 'gaussian':
          dataset = await GaussianData(1000, 0.0, 0.5);
          break;
        default:
          dataset = await UniformData(1000, 0.0, 1.0);
      }
      // console.log(uniform_dataset);
      setScatterData({
        datasets: [ {
          label: distribution+" Distribution",
          data: dataset,
          backgroundColor: colores[color]
        }]
      });
    }catch(e){
      console.log(e);
    }
  }


  return (
    <div className="content">
        <Container>
        <h1 className="text-center">Self Organizing Maps (SOM)</h1>
        <Row>
          <Col>
        <Card>
          <CardHeader className="text-center">
            <CardTitle tag="h1">Qu'est-ce que c'est SOM?</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText>
              <p>
              Les cartes auto-organisatrices, ou Self Organizing Maps (SOM) en anglais, sont une technique d'apprentissage 
              non-supervisé de réduction de dimensionnalité qui permet de projeter un espace de grande dimension sur un plan 
              en deux dimensions, tout en préservant la structure topologique des données. Cette technique a été développée 
              par le chercheur finlandais Teuvo Kohonen dans les années 1980.
              </p>
              <br></br>
              <p>
              L'algorithme SOM consiste à créer un réseau de neurones artificiels organisé en une grille de n x m neurones 
              bidimensionnelle, où chaque neurone est associé à un vecteur de poids. Initialement, les vecteurs de poids sont 
              choisis aléatoirement ou avec une initialisation spécifique, puis sont ajustés durant l'apprentissage. 
              L'apprentissage se fait en présentant les données d'entrée à la carte auto-organisatrice, qui calcule la distance 
              entre chaque vecteur de poids et chaque donnée d'entrée. Les neurones de la carte sont alors mis à jour en 
              fonction de la distance entre leur vecteur de poids et la donnée d'entrée, et les vecteurs de poids sont modifiés 
              pour se rapprocher des données d'entrée. Ainsi, les neurones de la carte se spécialisent dans la représentation 
              des données selon leur structure.
              </p>
              <br></br>
              <p>
              L'avantage de la carte auto-organisatrice est qu'elle permet de représenter les données de manière compacte tout 
              en préservant leur structure. Elle est souvent utilisée pour visualiser des données de grande dimension, ou pour 
              détecter des clusters ou des relations entre les données. Elle peut également être utilisée comme prétraitement 
              pour d'autres techniques de classification ou de clustering.
              </p>
            </CardText>
          </CardBody>
        </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
              <CardImg
                alt="Card image cap"
                src={require("assets/img/som.png")}
                style={{
                  height: 620,
                  width: 600,
                }}
                top
                width="100%"
              />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Quels sont les Paramétres des SOM?</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText>
              <p>
              Les cartes auto-organisatrices (SOM) ont plusieurs paramètres et hyperparamètres qui doivent être 
              définis pour entraîner le modèle de manière optimale. Voici les principaux paramètres et hyperparamètres :
              </p>
              <ul>
                <li>
                  La taille de la grille (Structure Length): la SOM est constituée d'une grille de neurones, et la taille de cette grille 
                  doit être déterminée en fonction de la complexité de la tâche et de la quantité de données disponibles. 
                  Une grille plus grande peut capturer des structures plus fines, mais nécessite également plus de données 
                  pour être entraînée correctement. Le nombre de neurones dans la grille doit être choisi en fonction de la 
                  dimensionnalité de l'espace d'entrée. Un nombre trop faible peut entraîner une perte d'information importante, 
                  tandis qu'un nombre trop élevé peut entraîner une sur-adaptation et une consommation de ressources inutile.
                </li>
                <li>
                  La fonction de distance (Euclidean / Manhattan) : la fonction de distance est utilisée pour mesurer la similitude entre les vecteurs 
                  d'entrée et les vecteurs de poids des neurones de la SOM. La distance euclidienne est la plus couramment 
                  utilisée, mais d'autres fonctions de distance peuvent être utilisées en fonction des caractéristiques des 
                  données.
                </li>
                <li>
                  Le taux d'apprentissage (Initial and Final Learning Rate): le taux d'apprentissage détermine la vitesse à laquelle les poids des neurones sont 
                  mis à jour pendant l'apprentissage. Un taux d'apprentissage élevé peut conduire à une instabilité et une 
                  oscillation des poids, tandis qu'un taux d'apprentissage faible peut rendre l'apprentissage trop lent.
                </li>
                <li>
                  La taille du voisinage (Initial and Final Neighbourhood Width): la taille du voisinage est utilisée pour déterminer le nombre de neurones à mettre à 
                  jour pendant l'apprentissage adaptatif. Un voisinage plus grand peut aider à capturer des structures plus 
                  globales, tandis qu'un voisinage plus petit peut aider à capturer des structures plus fines.
                </li>
                <li>Le nombre d'itérations (Epochs): le nombre d'itérations correspond au nombre de fois que les données d'entrée sont 
                  présentées à la SOM pendant l'apprentissage. Un nombre trop faible peut conduire à une sous-optimalité du modèle, 
                  tandis qu'un nombre trop élevé peut entraîner un sur-apprentissage.
                </li>
              </ul>
              <p>
              Ces paramètres et hyperparamètres doivent être choisis avec soin pour permettre à la SOM de capturer les structures sous-jacentes des données d'entrée de manière optimale.
              </p>
            </CardText>
          </CardBody>
          <CardFooter>
            <h4 > <a href="/login">Login</a> or <a href="/register">Register</a> to test some <a href="/train_models">SOM trainig!</a> </h4>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle tag="h3">Dynamic Self Organizing Maps</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText>
              <p>
              Les cartes auto-organisatrices dynamiques (DSOM) sont une classe de modèles de réseaux de neurones qui étendent les cartes auto-organisatrices 
              (SOM) traditionnelles pour traiter des données d'entrée dynamiques et changeantes. Les DSOM se distinguent par leur capacité à s'adapter aux 
              changements des données d'entrée en mettant à jour leur structure interne et leurs vecteurs de poids.
              </p>
              <br></br>
              <p>
              L'architecture de base d'une DSOM est similaire à celle d'une SOM, avec une grille de neurones disposée dans 
              une structure topologique. Chaque neurone possède un vecteur de poids associé qui représente un prototype ou 
              un centroïde d'un groupe de données d'entrée. Cependant, contrairement à une SOM, les vecteurs de poids des 
              neurones dans une DSOM sont mis à jour non seulement en fonction de la similarité entre les données d'entrée 
              et le vecteur de poids du neurone, mais aussi en fonction de leur contexte temporel. Cela permet à la DSOM de 
              capturer la structure temporelle et séquentielle des données d'entrée.
              </p>
              <br></br>
              <p>
              Le processus d'apprentissage dans une DSOM implique deux mécanismes principaux : (1) l'apprentissage compétitif 
              et (2) l'apprentissage adaptatif. L'apprentissage compétitif est utilisé pour déterminer quel neurone dans la 
              grille correspond le mieux aux données d'entrée actuelles, en fonction d'une mesure de similarité entre les 
              données d'entrée et les vecteurs de poids des neurones. L'apprentissage adaptatif est utilisé pour mettre à 
              jour les poids du neurone gagnant et de ses voisins, en fonction de leur contexte temporel et des données 
              d'entrée.
              </p>
              <br></br>
              <p>
                DSOM a un hyperparamètre supplémentaire par rapport à SOM, qui est l'elasticité (Elasticity), qui contrôle le 
                degré d'élasticité dans le processus de cartographie. Le paramètre d'élasticité est utilisé pour ajuster le 
                degré de liberté du processus de cartographie, permettant à la carte de s'adapter aux changements dans les 
                données d'entrée au fil du temps.
              </p>
              <br></br>
              <p>
              Dans DSOM, la topologie de la carte est mise à jour dynamiquement au fil du temps pour s'adapter aux changements 
              dans les données d'entrée. Le paramètre d'élasticité contrôle le degré auquel la carte peut se déformer pour 
              s'adapter à ces changements. Une valeur d'élasticité élevée permet à la carte de se déformer davantage, tandis 
              qu'une valeur d'élasticité faible contraint plus étroitement la topologie de la carte.
              </p>
              <br></br>
              <p>
              Le paramètre d'élasticité est un hyperparamètre important dans DSOM et doit être choisi avec soin en fonction des 
              caractéristiques des données d'entrée et du comportement souhaité du modèle. Une valeur d'élasticité plus élevée 
              peut aider le modèle à capturer des motifs plus complexes et dynamiques dans les données, mais elle peut également 
              rendre la carte plus sensible au bruit et aux valeurs aberrantes. Une valeur d'élasticité plus faible, en revanche, 
              peut rendre la carte plus stable et robuste, mais elle peut manquer certains des motifs subtils dans les données.
              </p>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Row>
              <Col className="text-left" sm="6">
                <CardTitle tag="h4">Datasets</CardTitle>
                <h5 className="card-category"> Quelques datasets utilisés dans le projet</h5>
              </Col>
              <Col sm="6">
                <ButtonGroup
                          className="btn-group-toggle float-right"
                          data-toggle="buttons"
                          >
                  {distributions.map((dist, index) => {
                    return <Button
                    tag="label"
                    className={classNames("btn-simple", {
                      active: distrib === dist
                    })}
                    color="info"
                    id="0"
                    size="sm"
                    onClick={() => {handleData(dist);}}
                  >
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      {dist}
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="tim-icons icon-single-02" />
                    </span>
                  </Button>
                  })}
                </ButtonGroup>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row className="row justify-content-center">
              <Col md="6">
                <Scatter options={scatter_options} data={scatterData}/> 
              </Col>
            </Row>
          </CardBody>
        </Card>
        </Container>
      </div>
  );
}

export default SOM;
