import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom'
import Search from "./components/Search";
import Nav from "./pages/Nav";
import { Container } from "./style/Container.styled";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Nav/>
          <Search />
          <Category />
          <Pages />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
