import { createRoot } from 'react-dom/client';

import './i18n';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { configureStore } from './redux/store';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <Provider store={configureStore({})}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
