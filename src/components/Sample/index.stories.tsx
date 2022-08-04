import React from 'react';
import Sample from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Components/Sample',
	component: Sample,
	argTypes: {
		id: {description: 'Id (optional)'},
		className: {description: 'CSS Classes (optional)'},
		cdnAttribute: {description: 'String needed for CDN Build'},
	}
} as ComponentMeta<typeof Sample>;

const Template: ComponentStory<typeof Sample> = (args:any) => ( <Sample {...args} /> );

export const _Sample = Template.bind({});

_Sample.args = {
	id: 'sampleId',
	className: 'sampleClass',
	cdnAttribute: 'sampleAttribute'
};