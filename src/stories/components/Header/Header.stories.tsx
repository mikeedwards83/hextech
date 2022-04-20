import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Header  from './Header';
import './Header.scss'


export default {
  title: 'components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

