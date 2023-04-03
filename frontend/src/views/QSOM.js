import React from "react";
import { Card, CardBody, CardHeader, CardImg, CardText, CardTitle, Col, Container, Row } from "reactstrap";


function QSOM(props) {
  return (
    <div className="content">
    <Container>
        <h1 className="text-center">QSOM</h1>
        <Card>
          <CardHeader className="text-center">
            <CardImg
                alt="Card image cap"
              src="https://cdn-images-1.medium.com/max/1280/1*vtSqrNJ-mdfSSXgi8u3iVg@2x.png"
              style={{
                height: 180,
                width: 600,
              }}
              top
              width="100%"
            />
            <CardTitle tag="h3">Q-Learning + SOM = QSOM Agents</CardTitle>
          </CardHeader>
          <CardBody>
            <p>
              L'algorithme QSOM consiste à combiner l'algorithme Q-learning et l'algorithme SOM pour créer des agents capables
              d'apprendre fonctions de valeur dans un environnement continu en utilisant les représentations matricieles clasiques.
              Apres chaque interaction avec l'environnement, l'agent associe l'état de l'espace continu à la Best Match Unit d'un
              modele SOM. L'agent utilise ensuite la fonction de valeur associée à la BMU pour choisir l'action à effectuer. 
            </p>
            <br></br>
            <p>
              De cette manière, l'agent peut apprendre une fonction de valeur Q pour résoudre la tâche à partir de l'expérience.
              La figure ci-dessous montre le fonctionnement de l'algorithme QSOM par rapport au Q-learning. L'objectif de ce projet est
              de explorer l'utilisation de l'algorithme QSOM pour résoudre des tâches de contrôle continu ainsi que de comparar son performance
              avec celuie des autres alternatives résoulant le problème de l'apprentissage par renforcement en espace continu.
            </p>
            <br></br>
            <p>
              Pour ce faire, il faut concevoir des experiences pour trouver l'algorithme QSOM avec les hyperparametres les plus performantes. 
              Ensuite, il faut tester l'algorithme QSOM sur des environnements de contrôle continu et comparer ses performances avec celles 
              des autres algorithmes. Il est important de prendre en compte les resources demandées par l'algorithme QSOM pour pouvoir determiner
              sa viabilité pour des applications réelles.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <CardImg
                  alt="Card image cap"
                src="https://www.automation-ges.com/wp-content/uploads/2019/05/conception.png"
                style={{
                  height: 180,
                  width: 600
                }}
                top
                width="100%"
              />
            <CardTitle tag="h1">Conception</CardTitle>
          </CardHeader>
          <CardBody>
            <p>
              La Conception de l'algorithme QSOM pose plusieurs défis. Le premier défi est de trouver une représentation de l'espace d'états continu
              donnée para le codebook du SOM. Plusieurs questions doivent être résolues, par exemple, comment choisir la taille du codebook, comment
              et tous les autres parametres du SOM, comment créer l'ensemble d'entrainement du SOM, faudrait-il generer des données artificielles dans
              l'espace d'états ou faudrait-il utiliser l'environnement pour générer des trajectoires episodiques comptant avec que des états les plus
              fréquents.
            </p>
            <br></br>
            <p>
              Une autre question importante est de déterminer l'interaction entre l'entrainement des deux algorithmes. 
              Faudrait-il entrainer le SOM au même temps que le Q-Learning?, Faudrait-il l'entrainer en premier lieu?.
              La derniere question importante est de choisi un ou plusieurs metriques de performance pour evaluer l'algorithme, celles pouraient être
              les récompenses ésperées, les récompenses obtenus pendant un certain nombre d'épisodes de test, le temps de calcul, etc..
            </p>
            <p>
              La nature estocastique de l'initialisation du SOM et de l'entrainement du Q-Learning rendent difficile la comparaison des performances
              d'une configuration d'hyperparametres à l'autre. Pour cette raison, nous avons choisi de faire des experiences en entraînant plusieurs agents,
              ceci pose la question de choisir la moyenne ou le meilleur agent pour chaque configuration d'hyperparametres.
            </p>
            <p>
              Pour l'instant, nous avons testé la generation de données artificielles dans l'espace d'états et à partir de l'interaction avec l'environnement.
              Nous avons aussi testé l'entrainement du SOM en premier lieu. Nous avons aussi testé 4 metriques de performance: les récompenses obtenues pendant
              un certain nombre d'épisodes de test, les récompenses esperées estimées par la fonction de valeur, la moyenne des pas de temps pour atteindre l'objectif,
              et le nombre d'episodes reussis. Nous avons choisi la biliothèque OpenAI Gymnasium faire les experiences.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <CardImg
                  alt="Card image cap"
                src="https://cdn-images-1.medium.com/max/791/1*BY5NA77e54PDoBWiaKHufw.png"
                style={{
                  height: 200,
                  width: 400
                }}
                top
              />
            <CardTitle tag="h1">OpenAI Gymnasium</CardTitle>
          </CardHeader>
          <CardBody>
            <p>
            OpenAI Gymnasium est une plate-forme d'apprentissage par renforcement open-source qui permet aux utilisateurs 
            de tester et de développer des algorithmes d'apprentissage par renforcement dans un environnement simulé. 
            Elle offre une variété d'environnements de simulation, tels que des jeux vidéo classiques, des problèmes de 
            contrôle de robotique, des problèmes de planification de chemin, etc.
            </p>
            <br></br>
            <p>
              Elle est conçu pour permettre aux développeurs d'expérimenter et de tester différents algorithmes 
              d'apprentissage par renforcement et de les comparer de manière standardisée. Les utilisateurs peuvent 
              choisir parmi une variété d'environnements de simulation et de tâches d'apprentissage, et utiliser les 
              résultats pour comparer les performances de différents algorithmes.
            </p>
            <br></br>
            <p>
              Nous avons choisi l'environnement Acrobot-v1 pour faire les experiences. L'environnement Acrobot-v1 est un
              environnement de contrôle continu. Il est composé de deux liens de longueur 1, reliés par un pivot.
              Le premier lien est fixé au sol et le second est relié à un pivot. Le but de l'agent est de faire pivoter
              le deuxième lien de sorte que sa pointe soit au-dessus du premier lien. L'agent peut effectuer quatre actions:
              0: pousser le premier lien vers le bas, 1: pousser le premier lien vers le haut, 2: pousser le deuxième lien vers le bas,
              3: pousser le deuxième lien vers le haut. L'environnement est considéré comme résolu lorsque la pointe du deuxième lien
              est au-dessus du premier lien. L'environnement renvoie une récompense de 0 à chaque étape de temps, sauf lorsque
              l'environnement est résolu, auquel cas il renvoie une récompense de 1. L'environnement est résolu lorsque la pointe
              du deuxième lien est au-dessus du premier lien. L'environnement est résolu lorsque la pointe du deuxième lien est au-dessus
              du premier lien. L'environnement est résolu lorsque la pointe du deuxième lien est au-dessus du premier lien.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <CardImg
                  alt="Card image cap"
                src="https://evrest.istnf.fr/_docs/Illus/2016/2-160718021752.jpg"
                style={{
                  height: 200,
                  width: 150
                }}
                top
                width="100%"
              />
            <CardTitle tag="h1">Preliminary Results</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText>
              <p>
                Jusqu'à présent, nous avons testé l'algorithme QSOM en generant des données artificielles dans l'espace d'états et en utilisant
                l'environnement Acrobot-v1 pour entrainer le SOM d'abord puis le Q-Learning. Nous avons trouvé que l'algorithme obtient de meilleurs
                résultats en utilisant les données de l'environnement
              </p>
              <br></br>
              <p>
                Nous avons obtenu quelques resultats preliminaires pour 4 manieres differentes de generer les données d'entrainement:
                <ul>
                  <li>Données aleatoires dans l'espace d'états</li>
                  <li>Données aleatoires dans l'espace d'états normalisées</li>
                  <li>Données générées à partir de l'environnement pas de normalisation</li>
                  <li>Données générées à partir de l'environnement avec normalisation</li>
                </ul>
              </p>
              <br></br>
            </CardText>
            <Row>
              <Col>
                <CardImg src={require("assets/img/Distributed Structure Length.png")}/>
              </Col>
              <Col>
                <CardImg src={require("assets/img/Distributed Normalized Structure Length.png")}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <CardImg src={require("assets/img/Environment Structure Length.png")}/>
              </Col>
              <Col>
                <CardImg src={require("assets/img/Environment Normalized Structure Length.png")}/>
              </Col>
            </Row>
            <br></br>
            <CardText>
              <p>
                Ces expereinces faites pour déterminer la taille de la structure du SOM montrent que la normalisation des données
                n'a pas grand impact sur le temps d'entrainement, alors on a choisi de ne pas normaliser les données et de
                les générer à partir de l'environnement. On peut voir que une taille de structure entre 10 et 15 donne déjà de bons
                résultats pour le espace d'états de l'environnement Acrobot-v1.
              </p>
              <br></br>
              <p>
                Avec ce choix de la taille de la structure et en utilisant les données de l'environnement, le prochain choix est de
                déterminer le nombre d'épisodes d'entrainement, le paramètre le plus couteux en temps d'entrainement. Nous avons
                varié ce paramètre entre 500 et 5000 pour voir les resultats en terme des metriques choisies:
              </p>
              </CardText>
              <Row>
                <Col>
                  <CardImg src={require("assets/img/expected_rewards_vs_episodes.png")}/>
                </Col>
                <Col>
                  <CardImg src={require("assets/img/simulated_rewards_vs_episodes.png")}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CardImg src={require("assets/img/sucessful_episodes_vs_episodes.png")}/>
                </Col>
                <Col>
                  <CardImg src={require("assets/img/mean_steps_vs_episodes.png")}/>
                </Col>
              </Row>
              <CardText>
              <p>
                On peut voir que les graphes sont assez aléatoires pour le nombre d'épisodes d'entrainement, mais on peut remarquer
                qu'il est possible d'obtenir des resultats satisfaisants avec un nombre d'épisodes d'entrainement de 1000 à 2000.
                En vue de l'impact du nombre d'épisodes d'entrainement sur le temps d'entrainement, on a fixé ce paramètre à 1500.
              </p>
              </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <CardImg
                  alt="Card image cap"
                src="https://www.grid5000.fr/mediawiki/images/thumb/G5k-backbone.png/260px-G5k-backbone.png"
                style={{
                  height: 200,
                  width: 180
                }}
                top
                width="50%"
              />
            <CardTitle tag="h1">Future Work</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText>
              <p>
                Après avoir trouvé les paramètres plus coutieux en terme de temps, il reste à trouver les paramètres qui ont le plus
                d'impact sur les metriques choisies. Grâce à ces expériences, on a remarqué qu'un haut nombre d'épisodes d'entrainement ne 
                semble pas avoir grand impact sur les metriques choisies, par contre, on a remarqué que la nature estocastique de l'intialisation
                de la fonction Q peut avoir un impact sur les metriques choisies. Cela veut dire que il vaut mieux avoir une grande cantité d'agents
                avec une petite quantité d'épisodes d'entrainement que l'inverse. On peut donc envisager a lance des expériences avec un grand nombre
                d'agents pour trouver ceux qui donnent les meilleurs résultats.
              </p>
              <br></br>
              <p>
                Pour la suite, on a envie de lancer des expériences en parallèle en utilisant le cluster Grid5000 de l'Inria. On aimerait
                lancer des expériences avec un grand nombre d'agents pour mettre en prueve les différentes choix de conception de l'algorithme
                et faire des comparaisons entre les autres alternatives de quantification vectorielle.
              </p>
            </CardText>
          </CardBody>
        </Card>
    </Container>
    </div>
  );
}

export default QSOM;
