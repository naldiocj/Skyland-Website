import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Newsletters from './pages/Newsletters';

function App() {
  return (
    <>
      <Routes>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/newsletters" component={Newsletters} />
        </Switch>
      </Routes>
      <GlobalStyles />
    </>
  );
}

export default App;
