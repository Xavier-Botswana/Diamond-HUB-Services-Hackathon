import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Views from "./views";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Views} />
      </Switch>
    </Router>
  );
}
export default App;
