import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import App from './components/app';

const htmlRoot = document.getElementById('root');
if (htmlRoot) {
  const root = ReactDOM.createRoot(htmlRoot);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}
