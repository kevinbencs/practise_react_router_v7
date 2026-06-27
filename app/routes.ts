import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("./layout/layout.tsx", [
        index("routes/home.tsx"),
        route("login", "./routes/login.tsx"),
        route("signup", "./routes/signup.tsx"),
        route("dashboard", "./layout/dashboardLayout.tsx",[
            index( "./routes/dashboard.tsx"),
        ]),
        
    ]),

] satisfies RouteConfig;
