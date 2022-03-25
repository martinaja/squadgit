import LoginContext from './context/LoginContext';
import Home from './pages/Home';

function App() {
	return (
		<LoginContext> {/* Contexto de login */}
			<Home />
		</LoginContext>
	);
}

export default App;
