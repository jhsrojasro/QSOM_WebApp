import React from "react";
import { Card, CardBody, CardHeader, CardImg, CardText, Col, Container, Row } from "reactstrap";


function RL(props) {
  return (
    <div className="content">
      <Container>
            <Card>
              <CardHeader className="text-center">
                <h1>Apprentissage par renforcement</h1>
                <CardImg
                  alt="Card image cap"
                src={require("assets/img/rl1.png")}
                style={{
                  height: 300,
                  width: 300,
                }}
                top
                width="100%"
                />
              </CardHeader>
              <CardBody>
                <CardText>
                  <p>
                  L'apprentissage par renforcement est une méthode d'apprentissage automatique qui s'inspire du comportement animal 
                  et qui consiste à apprendre par essais et erreurs en interagissant avec un environnement. 
                  L'objectif de l'apprentissage par renforcement est de maximiser une récompense ou de minimiser une pénalité à 
                  partir des actions prises par un agent dans un environnement donné.
                  </p>
                  <br></br>
                  <p>
                  Le processus d'apprentissage par renforcement commence par un agent qui interagit avec l'environnement en effectuant des actions. 
                  À chaque étape, l'agent reçoit une récompense ou une pénalité en fonction de son action. 
                  L'objectif de l'agent est d'apprendre une politique, c'est-à-dire une fonction qui mappe chaque état de 
                  l'environnement à une action, qui maximise la récompense à long terme.
                  </p>
                  <br></br>
                  <p>
                  L'apprentissage par renforcement est souvent utilisé dans des applications telles que les jeux, la robotique, 
                  la finance, la publicité en ligne, et plus généralement dans des situations où l'agent doit prendre des décisions 
                  dans un environnement incertain.
                  </p>
                  <br></br>
                  <p>
                  L'un des avantages de l'apprentissage par renforcement est qu'il permet à l'agent d'apprendre à partir de 
                  l'expérience en interagissant avec l'environnement, sans avoir besoin d'un ensemble de données pré-annotées. 
                  Cela en fait une méthode utile pour les tâches où l'on ne dispose pas de données annotées ou lorsque les données 
                  sont difficiles à obtenir.
                  </p>
                </CardText>
              </CardBody>
            </Card>
      
      <Card>
        <CardHeader className="text-center">
          <h1>Q-Learning</h1>
          <CardImg
                  alt="Card image cap"
                src={require("assets/img/fl.gif")}
                style={{
                  height: 400,
                  width: 400
                }}
                top
                width="100%"
                />
        </CardHeader>
        <CardBody>
          <CardText>
            <p>
            L'algorithme Q-learning est un algorithme d'apprentissage par renforcement qui permet à un agent 
            d'apprendre à prendre des décisions optimales dans un environnement donné. Il a été proposé dans 
            les années 1980 par le chercheur britannique Chris Watkins.
            </p>
            <br></br>
            <p>
            L'algorithme Q-learning consiste à apprendre une fonction d'évaluation d'action appelée Q-fonction. 
            Cette fonction prend en entrée un état de l'environnement et une action et renvoie une valeur qui 
            estime la récompense à long terme que l'agent peut obtenir en choisissant cette action dans cet état.
            </p>
            <br></br>
            <p>
            L'algorithme Q-learning utilise une approche de programmation dynamique pour mettre à jour la Q-fonction. 
            À chaque étape, l'agent choisit une action en fonction de la Q-fonction actuelle et de sa politique de prise 
            de décision, puis observe la récompense et l'état suivant. En utilisant ces informations, l'algorithme met à 
            jour la Q-fonction pour refléter la récompense observée et la valeur de la Q-fonction du nouvel état. 
            Cette mise à jour se fait de manière itérative jusqu'à ce que la Q-fonction converge vers une fonction optimale 
            qui donne les meilleures actions à prendre dans chaque état.
            </p>
            </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader className="text-center">
            <h1>Problématique</h1>
        </CardHeader>
        <CardBody>
          <CardText>
            <p>
            Dans l'apprentissage par renforcement, le problème de la représentation des espaces d'états continus est un défi 
            important car il est difficile de représenter et de traiter efficacement des espaces de dimensions infinies. 
            Les méthodes d'apprentissage par renforcement traditionnelles, telles que les tables Q et les algorithmes de 
            programmation dynamique, ne peuvent pas être utilisées pour les espaces d'états continus car elles nécessitent 
            un stockage et une recherche dans des tables de valeur de Q qui sont de taille exponentielle dans l'espace de 
            l'état.
            </p>
            <br></br>
            <p>
            En outre, les espaces d'états continus peuvent être très vastes, ce qui peut entraîner des problèmes de curse de 
            la dimensionnalité. Cela signifie que le nombre de combinaisons d'états possibles augmente rapidement avec le 
            nombre de variables de l'espace d'état, ce qui rend l'apprentissage par renforcement difficile.
            </p>
            <p>
            De plus, l'exploration de l'espace des états est un autre problème important. Dans les espaces d'états continus, 
            l'exploration exhaustive de toutes les combinaisons d'états n'est pas possible car cela peut prendre une quantité 
            de temps et de ressources considérable.
            </p>
            </CardText>
        </CardBody>
      </Card>
      
      <Card>
        <CardHeader className="text-center">
          <h1>Apprentissage par renforcement en espace continu</h1>
          <CardImg
            alt="Card image cap"
            src="https://www.gymlibrary.dev/_images/acrobot.gif"
            style={{
              height: 180,
              width: 180,
            }}
            top
            width="100%"
            />
        </CardHeader>
        <CardBody>
          <CardText>
            <p>
            L'apprentissage par renforcement en espace continu est une méthode d'apprentissage automatique qui permet 
            à un agent d'apprendre à prendre des décisions optimales dans des environnements à espace d'état et d'action 
            continu. Contrairement à l'apprentissage par renforcement en espace discret, où les états et les actions sont 
            représentés par un ensemble fini de valeurs discrètes, en espace continu, les états et les actions sont 
            représentés par un ensemble infini de valeurs continues.
            </p>
            <br></br>
            <p>
            Le principal défi de l'apprentissage par renforcement en espace continu est la représentation efficace de 
            la fonction de valeur et de la politique. Les méthodes traditionnelles de représentation des fonctions de valeur, 
            telles que les tables Q, ne peuvent pas être utilisées dans des espaces continus en raison du nombre infini 
            d'états et d'actions.
            </p>
            <br></br>
            <p>
            Pour surmonter ce problème, des méthodes telles que les réseaux de neurones profonds ont été développées pour 
            approximer les fonctions de valeur en espace continu. Ces réseaux peuvent prendre en entrée un état de 
            l'environnement et renvoyer une valeur qui estime la récompense à long terme pour chaque action possible.
            </p>
            <br></br>
            </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardHeader className="text-center">
          <h1>Quantification Vectorielle</h1>
          <CardImg
            alt="Card image cap"
            src={require("assets/img/partitionement.png")}
            style={{
              height: 180,
              width: 180,
            }}
            top
            width="100%"
            />
        </CardHeader>
        <CardBody>
          <CardText>
            <p>
            La quantification vectorielle (en anglais, vector quantization) est une technique de compression de données qui 
            consiste à représenter un ensemble de données en utilisant un ensemble fini de vecteurs appelés codebooks. La 
            quantification vectorielle est utilisée dans de nombreuses applications de traitement de signal, de traitement 
            d'image, de reconnaissance de formes, de compression de données et d'apprentissage machine.
            </p>
            <br></br>
            <p>
            Le but de la quantification vectorielle est de réduire la taille des données en remplaçant des vecteurs d'entrée 
            par des vecteurs de codebook qui sont plus petits en taille mais qui peuvent encore représenter les vecteurs 
            d'entrée avec une précision suffisante. Pour ce faire, un algorithme de quantification vectorielle divise l'espace 
            des vecteurs d'entrée en régions appelées cellules de Voronoï. Chaque cellule est associée à un vecteur de codebook, 
            qui est la représentation du centre de gravité de cette cellule.
            </p>
            <p>
              Dans mon projet web je vais explorer l'utilisation de la quantification vectorielle pour représenter les espaces
              d'états continus. Pour ce faire, je vais utiliser un algorithme de quantification vectorielle appelé <a href="/som">Self-Organizing
              Map (SOM)</a>.
            </p>
          </CardText>
        </CardBody>
      </Card>
      </Container>
      </div>
  );
}

export default RL;
