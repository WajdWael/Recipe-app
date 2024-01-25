# Recipe-app project using react


![image](https://github.com/WajdWael/Recipe-app/assets/81550668/7c70f9d4-ca52-4ac7-8d5c-bf9cd123c9e6)
[Vist site](https://wajdwael.github.io/Recipe-app/)

# Tools: ⛏️
- React.js
- JavaScript
- CSS/HTML
- JSX
- Git/GitHub
- APIs
- styled-components
- framer-motion
---

# Goals: 🧠
- Learn APIs
- Fetch data
- Render data
- Filter data
- First touch with styled-components
- Adding Framer-motion

---

## Let's discuss the two most important points:

# What are styled-components 💅?
![image](https://github.com/WajdWael/Recipe-app/assets/81550668/03bbf4cf-3d7d-460f-9e36-bc8aaf4cc494)

Styled components can easily style HTML documents, most commonly used with **Reactjs**. They **provide a package of features** allowing you to apply JavaScript, CSS, and Sass features in one library. The syntax and concepts are easy to understand, making it easy to start. Additionally, styled-components support dynamic and conditional styling based on props, as well as **the ability to nest components** and create global styles. They offer a wide range of features to **handle complex styling** needs while maintaining the benefits of component-based architecture. 

---

## How to write styles with styled-components?

1. Download the dependency:
```
npm install styled-components
yarn add styled-components
```

2. Import `import styled from 'styled-components'`

3. Create styled file `FileName.styled.js`

>       Cause our styled-component file ends with FileName.styled.(js/ts) we need to write it in javascript format:


4. Declare a `const` and name it.
`const Button`

5. specify an HTML element you want to design `Button, header, h1, section` In our example we will have 
`const Button = styled.button`

6. Use backticks to include all the styles inside [``]
```JS
const Button = styled.button`
   course: pointer;
   font-size: 1rem;
   border: none;
   background-color: #333;
   color: #fff;
`
```

7. Don't forget to export it, `export Button`

---
## After writing the styles, how to apply them?

### Usage:

1. **Separate** styles from code: 

`src/style/Container.styled.js`
```JS
import styled from "styled-components";

export const Container = styled.div`
    padding: 0 16px;
    margin: 0 auto;
    width: 100%;
    /* xsm */
    @media (min-width: 576px) {
        width: 540px;
    }
    /* sm */
    @media (min-width: 768px) {
        width: 720px;
    }
    /* md */
    @media (min-width: 992px) {
        width: 960px;
    }
    /* lg */
    @media (min-width: 1200px) {
        width: 1140px;
    }
`
```
---
`src/App.jsx`
```JS
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
        <Container>
            ...
        </Container>
    </div>
  );
}

export default App;
```

---

2. **Add** styles to the same file:

`src/pages/Nav.jsx`

```JS
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <NavStyles
            animate={{ opacity: 1 }}
            ...
        >
            <Logo to={"/"}>...</Logo>
        </NavStyles>
    )
}

const Logo = styled(Link)`
    font-size: 3.785rem;
    font-weight: 400;
`;

const NavStyles = styled(motion.div)`
    padding: 4rem 0rem;
    display: flex;

    svg{
        font-size: 3rem;
    }
`
```


---


# How to fetch data?

We will discuss the code from `src/components/Popular.jsx`:

```JS
export default function Popular() {
    // Set array that will hold data
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        // Run this function as soon as the component gets mounted
        getPopular();
    }, []) // The job of this empty array is to tell it: to only run when the component gets mounted.

    // fetch api to get the respies
    const getPopular = async () => {

        // add it in local storge
        // check if the local storge is empty
        const check = localStorage.getItem('popular');

        if (check) {
            // use what is in the localstorge + don't fitch
            // parse => change string to an array
            setPopular(JSON.parse(check));
        } else {
            // here you can fitch
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
            const data = await api.json();

            // strigify => change array to an string.
            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }
    }

    // JSX 
    return (
        <div?>
           {/* map (Loop) over the recipes to get the data */}
           {popular.map((recipe) => {
               return (
                   <SplideSlide key={recipe.id}>
                       <Card>
                           <Link to={'/recipe/' + recipe.id}>
                               <p>{recipe.title}</p>
                               <img src={recipe.image} alt={recipe.title} />
                               <Gradient />
                           </Link>
                       </Card>
                   </SplideSlide>
               )
           })}
        </div>
    )
} 
```

So first if you want to fetch data you should use:

1. `fetch()` it should be inside an:

# What's an fetch()?
The **fetch()** function is a built-in JavaScript function that is used to make network requests and retrieve resources from a specified URL. It is commonly used to perform HTTP requests in web applications.

When you call fetch(url), it returns a Promise that represents the eventual completion (or failure) of the network request. 

**The Promise resolves to a Response object that contains information about the response to the request.**


2. `async` function:

# What's an async function?
An async function is a type of JavaScript function that allows you to write asynchronous code. It simplifies working with promises and provides a more synchronous-like syntax for handling asynchronous operations.

[I highly recommend that you watch this video to gain a better understanding of the main idea:](https://www.youtube.com/watch?v=cCOL7MC4Pl0&t=0s)

3. It can't be an async function without `await`: 

# What does the `await` keyword do?
The await function **pauses** the execution of its surrounding async function until the promise is settled, If the promise is rejected, the await expression throws the rejected value. Because await is only valid inside async functions and modules, which themselves are asynchronous and return promises, the await expression never blocks the main thread and only defers execution of code that depends on the result, i.e. anything after the await expression.

If a Promise is passed to an await expression, it waits for the Promise to be fulfilled and returns the fulfilled value.
```JS
 const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
 const data = await api.json();
```

[Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)



