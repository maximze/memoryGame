import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from '../store/applicationStore';
import AppContainer from "../components/AppContainer";




class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
