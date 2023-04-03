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

import SOM from "views/SOM";
import RL from "views/RL";
import QSOM from "views/QSOM";
import TrainModels from "views/TrainModels";


var nav_routes = [
  {
    path: "/rl",
    name: "Reinforcement Learning",
    icon: "tim-icons icon-controller",
    component: RL
  },
  {
    path: "/som",
    name: "Self Organizing Maps",
    icon: "tim-icons icon-vector",
    component: SOM
  },
  {
    path: "/qsom",
    name: "QSOM",
    icon: "tim-icons icon-bulb-63",
    component: QSOM
  },
  {
    path: "/train_models",
    name: "Train Your Own Models!",
    icon: "tim-icons icon-spaceship",
    component: TrainModels
  }
];
export default nav_routes;