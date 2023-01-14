import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import store from "../../../store/index";
import axiosInstance from "../../../axiosAPI";
import { useSnackbar } from "notistack";
import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_VERIFIED,
  SET_LAST_LOGIN,
  SET_ROLE,
} from "../../../redux/actionType";
import { useHistory } from "react-router";
import { logOut } from "../header/header"



function AuthWrapper({ children }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    checkToken();
  }, []);

 

  const redirectToHomepage = () => {
    history.push(`/pages/login`);
  };
  const logOut = () => {
   
    var refresh=localStorage.getItem("refresh_token");

    localStorage.removeItem("profileURL");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access_token");
    // app.auth().signOut();
    axiosInstance.post(
      "/api/logout/",
      {"refresh":refresh}
  )
  .then((response) => {
    console.log(response);
    // login.isloggedin=false;
    // console.log("status login",login.isloggedin)
    console.log(localStorage.getItem("refresh_token"))
    enqueueSnackbar(
        "Logged Out Successfully",
        {
            variant: "success",
        }
    );
    window.location.reload(false);
    redirectToHomepage("/")
})

.catch((err) => {
    console.log(err);
    enqueueSnackbar(
        "Logged Out ",
        {
            variant: "success",
        }
    );
});
  console.log()
  redirectToHomepage("/")

  };
  const history = useHistory();
  const checkToken = () => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken === null) {
      console.log("no token found");
      if (window.location.pathname === "/") {
        console.log("at root");
      } else {
        history.push(`${process.env.PUBLIC_URL}/`);
      }
    } else {
      const tokenParts = JSON.parse(atob(accessToken.split(".")[1]));
      if (tokenParts.exp <= Date.now() / 1000) {
        console.log("expired Token found");
        // setRedirectToRoot(true);
        enqueueSnackbar("You have been Logged out due to Inactivity", {
          variant: "warning",
        });
        
        enqueueSnackbar("Refresh session", {
          variant: "error",
        });
        logOut();
        history.push(`${process.env.PUBLIC_URL}/`);
      } else {
        //TODO: implement mechanism if user has a valid token
        console.log("token found");
        tryToken(tokenParts);
      }
    }
    setReady(true);
    // console.log("ready", ready, "redirect", redirectToRoot);
  };

  const tryToken = async (tokenParts) => {
    try {
      console.log("dispatching auth states", tokenParts);
      const res = await axiosInstance.post("api/token/", {
        username: tokenParts.username,
      });
      if (res.status === 200) {
        await store.dispatch({
          type: SET_USER,
          payload: { user: res.data.username },
        });
        await store.dispatch({
          type: SET_LAST_LOGIN,
          payload: { lastLogin: res.data.last_login },
        });
        await store.dispatch({
          type: SET_VERIFIED,
          payload: { verifed: true },
        });
        await store.dispatch({
          type: SET_AUTHENTICATED,
          payload: { authenticated: true },
        });
        await store.dispatch({
          type: SET_ROLE,
          payload: { role: tokenParts.role },
        });
        const timeDiff = tokenParts.exp * 1000 - Date.now() - 1 * 60 * 1000;
       
        console.log("Event in", timeDiff);
        if (timeDiff < 0 ) {
          enqueueSnackbar("Refresh session", {
            variant: "error",
          });
          logOut();

        } else {
          setTimeout(() => {
            enqueueSnackbar("You have 1 Minute Left of session time", {
              variant: "warning",
            });
          }, timeDiff);
          enqueueSnackbar(
            `Session restored you have ${(timeDiff / 1000 / 60).toFixed(
              0
            )} minutes left`,
            {
              variant: "info",
            }
          );
          // logOut();
          enqueueSnackbar("Please DO NOT refresh this page", {
            variant: "warning",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {ready ? (
        <>{children}</>
      ) : (
        <>
          {" "}
          <div className="loader-box">
            <div className="loader-11"></div>
          </div>
        </>
      )}
    </>
  );
}

export default AuthWrapper;
