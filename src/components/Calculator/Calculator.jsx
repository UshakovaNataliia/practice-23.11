import React, {Component} from 'react';
import Screen from '../Screen/Screen';
import WidgetPannel from "../Pannel/WidgetPannel";
import CountButtons from '../CountButtons/CountButtons';

class Calculator extends Component {
    state = {
        value: '',
        result: '',
        action: ''
    }
    onClick = ({target}) => {
        if (target.nodeName !== 'BUTTON') return;
        // console.log(target.textContent);
        this.setState(prevState => {
            return { value: prevState.value + target.textContent };
        });
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('value', this.state.value);
        console.log('result', this.state.result);
        console.log('this.state.action :>> ', this.state.action);
        if (this.state.action === 'result' && prevState.action !== this.state.action) {
            // console.log('this.state.result :>> ', this.state.result);
            this.setState(
                {
                    value: +this.state.result + +this.state.value,
                    result: ''
                }
            )
        }
    }
    getResult = ({ target }) => {
        if (target.nodeName !== 'BUTTON') return;
        this.setState(
            {action: target.dataset.action}
        )
        if (this.state.action === 'result') {
            this.setState(prevState => {
              console.log('this.state.value :>> ', this.state.value); 

            switch (prevState.action) {
                case 'add':
                    console.log('this.state.result :>> ', this.state.result);
                    return {
                        result: +this.state.value,
                        value: +prevState.result + +this.state.value
                    }
                case 'minus':
               return {value: +prevState.result - +this.state.value}
               
                default:
                    return;
            }
            })
        } else if (target.dataset.action === 'add') {
            this.setState(prevState => (
                {
                    action: 'add',
                    result: +prevState.result + +this.state.value,
                    value: '',
                }
            ));
        } else if (target.dataset.action === 'minus') {
            this.setState(prevState => (
                {
                    action: 'minus',
                    result: +prevState.result - +this.state.value,
                    value: '',
                }
            ));
        } 
    }
    
    render() {
        return (
          <section>
            <h2>Calculator</h2>
                <Screen value={this.state.value}/>
                <WidgetPannel handlerClick={this.onClick} />
                <CountButtons handlerResult={this.getResult}/>
          </section>
        )
    };

};
export default Calculator;