import React, { FunctionComponent } from "react";
import env from "../env.json"
import Search from "./search/search";

const App: FunctionComponent = () => {

    return (
        <React.Fragment>
            <Search callback={(userInput: string)=>{
                // TODO: Handle user input
            }}/>
        </React.Fragment>
    );
}

export default App;
