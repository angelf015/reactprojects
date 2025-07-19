// all routes
import Routes from './routes/Routes';

// helpers
import { configureFakeBackend } from './helpers';

// For Default import Theme.scss
import './assets/scss/Theme.scss';

// TODO: Comment this line when not in development mode
const App = () => {
    configureFakeBackend();
    return <Routes />;
};

export default App;
