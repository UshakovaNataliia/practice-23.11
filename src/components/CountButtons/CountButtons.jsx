import React from 'react';
import shortid from "shortid";
import Button from '../Button/Button';

const btnSets = [{
    action: 'add',
    title: '+'
},
{
    action: 'minus',
    title: '-'
}, {
    action: 'mult',
    title: '*'
}, {
    action: 'dev',
    title: '/'
}, {
    action: 'result',
    title: '='
}];
const CountButtons = ({handlerResult}) => {
    return (
        <ul onClick={handlerResult}>
            {btnSets.map(el => (
                <li key={shortid.generate()}>
                    <Button title={el.title} action={el.action}/>
                </li>
            ))}
        </ul>
    )
};
export default CountButtons;