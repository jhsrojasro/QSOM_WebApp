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

import ParcoursRecherche from "views/ParcoursRecherche";
import SOM from "views/SOM";
import RL from "views/RL";
import QLearning from "views/QLearning";
import QSOM from "views/QSOM";
import Gymnasium from "views/Gymnasium";
import TrainModels from "views/TrainModels";


var nav_routes = [
  {
    path: "/parcours_recherche",
    name: "Parcours Recherche",
    icon: "tim-icons icon-world",
    component: ParcoursRecherche
  },
  {
    path: "/som",
    name: "Self Organizing Maps",
    icon: "tim-icons icon-vector",
    component: SOM
  },
  {
    path: "/rl",
    name: "Reinforcement Learning",
    icon: "tim-icons icon-controller",
    component: RL
  },
  {
    path: "/q_learning",
    name: "Q Learning",
    icon: "tim-icons icon-molecule-40",
    component: QLearning
  },
  {
    path: "/qsom",
    name: "QSOM",
    icon: "tim-icons icon-bulb-63",
    component: QSOM
  },
  {
    path: "/gymnasium",
    name: "OpenAI Gymnasium",
    icon: "tim-icons icon-planet",
    component: Gymnasium
  },
  {
    path: "/train_models",
    name: "Train Your Own Models!",
    icon: "tim-icons icon-spaceship",
    component: TrainModels
  }
];
export default nav_routes;