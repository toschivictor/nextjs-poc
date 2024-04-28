'use client';

import { Input } from '@/components/input/input';
import { useInput } from '@/hooks/use-input';

export const UserAuthentication = () => {
	const emailInput = useInput('');
	const passwordInput = useInput('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		validateInput(emailInput);
		validateInput(passwordInput);

		console.log(
			'email ==>',
			emailInput.value,
			'password ==>',
			passwordInput.value
		);
	};

	const validateInput = (input: {
		value: string;
		setError: (value: boolean) => void;
	}) => {
		if (!input.value.trim()) {
			input.setError(true);
		} else {
			input.setError(false);
		}
	};

	return (
		<div className="flex flex-col bg-white shadow-lg md:flex-row md:flex-1 lg:max-w-screen-md">
			<div className="p-4 py-6 text-white bg-blue-500 md:w-72 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
				<p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
					Here we test functionalities, tools, concepts, features and so on.
				</p>
				<p className="flex flex-col items-center justify-center mt-10 text-center">
					<span>Don't have an account?</span>
					<a href="#" className="underline">
						Get Started!
					</a>
				</p>
				<p className="mt-6 text-sm text-center text-gray-300">
					Read our{' '}
					<a href="#" className="underline">
						terms
					</a>{' '}
					and{' '}
					<a href="#" className="underline">
						conditions
					</a>
				</p>
			</div>
			<div className="p-5 bg-white md:flex-1">
				<h3 className="my-4 text-2xl font-semibold text-gray-700">
					Account Login
				</h3>
				<form onSubmit={handleSubmit} className="flex flex-col space-y-5">
					<Input
						type="email"
						name="email"
						label="Email address"
						{...emailInput}
					/>
					<Input
						type="password"
						name="password"
						label="Password"
						{...passwordInput}
					/>
					<a
						href="#"
						className="text-sm text-blue-600 hover:underline focus:text-blue-800"
					>
						Forgot Password?
					</a>

					<div className="flex items-center space-x-2">
						<input
							type="checkbox"
							id="remember"
							className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
						/>
						<label
							for="remember"
							className="text-sm font-semibold text-gray-500"
						>
							Remember me
						</label>
					</div>
					<div>
						<button
							type="submit"
							className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
						>
							Log in
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
