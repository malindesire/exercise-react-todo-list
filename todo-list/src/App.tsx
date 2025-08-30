import Todos from './components/Todos';

function App() {
	return (
		<>
			<Todos
				todos={[
					{
						id: 'rtl26p',
						todo: 'Plocka ur diskmaskinen',
					},
					{
						id: 'gh7k9l',
						todo: 'Hänga upp tvätten',
					},
					{
						id: 'sp0m3k',
						todo: 'Dammsuga källaren',
					},
					{
						id: 'fks45d',
						todo: 'Blåsa bort löven i trädgården',
					},
					{
						id: 'slj2k5',
						todo: 'Tvätta fönstren',
					},
				]}
			/>
		</>
	);
}

export default App;
