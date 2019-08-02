import React, { useState } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import history from "./history";

const Login = () => {
    const [email, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailErrorHelper, setEmailErrorHelper] = useState("");
    const [passErrorHelper, setPassErrorHelper] = useState("");

    const handleSubmit = async e => {
        if (email !== "" && password !== "") {
            await firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(u => console.log(u));

            if (firebase.auth().currentUser) {
                history.push("/success");
            }
        } else {
            if (email === "") {
                setEmailError(true);
                setEmailErrorHelper("Email cannot be empty!");
            }
            if (password.length < 6) {
                setPasswordError(true);
                setPassErrorHelper("Password cannot be empty!");
            }
        }
    };

    return (
        <div>
            <Card className="card">
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            value={email}
                            onChange={e => setMail(e.target.value)}
                            error={emailError}
                            helperText={emailErrorHelper}
                        />

                        <br />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            error={passwordError}
                            helperText={passErrorHelper}
                        />
                        <br />
                    </CardContent>
                    <CardActions className="buttons">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Login
                        </Button>
                        <Link to="/register">
                            <Button variant="contained" color="secondary">
                                Register
                            </Button>
                        </Link>
                    </CardActions>
                </form>
            </Card>
        </div>
    );
};

export default Login;
