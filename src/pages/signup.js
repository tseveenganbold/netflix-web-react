import React, { useState, useContext } from "react";
import * as Routes from "../constants/routes";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";

export default function SignUp() {
	const [error, setError] = useState("");
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [firstName, setFirstName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	console.log(firebase);

	const isValid = firstName === "" || emailAddress === "" || password === "";

	const handleSignUp = (event) => {
		event.preventDefault();

		firebase
			.auth()
			.createUserWithEmailAndPassword(emailAddress, password)
			.then((result) =>
				result.user
					.updateProfile({
						displayName: firstName,
						photoURL: Math.floor(Math.random() * 5) + 1,
					})
					.then(() => {
						setEmailAddress("");
						setPassword("");
						setError("");
						history.push(Routes.BROWSE);
					}),
			)
			.catch((error) => {
				setPassword("");
				setEmailAddress("");
				setError(error.message);
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignUp} method="POST">
						<Form.Input
							placeholder="First Name"
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
						/>
						<Form.Input
							placeholder="Email Address"
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							placeholder="password"
							type="password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
							autoComplete="off"
						/>
						<Form.Submit disabled={isValid} type="submit">
							Sign Up
						</Form.Submit>
						<Form.Text>
							Already User?<Form.Link to={Routes.SIGN_IN}>Sign In</Form.Link>
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
