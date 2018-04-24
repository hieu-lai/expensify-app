class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
       return {
         visibility: !prevState.visibility
       };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide message' : 'Show message'}
        </button>
        {this.state.visibility && (
          <div>
            <p>'Just a random message!'</p>
          </div>  
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let sentence = '';

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggle}>{sentence.length > 0 ? 'Hide details' : 'Show Details'}</button>
//       {sentence && <p>{sentence}</p>}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// const toggle = () => {
//   if (sentence) {
//     sentence = '';
//   } else {
//     sentence = 'Hope this works!';
//   }
//   renderApp();
// };

// const appRoot = document.getElementById('app');

// renderApp();


