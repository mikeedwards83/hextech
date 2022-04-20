import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ServiceIcon  from './ServiceIcon';
import './ServiceIcon.scss'


export default {
  title: 'atoms/ServiceIcon',
  component: ServiceIcon,
} as ComponentMeta<typeof ServiceIcon>;

const Template: ComponentStory<typeof ServiceIcon> = (args) => <ServiceIcon {...args} />;

export const Default = Template.bind({});
Default.args = {  
};

