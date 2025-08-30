import Todos from './components/Todos';

function App() {
	return (
		<>
			<Todos
				todos={[
					{
						id: 'rtl26p',
						todo: 'Plocka ur diskmaskinen',
						done: false,
					},
					{
						id: 'gh7k9l',
						todo: 'Hänga upp tvätten',
						done: false,
					},
					{
						id: 'sp0m3k',
						todo: 'Dammsuga källaren',
						done: true,
					},
					{
						id: 'fks45d',
						todo: 'Blåsa bort löven i trädgården',
						done: true,
					},
					{
						id: 'slj2k5',
						todo: 'Tvätta fönstren',
						done: true,
					},
				]}
			/>
		</>
	);
}

export default App;
