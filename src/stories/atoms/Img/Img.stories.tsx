import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Img  from './Img';
import './Img.scss'


export default {
  title: 'atoms/Img',
  component: Img,
} as ComponentMeta<typeof Img>;

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

