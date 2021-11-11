import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import useDebounce from './hooks/useDebounce';
import data from './data/data.json';
import { Navbar } from './components/Navbar';

import style from './App.module.scss';
import { Data } from './models';
import { DataColumns } from './components/DataColumns';

/**
 * Main page.
 * @component
 * @category Page
 * @hideConstructor
 */

function App(): JSX.Element {
	const [query, setQuery] = useState<string>('');
	const debouncedQuery = useDebounce<string>(query, 500);
	const searchHandler = (data: Array<Data>) => {
		return data.filter(
			(row: Data) => row.name.toLowerCase().indexOf(debouncedQuery) > -1,
		);
	};
	return (
		<div data-testid='App'>
			<Navbar />
			<div className={style.app}>
				<div className={style.inputSearch}>
					<input
						type='text'
						placeholder='Search...'
						value={query}
						onChange={e => setQuery(e.target.value)}
					/>
				</div>
				<div className={style.table}>
					<DataGrid
						rows={searchHandler(data)}
						columns={DataColumns}
						pageSize={7}
						rowsPerPageOptions={[7]}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
