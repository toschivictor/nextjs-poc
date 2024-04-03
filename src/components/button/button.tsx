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
				'font-bold border-none rounded cursor-pointer inline-block',
				`storybook-button--${size}`,
				mode,
			].join(' ')}
			{...props}
		>
			{label}
			<style jsx>{`
				button {
					background-color: ${backgroundColor};
				}
			`}</style>
		</button>
	);
};
