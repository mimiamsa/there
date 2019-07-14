import React from 'react';
import './styles/css/main.css';
import NavMain from './Components/NavMain';
import PageAbout from './Pages/About';
import Home from './Pages/Home';
import { Switch, Route, Redirect } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faUserCircle, faMapMarkerAlt, faSearch, faComment, faHeart, faAngleRight} from '@fortawesome/free-solid-svg-icons';
library.add(faUserCircle, faHeart, faMapMarkerAlt, faLinkedin, faTwitter, faSearch, faComment, faAngleRight)


function App() {
  return (
    <div className="app-container">

      <NavMain />

      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/articles" component={PageAbout} />
      </Switch>
    </div>
  );
}

export default App;
