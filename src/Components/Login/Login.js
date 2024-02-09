import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import images1 from '../Login/Assets/Login.svg';
import '../Login/Login.css'

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [error, setError] = useState({
        username: "",
        password: "",
    });

    const [isLoadBtn, setIsLoadBtn] = useState(false);

    useEffect(() => {
        localStorage.clear();
        navigate("/");
    }, []);

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            if (!password) {
                setError({
                    ...error,
                    password: "Password is empty !",
                    username: "username is empty !",
                });
            }
        } else {
            setError("");
            try {
                setIsLoadBtn(true);
                getTheToken();
            } catch (e) {
                alert("Login Failed ! ${e.message}");
            }
        }
    };
    setTimeout(() => {
        setIsLoadBtn(false);
    }, 10000);

    const getTheToken = async () => {
        const response = await axios.get(
            "https://api.themoviedb.org/3/authentication/token/new?api_key=81244742d7fb2c76d7e4175cde2afdf6"
        );
        const gettoken = response.data.request_token;
        saveFormData(gettoken);
    };

    const saveFormData = (gettoken) => {
        axios
            .post(
                "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=81244742d7fb2c76d7e4175cde2afdf6",
                {
                    username: username,
                    password: password,
                    request_token: gettoken,
                }
            )
            .then((res) => {
                localStorage.setItem("newtoken", gettoken);
                localStorage.setItem("username", username);
                successMsg();
                getTimeout();
            })
            .catch((err) => {
                logMsg();
            });
    };
    const getTimeout = () => {
        setTimeout(() => {
            setTimeout(navigate("/Home"));
        }, 1000);
    };

    const successMsg = () => {
        toast.success("Login Successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const logMsg = () => {
        toast.error("Invalid Username & Password", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const handleUser = (e) => {
        setError({ ...error, username: "" });
        setUsername(e.target.value);
    };
    const handlePass = (e) => {
        setError({ ...error, password: "" });
        setPassword(e.target.value);
    };
    return (
        <>
        <div class="login">
            <div class="container">
                <div class="row">
                    <div className="col-lg-8">
                        <img src={images1} width={600} height={400} alt=""/>
                    </div>
                    <div className="col-lg-4">

                        <div className="box">
                            <div class="card1">
                            <h3 className="sign"> Welcome to our website </h3>
                            <h3 className="sign"> Sign in </h3>
                            <p className="signup">Sign in to your Self Service Portal </p>
                            </div>
                            <div class="card2">
                            <form onSubmit={onFormSubmit}>
                                <div className="label-float">
                                    <input
                                        type="text"
                                        placeholder="Username "
                                        value={username}
                                        onChange={(e) => handleUser(e)}
                                    />
                                    <label></label>
                                    {error.username !== "" && (
                                        <p className="message">{error.username}</p>
                                    )}
                                </div>
                                <div className="label-float">
                                    <input
                                        type="password"
                                        placeholder="Password "
                                        value={password}
                                        onChange={(e) => handlePass(e)}
                                    />
                                    <label></label>
                                    {error.password !== "" && (
                                        <p className="message">{error.password}</p>
                                    )}
                                </div>
                                <div>
                                    <button className="loginbtn">
                                        {isLoadBtn ? <i class="fa fa-circle-o-notch fa-spin"></i> : ""}LOG
                                        IN
                                    </button>
                                </div>
                            </form>
                            </div>
                        </div>

                        <ToastContainer />
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Login;
