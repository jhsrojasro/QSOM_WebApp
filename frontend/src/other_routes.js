import Login from "views/Login.js";
import Dashboard from "views/Dashboard.js";
// import Icons from "views/Icons.js";
// import Map from "views/Map.js";
// import Notifications from "views/Notifications.js";
// import Rtl from "views/Rtl.js";
// import TableList from "views/TableList.js";
// import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Register from "views/Register.js";
import Home from "views/Home";
import DashboardSOM from "views/DashboardSOM";

var other_routes = [
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/user-profile",
        name: "User Profile",
        component: UserProfile
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/dashboard-som",
        name: "SOM Dashboard",
        component: DashboardSOM
    }
  ];
  export default other_routes;