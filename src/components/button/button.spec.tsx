import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '@/components/button/button';

describe('Button Component', () => {
	it('renders button with provided label', () => {
		const { getByText } = render(<Button label="Click me" />);
		expect(getByText('Click me')).toBeInTheDocument();
	});

	it('renders medium-sized button by default', () => {
		const { getByRole } = render(<Button label="Click me" />);
		const button = getByRole('button');
		expect(button).toHaveClass('storybook-button--medium');
	});

	it('renders primary button with blue background and white text', () => {
		const { getByRole } = render(<Button label="Click me" primary />);
		const button = getByRole('button');
		expect(button).toHaveClass('bg-blue-500');
		expect(button).toHaveClass('text-white');
	});

	it('calls onClick prop when button is clicked', () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Button label="Click me" onClick={handleClick} />
		);
		fireEvent.click(getByText('Click me'));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('renders button with custom background color', () => {
		const { getByRole } = render(
			<Button label="Click me" backgroundColor="red" />
		);
		const button = getByRole('button');
		expect(button).toHaveStyle('background-color: red');
	});
});
