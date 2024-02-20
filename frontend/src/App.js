import {BrowserRouter , Route , Switch} from 'react-router-dom';

// import Navbar from './Components/Navbar';
import About from './Components/About';
import SignIn from './Components/SignIn';
import SignUp from './Components/Signup';
import Home from './Components/Home';
import Footer from './Components/footer';
import NotesList from './Components/NoteList'
import Addblog from './Components/addblog';
import BlogDetails from './Components/BlogDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='content'>
          <Switch>
              <Route path="/" exact> <Home/> </Route>
              <Route path="/about"> <About/> </Route>
              <Route path="/SignUp" exact> <SignUp/> </Route>
              <Route path="/SignIn" exact> <SignIn/> </Route>
              <Route path="/NotesList"><NotesList/></Route>
              <Route path="/newblog/:password"><Addblog/></Route>
              <Route path="/getnotes/:id"> <BlogDetails/> </Route>
          </Switch>
        </div>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
