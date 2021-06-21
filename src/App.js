import Home from "./pages/home";
import AddTask from "./pages/add-task";
import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "./pages/sign-up";

function App() {
  const [userid, setUserid] = useState("");
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signup" component={SignUp} />
      <Route path="/addtask" component={AddTask} />
    </Switch>
  );
}

export default App;
