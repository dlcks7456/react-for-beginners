import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


// 옛날 방식
// useEffect(()=>{
//   fetch(
//     "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
//   )
//   .then(response => response.json())
//   .then(json => {
//     setMovies(json.data.movies);
//     setLoading(false);
//   });
// }
// ,[]);