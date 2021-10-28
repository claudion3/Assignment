import ReactDOM from 'react-dom';
import { cleanup, render } from '@testing-library/react';

import { Navbar } from '../Navbar';

afterEach(() => {
	cleanup();
});

describe('Navbar component', () => {
	it('render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Navbar></Navbar>, div);
	});

	it('renders Navbar correctly', () => {
		const { getByTestId } = render(<Navbar />);
		expect(getByTestId('navbar')).toHaveTextContent('Employee Data');
	});
});
