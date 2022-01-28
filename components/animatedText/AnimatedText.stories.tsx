import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AnimatedText } from './AnimatedText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Animated Text',
  component: AnimatedText,
} as ComponentMeta<typeof AnimatedText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AnimatedText> = (args) => <AnimatedText {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Betelgeuse',
};
