import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  CardImg,
  Row,
  Col,
  Container
} from "reactstrap";
import { Carousel } from "react-bootstrap";
function Home(props) {
  console.log("Props: ", props);
  return (
    <>
      <div className="content">
        <Container>
        <Card>
          <CardHeader>
          <Carousel align="center" prevLabel="" nextLabel="" indicators={false}>
            <Carousel.Item  >
                <img height="200" width="200" src={require("assets/img/loria_logo.png")} alt="Loria"></img>
            </Carousel.Item>
            <Carousel.Item>
              <img height="200" width="200"  src="https://mines-nancy.univ-lorraine.fr/wp-content/themes/mines-nancy/images/mines-nancy.svg" alt="Mines Nancy"></img>
            </Carousel.Item>
          </Carousel>
          &emsp;
        <center><h1>Bienvenu à mon site web</h1></center>
          <CardText>
            
          </CardText>
          </CardHeader>
          <CardBody>
            <CardText>
              <p>
                Cette application web est fait a fin de vulgariser mon Projet Recherche de Deuxième
                année à l’École de Mines Nancy, l’objectif du projet est d’explorer l’utilisation de techniques 
                de quantification vectorielle pour permettre l’usage de techniques d’apprentissage
                par renforcement, notamment l’algorithme Q-Learning dans des environnements comptant 
                avec un espace d’observation continu. Les techniques de quantification vectorielle
                testés sont deux techniques de réseaux neuronaux, Self Organizing Maps (SOM) ainsi
                qu’une version développé par l’équipe <a href="https://biscuit.loria.fr/">BISCUIT</a>, Dynamic Self-Organizing Map (DSOM).
                Cet étude est encadré par <a href="https://members.loria.fr/ADutech/accueil_en.html">M. Alain Dutech</a>, enseignant-chercheur du LORIA.
              </p>
              <br></br>
              <p>
                L’intérêt de cette étude est, d’une part, de doter l’algorithme Q-Learning de la capacité
                auto-organisé des modèles de cartes de Kohonen, un des objet d’étude de l’équipe
                BUISCUIT. Notamment, on envisage créer une discrétisation guidée par les données, a
                différence d’un discrétisation uniforme de l’espace d’actions, l’équipe <a href="https://biscuit.loria.fr/">BISCUIT</a> considère
                que les cartes de Kohonen permettraient une discrétisation plus fine dans les régions
                de l’espace de prototypes où en a besoin. D’autre part, DSOM étant une extension du
                SOM conçu comme un algorithme d’apprentissage incrémental (Online Machine Learning), 
                c’est-à-dire qui apprend à partir de données reçues au fur et à mesure du temps.
              </p>
              <br></br>
              <h3>Parcours Recherche</h3>
              <p>
              Le parcours Recherche est un parcours axé sur les sciences et la recherche, permettant aux élèves de 2ème année d’approfondir un champ de connaissances et de mettre en œuvre une démarche scientifique.
              <br></br>Il s’adresse aux élèves ayant un goût pour les sciences qui souhaitent découvrir le monde de la recherche. Il contribue à la richesse de l’offre pédagogique de l’école.
              </p>
              Les objectifs incluent:
              <ul>
                <li>
                  Offrir un parcours adapté aux élèves passionnés de sciences, avec une expérience concrète dans le monde de la recherche
                </li>
                <li>
                  Former des ingénieurs compétents pour établir des liens forts entre recherche académique et entreprise.
                </li>
                <li>
                  Mettre en relation des élèves avec les laboratoires partenaires de l’école et les acteurs de la recherche (ouverture aux métiers de la recherche : ingénieurs, chercheurs, etc)
                </li>
                <li>
                  Offrir une première expérience professionnelle et une ‘’culture recherche’’ (voire innovation) d’un secteur d’activité.
              </li>
              </ul>
            </CardText>
          </CardBody>
        </Card>
        </Container>
      </div>
    </>
  );
}

export default Home;
