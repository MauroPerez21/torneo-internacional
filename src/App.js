
import Inicio from './components/inicio'
import Eventos from './components/eventos'
import Guia from './components/guia'
import Galeria from './components/galeria'
import Youtube from './components/videos'
import Menu from './components/layout/menu'
import WppButton from './components/layout/whatsapp'
import TopButton from './components/layout/topbutton'
import FsImage from './components/galeria/Fsimage'
import Footer from './components/layout/footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
     <WppButton/>
     <TopButton/>
      <Menu/>
      <Switch>
          <Route path="/" exact component={Inicio}/>
          <Route path="/inicio" component={Inicio}/>
          <Route path="/eventos" component={Eventos}/>
          <Route path="/lugares" component={Guia}/>
          <Route path="/galeria" exact component={Galeria}/>
          <Route path="/galeria/:id"><FsImage /></Route>
          <Route path="/videos" component={Youtube}/>
      </Switch>
      <Footer/>
    </Router>
  );                      
}

export default App;
