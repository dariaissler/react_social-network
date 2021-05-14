import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Components/redux/redux-store';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';


    ReactDOM.render(
        <HashRouter>
        <Provider store={store}>
          <App dispatch={store.dispatch.bind(store)} store={store}/>, 
        </Provider>
        </HashRouter>,
        document.getElementById('root')
      );

reportWebVitals();
