import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./context/firebase";
import { seedDatabase } from "./seed";

const config = {
	apiKey: "AIzaSyD5TfotuElm0UeE4oRgIVun_QlzFAbO9Dg",
	authDomain: "netflix-web-react.firebaseapp.com",
	databaseURL: "https://netflix-web-react-default-rtdb.firebaseio.com",
	projectId: "netflix-web-react",
	storageBucket: "netflix-web-react.appspot.com",
	messagingSenderId: "381334770078",
	appId: "1:381334770078:web:8f7798bdc162c391e5868f",
};

const firebase = window.firebase.initializeApp(config);

// seedDatabase(firebase);

ReactDOM.render(
	<React.StrictMode>
		<FirebaseContext.Provider value={{ firebase: window.firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</React.StrictMode>,

	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
