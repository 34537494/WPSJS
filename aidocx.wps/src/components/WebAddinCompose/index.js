import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { WebAddinTemplate, WebAddinTplDetail,WebAddinGenTpl} from "../App";
/*
        <Route exact path="/Compose/ebook" component={WebAddinTemplate}/>
        <Route path="/Compose/ebook/:ebookid/:sharerid" component={WebAddinTemplate}/>
        <Route path="/Compose/ebook/:ebookid" component={WebAddinTemplate}/>
        <Route path="/Compose/share/:tempid/:sharerid" component={WebAddinTemplate}/>
        <Route path="/Compose/share/:tempid" component={WebAddinTemplate}/>
 */
const WebAddinCompose = () => (
  <div>
      <Switch>
        <Route exact path="/Compose" component={WebAddinTemplate}/>
        <Route path="/Compose/details" component={WebAddinTplDetail} />
        <Route path="/Compose/genTpl" component={WebAddinGenTpl} />
        <Route render={()=><Redirect to='/Compose'/>}/>
      </Switch>
  </div>
);

export default WebAddinCompose;
