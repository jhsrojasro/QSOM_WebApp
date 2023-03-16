import Login from "views/Login.js";
// import Dashboard from "views/Dashboard.js";
// import Icons from "views/Icons.js";
// import Map from "views/Map.js";
// import Notifications from "views/Notifications.js";
// import Rtl from "views/Rtl.js";
// import TableList from "views/TableList.js";
// import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Home from "views/Home";

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
    }
  ];
  export default other_routes;