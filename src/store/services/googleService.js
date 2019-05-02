import React from "react";
import GoogleLogin from "react-google-login";

export const GoogleLoginService = props => {
  const onSuccess = response => {
    props.login(response);
  };
  return (
    <GoogleLogin
      className={props.className}
      clientId="1073365159193-e6070rcl0nqqm61sje5shlf9m3ujb2mt.apps.googleusercontent.com"
      buttonText={props.buttonText}
      onSuccess={response => onSuccess && onSuccess(response)}
    />
  );
};
