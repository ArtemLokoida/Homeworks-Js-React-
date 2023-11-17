import logo from './logo.svg';
import './App.css';

const name ="Artem"

const Header = ({children, size="100px"}) =>
<header className="App-header">
    <img style={{minHeight:size}} src={logo} className="App-logo" alt="logo" />
    {children}
</header>
const Add = ({a, b}) =>

<div>
  a + b = {a} + {b} = {a+b}
</div>

function App() {
  return (
    <div className="App">
      {/* Hello
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {2+2} <br/>
        {name}
      </header> */}
      <Header>Hello World!</Header>
      <Header>Hi!</Header>
      <Add a={5} b={3}/>
      <Add a={6} b={-2}/>
      <Add a="hel" b="loo"/>
      {/* <Main/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
