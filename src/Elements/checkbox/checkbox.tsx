import React from 'react';

 import css from './button.module.scss'


export interface interfaceProps {

}

const Checkbox = () => {
    return <span>
        <input type="checkbox" name="a" id="cb11" /><label htmlFor="cb11"></label>
    </span>
};

export default Checkbox;
