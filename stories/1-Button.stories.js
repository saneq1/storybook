import React, {useState} from 'react';

import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import Button from '../src/Elements/button/button'
 import css from './story.module.scss'
import Checkbox from "../src/Elements/checkbox/checkbox";


export default {
  title: 'Elements',
};

 // export const button = () => <Button onClick={action('clickessd')}>Кнопка</Button>;

export const button = () => {
  const [test, setTest] = useState(false);
  const ff =()=> setTest(!test)
return  <>
  <Button onClick=
              {action('clickessd')}
          className={`${ css.button} `}>Кнопка action</Button>
  <Button onClick=
                    { ()=>ff()}
                className={`${ css.button} ${test && css.red}`}>Кнопка set</Button>
  </>
};

export const checkbox = () => (
 <Checkbox/>
);

checkbox.story = {
  title: 'Elements',
  name: 'checkbox',
};


