import { render } from 'inferno';
import './index.css';
import App from './App';
import {Provider} from 'inferno-redux';
import {createStore} from 'redux';
import reducer from './Component/Reducer/index';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

