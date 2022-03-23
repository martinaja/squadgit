import LoginContext from './context/LoginContext';
import Home from './pages/Home';

function App() {
	return (
		<LoginContext>
			<Home />
		</LoginContext>
	);
}

export default App;
