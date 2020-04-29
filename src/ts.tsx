import React, {useState} from 'react';
import Button from "./Elements/button/button";
import './scss.scss'
import css from './ts.module.scss'
import Checkbox from "./Elements/checkbox/checkbox";

const MyComponent = () => {

    const [test, setTest] = useState<boolean>(false);

    return (
        <div>
            <Button onClick={() => setTest(!test)} className={css.just}>Кнопка</Button>
            <Checkbox/>
        </div>
    );
};

export default MyComponent;
