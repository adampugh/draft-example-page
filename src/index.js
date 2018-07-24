import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "./styles/styles.scss";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { addComponent } from './actions/actions';

const store = configureStore();

store.dispatch(addComponent({componentIndex: 0}));
store.dispatch(addComponent({componentIndex: 1}));


console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
