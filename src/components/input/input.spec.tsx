import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './input';

describe('Input component', () => {
	it('renders correctly', () => {
		const onChange = jest.fn();
		const { getByLabelText, getByPlaceholderText, getByText } = render(
			<Input
				type="text"
				label="Name"
				value=""
				name="name"
				placeholder="Enter your name"
				error={false}
				disabled={false}
				onChange={onChange}
			/>
		);

		// Check if label, input, and placeholder are rendered correctly
		expect(getByLabelText('Name')).toBeInTheDocument();
		expect(getByPlaceholderText('Enter your name')).toBeInTheDocument();

		// Check if error message is not rendered initially
		expect(
			getByText("Input field can't be empty!", { exact: false })
		).not.toBeInTheDocument();
	});

	it('displays error message when error is true', () => {
		const onChange = jest.fn();
		const { getByText } = render(
			<Input
				type="text"
				label="Name"
				value=""
				name="name"
				placeholder="Enter your name"
				error={true}
				disabled={false}
				onChange={onChange}
			/>
		);

		// Check if error message is rendered when error is true
		expect(
			getByText("Input field can't be empty!", { exact: false })
		).toBeInTheDocument();
	});

	it('calls onChange handler when input value changes', () => {
		const onChange = jest.fn();
		const { getByPlaceholderText } = render(
			<Input
				type="text"
				label="Name"
				value=""
				name="name"
				placeholder="Enter your name"
				error={false}
				disabled={false}
				onChange={onChange}
			/>
		);

		const inputElement = getByPlaceholderText('Enter your name');
		fireEvent.change(inputElement, { target: { value: 'John Doe' } });

		// Check if onChange is called with the correct value
		expect(onChange).toHaveBeenCalledWith(
			expect.objectContaining({ target: { value: 'John Doe' } })
		);
	});

	// Add more test cases as needed
});
