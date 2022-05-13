import { FunctionComponent, useState } from "react";

interface SearchProps {
    callback: (query: string) => void;
    placeholder: string;
    showingError: boolean;
}

const errorStyle = "0.3vh solid red";

const Search: FunctionComponent<SearchProps> = (props) => {

    const [userInput, setUserInput] = useState<string>("");

    return (
        <div role={"form"} className="search-box">
            <div className="search-border" style={props.showingError ? { border: errorStyle } : undefined}>
                <input
                    placeholder={props.placeholder}
                    className="search-input"
                    value={userInput}
                    onChange={(e) => {
                        setUserInput(e.currentTarget.value);
                    }} />
                <button
                    style={props.showingError ? { borderLeft: errorStyle } : undefined}
                    className="search-submit"
                    onClick={() => { props.callback(userInput) }}>
                    <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" height="48"
                        width="48" preserveAspectRatio="xMaxYmax" viewBox="0 0 48 48">
                        <path d="M39.95 42.75 26.7 29.5Q25.2 30.75 23.125 31.45Q21.05 32.15 18.8 32.15Q13.1 32.15 9.2 28.225Q5.3 24.3 5.3 18.7Q5.3 13.1 9.2 9.2Q13.1 5.3 18.7 5.3Q24.3 5.3 28.225 9.2Q32.15 13.1 32.15 18.7Q32.15 20.95 31.475 22.925Q30.8 24.9 29.4 26.7L42.75 39.95ZM18.75 28.25Q22.75 28.25 25.5 25.475Q28.25 22.7 28.25 18.7Q28.25 14.7 25.5 11.925Q22.75 9.15 18.75 9.15Q14.65 9.15 11.9 11.925Q9.15 14.7 9.15 18.7Q9.15 22.7 11.9 25.475Q14.65 28.25 18.75 28.25Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Search;