import React from 'react'; 
// import the components
import Screen from './Screen'; 
import Keypad from './Keypad'; 

class Calculator extends React.Component {
    state = {
        equation: '',
        result: 0
    }

    enterListener = event =>{
        event.preventDefault(); 
        const result = eval(this.state.equation);
        console.log(this.enterListener)
        this.setState({result});
        this.forceUpdate(); 
    }

    onChangeHandler = event => {
        event.preventDefault(); 
        this.setState({equation : event.target.value}); 
        this.forceUpdate(); 
    }

    onButtonPress = event =>{
        let equation = this.state.equation;
        const pressedButton = event.target.innerHTML;

        if (pressedButton === 'C') 
            return this.clear();

        else if ((pressedButton >= '0' && pressedButton <= '9')
            || pressedButton === '.'){ 
            equation += pressedButton;
            console.log(equation);} 

        else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1){
            equation += ' ' + pressedButton + ' '; 
            console.log(equation);} 

        else if (pressedButton === '=') {
            try{
                const evalResult = eval(equation);
                const result = Number.isInteger(evalResult) ? 
                evalResult : evalResult.toFixed(2);
                this.setState({result});
            } catch (error) {
                alert('Invalid Mathematical Equation...'); 
            }
        } 
        else {
            equation = equation.trim();
            equation = equation.substr(0, equation.length - 1); //for the leftArrow button
        }
        this.setState({equation: equation}); 
    }

    clear() {
        this.setState({equation: '', result: 0}); 
    }

    render() {
        return(
            <main className="calculator">
                <Screen
                    enterListener={this.enterListener}
                    onChangeHandler={this.onChangeHandler} 
                    equation={this.state.equation} 
                    result={this.state.result}/>
                <Keypad onButtonPress={this.onButtonPress}/>
            </main>
        );
    }
}

export default Calculator; 

