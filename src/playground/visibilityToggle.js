class VisiblityToggle extends React.Component {
  constructor(props){
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visbility
      }
    })
  }

  render() {
    return(
      <div>
      <h1>Visiblity Toggle</h1>
      <button onClick={this.handleToggleVisibility}>
        {this.state.visibility ? 'Hide details' : 'Show details'}
      </button>
      {this.state.visibility && (
        <div>
          <p>Hey what is up, here are your details</p>
        </div>
      )}
    </div>
    )
  }
}

ReactDOM.render(<VisiblityToggle />, document.getElementById('app'));







// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };


// const render = () => {
//   const jsx = (
    // <div>
    //   <h1>Visiblity Toggle</h1>
    //   <button onClick={toggleVisibility}>
    //     {visibility ? 'Hide details' : 'Show details'}
    //   </button>
    //   {visibility && (
    //     <div>
    //       <p>Hey what is up, here are your details</p>
    //     </div>
    //   )}
    // </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'))
// }

// render();