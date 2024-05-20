interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: 'small' | 'medium' | 'large';
	label: string;
	onClick?: () => void;
}

export const Button = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	const mode = primary ? 'bg-blue-500 text-white' : 'bg-transparent text-gray';
	return (
		<button
			type="button"
			className={[
				'px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4',
				`storybook-button--${size}`,
				mode,
			].join(' ')}
			{...props}
		>
			{label}
			<div
				className="w-4 h-4 rounded-full animate-spin
                    border border-solid border-white border-t-transparent"
			></div>
			<style jsx>{`
				button {
					background-color: ${backgroundColor};
				}
			`}</style>
		</button>
	);
};
