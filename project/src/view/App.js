import '../style/App.css';
import Header from './Header'
import LogIn from './LogIn'
import SignUp from './SignUp'
import Profile from './Profile'
import Home from './Home'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
function App() {
  return (
    <Router>
      <Helmet>
        <title> Pangaea </title>
      </Helmet>
      <div className="App">
        <header className="app__header">
          <Header/>
        </header>
        <Route exact={true} path='/' component={Home}/>
        <Route path="/Profile" component={Profile}/>
        <Route path="/LogIn" component={LogIn}/>
        <Route path="/SignUp" component={SignUp}/>
      </div>
    </Router>
  )
}

export default App;
