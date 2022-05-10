import * as React from 'react';
import { FunctionComponent } from 'react';

interface SearchCityProps {
    onSearchHandler: (value: string) => void,
}

/**
 * **Displays a form with a text field and submit button.**  
 * On submit event the props.onSubmitHandler gets invoked  
 * with the user input value passed as the argument.
 */
const SearchCity: FunctionComponent<SearchCityProps> = (props) => {

    const [userInput, setUserInput] = React.useState("");

    return (
        <form id="search-city" onSubmit={(e) => {
            e.preventDefault();
            props.onSearchHandler(userInput);
        }}>
            <input type={"text"} value={userInput} onChange={(e) => {
                setUserInput(e.currentTarget.value);
            }} />
            <input type={"submit"} />
        </form>
    );
}
export default SearchCity;
