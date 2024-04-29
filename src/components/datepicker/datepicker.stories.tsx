import type { Meta, StoryObj } from '@storybook/react';
import { Datepicker } from './datepicker';

const meta = {
	title: 'Components/Datepicker',
	component: Datepicker,
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
} satisfies Meta<typeof Datepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
	args: {
		// Add default prop values here
	},
};

export const WithSelectedDate: Story = {
	args: {
		// Set a prop to pre-select a date
		selectedDate: new Date('2024-04-30'),
	},
};
