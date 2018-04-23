let sentence = '';

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggle}>{sentence.length > 0 ? 'Hide details' : 'Show Details'}</button>
      {sentence && <p>{sentence}</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const toggle = () => {
  if (sentence) {
    sentence = '';
  } else {
    sentence = 'Hope this works!';
  }
  renderApp();
};

const appRoot = document.getElementById('app');

renderApp();


