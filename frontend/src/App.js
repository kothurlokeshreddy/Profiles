import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import {Route, Switch} from 'react-router-dom'

import ProfileForm from './components/ProfileFrom';
import Header from './components/Header'
import ProfileList from './components/ProfileList';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path = "/" component = {ProfileForm} />
        <Route path = "/profiles" component = {ProfileList} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
