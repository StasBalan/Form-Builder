import { version, Component } from 'inferno';
import './App.css';
import Navbar from './Component/Navbar/index';
import Home from './Component/Home/index';
import New from './Component/NewForm/index';
import { BrowserRouter, Route, Switch } from 'inferno-router';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/newForm' component={New}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
