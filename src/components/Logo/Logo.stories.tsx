import {Logo} from "@/components/Logo/Logo";
import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from "react";

export default {
  title: 'Example/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => <Logo />;

export const 기본적인_사용법 = Template.bind({})
