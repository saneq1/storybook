import React from 'react';
import { linkTo } from '@storybook/addon-links';
import '../src/assets/style/base.scss'
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <button onClick={linkTo('Elements' )}>Elements</button>;

ToStorybook.story = {
  name: 'to Storybook',
};
