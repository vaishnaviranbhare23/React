import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import app from "./data/base";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import App from "./App";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { routes } from "./route/route";
import ScrollToTop from "./component/common/ScrollToTop";
import Error400 from "./pages/errors/error400";
import Error404 from "./pages/errors/error404";
import Error500 from "./pages/errors/error500";
import Maintenance from "./pages/maintenance";
import Forgotpasswd from "./pages/authentication/forgotpasswd";
import Emailsent from "./pages/authentication/emailsent";
import Thankyou from "./pages/authentication/thankyou";
import Register from "./pages/authentication/register";
import Forgetpwd from "./pages/authentication/forgetpwd";
import Comingsoon from "./pages/comingSoon/comingsoon";
import ComingsoonVideo from "./pages/comingSoon/comingsoonVideo";
import ComingsoonImg from "./pages/comingSoon/comingsoonImg";
import ConfigDB from "./data/customizer/config";
import AuthWrapper from "./component/common/auth/AuthWrapper";
import { SnackbarProvider } from "notistack";
import { HashRouter } from 'react-router-dom'
import { Login } from "react-facebook";



console.log("public url: ", process.env.REACT_APP_PUBLIC_URL);
const Root = (props) => {
    const [anim, setAnim] = useState("");
    const animation =
        localStorage.getItem("animation") ||
        ConfigDB.data.router_animation ||
        "fade";
    const abortController = new AbortController();
    const [currentUser, setCurrentUser] = useState(false);
    useEffect(() => {
        const color = localStorage.getItem("color");
        document
            .getElementById("color")
            .setAttribute(
                "href",
                `${process.env.PUBLIC_URL}/assets/css/${color}.css`
            );
        setAnim(animation);
        app.auth().onAuthStateChanged(setCurrentUser);
        console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
        console.disableYellowBox = true;
        return function cleanup() {
            abortController.abort();
        };
    }, [abortController, animation]);
    return (
        <Fragment>
            <SnackbarProvider maxSnack={3}>
                <Provider store={store}>
                    <BrowserRouter basename={`/`}>
                        <ScrollToTop />
                        <Switch>
                            {/* <Route
              path={`${process.env.PUBLIC_URL}/login`}
              component={Signin}
            /> */}
                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/error-400`}
                                component={Error400}
                            ></Route>
                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/error-404`}
                                component={Error404}
                            ></Route>
                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/error-500`}
                                component={Error500}
                            ></Route>
                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/maintenance`}
                                component={Maintenance}
                            ></Route>
                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/forgotpasswd`}
                                component={Forgotpasswd}
                            ></Route>
                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/emailsent`}
                                component={Emailsent}
                            ></Route>
                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/thankyou`}
                                component={Thankyou}
                            ></Route>
                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/register`}
                                component={Register}
                            ></Route>
                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/forget-password`}
                                component={Forgetpwd}
                            ></Route>
                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/comingsoon`}
                                component={Comingsoon}
                            ></Route>
                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/comingsoon-bg-image`}
                                component={ComingsoonImg}
                            ></Route>
                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/comingsoon-bg-video`}
                                component={ComingsoonVideo}
                            ></Route>
                            <HashRouter>
                        
                            <App>

                                <AuthWrapper>
                                    {/* <Route 
                                        path={`${process.env.PUBLIC_URL}/user/dashboard/`}
                                    ></Route>
                                    <Route
                                        path={`${process.env.PUBLIC_URL}/pages/login`}
                                    ></Route> */}
                                    {/* <Route
                                        exact
                                        path={`${process.env.PUBLIC_URL}/`} Component={Login}
                                    /> */}
                                    <Route exact path="/" render={() => (
                                    localStorage.getItem("refresh_token") ? (
                                        <Redirect to={`${process.env.PUBLIC_URL}/user/dashboard`} />
                                    ) : (
                                        <Redirect to={`${process.env.PUBLIC_URL}/pages/login`} />
                                    )
                                    )}/>

                                    <TransitionGroup>
                                        {routes.map(({ path, Component }) => (
                                            <Route
                                                key={path}
                                                exact
                                                path={`${process.env.PUBLIC_URL}${path}`}
                                            >
                                                {({ match }) => (
                                                    <CSSTransition
                                                        in={match != null}
                                                        timeout={500}
                                                        classNames={anim}
                                                        unmountOnExit
                                                    >
                                                        <div>
                                                            <Component />
                                                        </div>
                                                    </CSSTransition>
                                                )}
                                            </Route>
                                        ))}
                                    </TransitionGroup>
                                    <Route
                                        path={`${process.env.PUBLIC_URL}/*`}
                                    ></Route>
                                </AuthWrapper>
                                <Route
                                    path={`${process.env.PUBLIC_URL}/*`}
                                ></Route>
                            </App>
                            
                            </HashRouter>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </SnackbarProvider>
        </Fragment>
    );
};
ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
