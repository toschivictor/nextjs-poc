import { useState } from 'react';

export const useInput = (initialValue: string) => {
	const [value, setValue] = useState(initialValue);
	const [error, setError] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return {
		value,
		error,
		onChange: handleChange,
		setError,
	};
};
