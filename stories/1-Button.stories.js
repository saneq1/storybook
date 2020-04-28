import React, {useState} from 'react';

import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import Button from '../src/Elements/button/button'
 import css from './story.module.scss'


export default {
  title: 'Buttons',
};

// export const Text = () => <Button onClick={action('clickessd')}>Hello Button</Button>;

export const Buttons = () => {
  const [test, setTest] = useState(false);
return  <Button onClick={()=>setTest(!test)} className={`${test && css.red}`}>Hello Buttons</Button>
};

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
//
// Emoji.story = {
//   title: 'Buttons1',
//   name: 'with emoji',
// };
