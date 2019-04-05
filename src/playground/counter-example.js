class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }
  render() {
    const {count} =this.state;

    return(
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button disabled={count === 0} onClick={this.handleMinusOne}>-1</button>
        <button disabled={count === 0} onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
}



ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCountApp();
// }

// const minusOne = () => {
//   count--;
//   renderCountApp();
// }

// const reset = () => {
//   count = 0;
//   renderCountApp();
// }


// // Challenge
// // Make button "-1" -setup minusOne function and register - log "minusOne"
// // Make reset button "reset" - setup reset function and reguster - log "reset"
// const appRoot = document.getElementById('app');

// // ReactDOM.render(template, appRoot);

// const renderCountApp = () => {

//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )

//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCountApp();