import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Icon  from './Icon';
import './Icon.scss'


export default {
  title: 'atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

