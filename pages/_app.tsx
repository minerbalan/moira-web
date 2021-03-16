import "tailwindcss/tailwind.css";
import {AppProps} from "next/app";
import React from "react";
import {Provider} from "react-redux";
import rootStore from "../redux/rootStore";

const App = ({Component, pageProps}: AppProps) => {
    return <Provider store={rootStore}>
        <Component {...pageProps}/>
    </Provider>
}

export default App
