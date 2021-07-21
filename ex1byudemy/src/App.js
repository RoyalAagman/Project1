import Navigation from "./NaviBar";
import Homies from "./Components/Main";
import "./Newstyle.css";
import AboutView from "./Components/Aboutus";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchView from "./Components/SearchWind";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    if (searchText) {
      fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=b48bfb8c`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSearchResults(data.Search);
        });
      setSearchResults("");
    }
  }, [searchText]);

  return (
    <div className="App">
      <header className="App-header">
        <Navigation searchText={searchText} setSearchText={setSearchText} />
        <Switch>
          <Route path="/" exact>
            <Homies />
          </Route>
          <Route path="/about" component={AboutView} />
          <Route path="/search">
            <SearchView keyword={searchText} searchResults={searchResults} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;

// URL : https://api.themoviedb.org/3/movie/550?api_key=e615daef816d490341565230c62b4e26
// Api Key : e615daef816d490341565230c62b4e26
