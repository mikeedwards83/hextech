import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SideBar from './SideBar';
import './SideBar.scss'


export default {
  title: 'components/SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  siteName: "HexTech",

  links: [
    {
      text: "Home",
      url: "/link1",
      icon: "home"
    },
    {
      text: "Create",
      url: "/link2",
      icon: "create"
    },
    {
      text: "Team",
      url: "/link2",
      icon: "team"
    }],
  linkSets: []
};
Default.decorators = [(Story) => <div style={{ minHeight: "100vh" }}><Story /></div>]
