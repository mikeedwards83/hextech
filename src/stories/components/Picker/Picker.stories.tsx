import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Picker  from './Picker';
import './Picker.scss'


export default {
  title: 'components/Picker',
  component: Picker,
} as ComponentMeta<typeof Picker>;

const Template: ComponentStory<typeof Picker> = (args) => <Picker {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

