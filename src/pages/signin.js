import React, { useContext, useState } from "react";
import { Form } from "../components";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { FirebaseContext } from "../context/firebase";
import * as Routes from "../constants/routes";

export default function SignIn() {
	const [error, setError] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const { firebase } = useContext(FirebaseContext);
	const [password, setPassword] = useState("");
	const history = useHistory();

	const isInvalid = password === "" || emailAddress === "";
	console.log(firebase);
	const handleSignin = (event) => {
		event.preventDefault();

		firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				history.push(Routes.BROWSE);
			})
			.catch((error) => {
				setEmailAddress("");
				setPassword("");
				setError(error.message);
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignin} method="POST">
						<Form.Input
							placeholder="Email address"
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							type="password"
							value={password}
							autoComplete="off"
							placeholder="Password"
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign in
						</Form.Submit>
						<Form.Text>
							New to Netflix <Form.Link to="/signup">Sign up now</Form.Link>
						</Form.Text>
						<Form.TextSmall>
							This page is protected by Google reCAPTCHA.
						</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
