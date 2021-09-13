import { store } from './redux/store';
import { Provider } from 'react-redux';
import Routes from './Routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
