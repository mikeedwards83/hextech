import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ServicePicker from './ServicePicker';
import './ServicePicker.scss'


export default {
  title: 'components/ServicePicker',
  component: ServicePicker,
} as ComponentMeta<typeof ServicePicker>;

const Template: ComponentStory<typeof ServicePicker> = (args) => <ServicePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  services: [
    {
      name: "React",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium mattis tortor, at facilisis turpis tristique vel. Nam mollis vestibulum vulputate. Duis ac ante dignissim diam mollis cras amet. ",
      icon: {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        alt: "React"
      },
      website: {
        text: "http://test",
        url: "http://test",
      },
    },
    {
      name: "React",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium mattis tortor, at facilisis turpis tristique vel. Nam mollis vestibulum vulputate. Duis ac ante dignissim diam mollis cras amet. ",
      icon: {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        alt: "React"
      },
      website: {
        text: "http://test",
        url: "http://test",
      },
    },
    {
      name: "React",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium mattis tortor, at facilisis turpis tristique vel. Nam mollis vestibulum vulputate. Duis ac ante dignissim diam mollis cras amet. ",
      icon: {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        alt: "React"
      },
      website: {
        text: "http://test",
        url: "http://test",
      }
    }
  ]
};

