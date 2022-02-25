import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export const Google = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const responseGoogle = (response) => {
    setEmail(response.profileObj.email);
    setName(response.profileObj.name);
    setUrl(response.profileObj.imageUrl);
    console.log(response);
    setIsLogin(true);
  };
  const responseLogout = (response) => {
    console.log(response);
    setIsLogin(false);
    setEmail("");
    setName("");
    setUrl("");
  };

  return isLogin ? (
    <>
      <div className="col-sm-4">
        <div className="text-center" id="googlelogin">
          <h5>Welcome : {name} </h5>
          <img src={url} alt="profil" />
          <p>Your email : {email}</p>
          <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_ID}
            buttonText="Logout"
            onLogoutSuccess={responseLogout}
          />
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="col-sm-4">
        <div className="text-center" id="googlelogin">
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_ID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </>
  );
};

export default Google;
