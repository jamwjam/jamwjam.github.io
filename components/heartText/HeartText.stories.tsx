import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeartText } from './HeartText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Heart Text',
  component: HeartText,
} as ComponentMeta<typeof HeartText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeartText> = () => <HeartText />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
