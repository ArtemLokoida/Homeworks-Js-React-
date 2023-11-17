import logo from './logo.svg';
import './App.css';

const NavItem = ({children="ItemX", href="#"}) =>
<li><a href={href}>{children}</a></li>

const Card = ({children="Lorem ipsum..." ,src="img.png", h1="Lorem ipsum dolor sit amet."}) =>
<section>
  <img src={src} alt="img"/>
  <h1>{h1}</h1>
  <p>{children}</p>
  <div class="btn"><button>Go</button></div>
</section>

function App() {
  return (

    <div className="App">
      <header>
        <img class="logo" src="logo.svg" alt="logo"/>
        <nav class="nav burger-menu">
            <input id="menu-toggle" type="checkbox"/>
            <label class="menu-btn" for="menu-toggle">
                <span></span>
            </label>
            
            <ul class="nav-list">
                <NavItem>Item1</NavItem>
                <NavItem>Item2</NavItem>
                <NavItem>Item3</NavItem>
                <NavItem>Item4</NavItem>
                <NavItem>Item5</NavItem>
            </ul>
        </nav>
    </header>
    <main>
        <aside class="aside1">Aside1</aside>
        <article class="main-article">
            <section class="first-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deleniti quo doloremque iure enim ipsum vel, nam dicta nemo tempore alias laborum repudiandae odio accusantium maxime consequatur mollitia, impedit labore. Eos, reprehenderit mollitia laudantium alias quisquam at aliquid beatae esse velit nam porro doloremque blanditiis tempore ab deleniti illo quam?
            </section>
            <h1>OUR WORK</h1>
            <article class="content">
                <Card>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente iure cupiditate deleniti reprehenderit perspiciatis eius vero nihil ratione. Iusto tenetur fuga architecto corrupti facilis ad quasi nam in ut!</Card>
                <Card>Lorem ipsum dolor sit amet.</Card>
                <Card>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae laborum fuga ea sunt fugit quod eos dolorem? Facilis, repellendus recusandae?</Card>
                <Card>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, minima?</Card>
                <Card>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id repellat delectus nostrum totam dolore vel deserunt aliquam reiciendis maxime at labore nesciunt minima, esse quae inventore autem perspiciatis deleniti beatae!</Card>
                <Card>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id repellat delectus nostrum totam dolore vel deserunt aliquam reiciendis maxime at labore nesciunt minima, esse quae inventore autem perspiciatis deleniti beatae!</Card>
            </article>
        </article>
        <aside class="aside2">Aside2</aside>
    </main>
    <footer>Footer</footer>
    </div>
  );
}

export default App;
