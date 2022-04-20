import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  FieldSearch  from './FieldSearch';
import './FieldSearch.scss'


export default {
  title: 'atoms/FieldSearch',
  component: FieldSearch,
} as ComponentMeta<typeof FieldSearch>;

const Template: ComponentStory<typeof FieldSearch> = (args) => <FieldSearch {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

