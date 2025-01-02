import { Private, Public } from "~/pages";
export type AppRoute = {
    name: string;
    component: () => JSX.Element;
};
export const AppRoutes: AppRoute[] = [
    {
        name: 'SplashScreen',
        component: Public.SplashScreen
    },
    {
        name: 'Login',
        component: Public.Login
    },
    {
        name: 'Signup',
        component: Public.Signup
    },
    {
        name: 'Homepage',
        component: Private.Homepage
    }
]