import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';

import App from '../../App';

afterEach(() => {
	cleanup();
});

describe('App component', () => {
	it('render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});
});
