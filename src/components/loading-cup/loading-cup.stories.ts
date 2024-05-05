import type { Meta, StoryObj } from '@storybook/react';
import { LoadingCup } from './loading-cup';

const meta = {
	title: 'Components/LoadingCup',
	component: LoadingCup,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {},
} satisfies Meta<typeof LoadingCup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
	args: {
		// Add default prop values here
	},
};
