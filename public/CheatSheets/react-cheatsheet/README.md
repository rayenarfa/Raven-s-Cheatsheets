# ⚛️ React Cheatsheet

A comprehensive reference guide for React library, including components, hooks, and modern patterns.

## 🏗️ Component Basics

### Functional Components

```jsx
// Basic functional component
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// Arrow function component
const Welcome = (props) => {
    return <h1>Hello, {props.name}</h1>;
};

// Destructured props
const Welcome = ({ name, age }) => {
    return <h1>Hello, {name}. You are {age} years old.</h1>;
};

// With default props
const Welcome = ({ name = "World", age = 0 }) => {
    return <h1>Hello, {name}. You are {age} years old.</h1>;
};
```

### Class Components

```jsx
class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

// With default props
Welcome.defaultProps = {
    name: "World"
};
```

## 🎣 Hooks (React 16.8+)

### useState Hook

```jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("John");
    const [user, setUser] = useState({ name: "John", age: 25 });

    // Update state
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);
    
    // Update object state
    const updateUser = () => setUser(prevUser => ({
        ...prevUser,
        age: prevUser.age + 1
    }));

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
```

### useEffect Hook

```jsx
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Run on every render
    useEffect(() => {
        console.log('Component rendered');
    });

    // Run only on mount
    useEffect(() => {
        console.log('Component mounted');
        return () => console.log('Component will unmount');
    }, []);

    // Run when userId changes
    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const response = await fetch(`/api/users/${userId}`);
            const userData = await response.json();
            setUser(userData);
            setLoading(false);
        };

        fetchUser();
    }, [userId]);

    // Cleanup function
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('Timer tick');
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (loading) return <div>Loading...</div>;
    return <div>{user?.name}</div>;
}
```

### useContext Hook

```jsx
import { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Consumer component
function ThemedButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={theme}
        >
            Current theme: {theme}
        </button>
    );
}

// App with provider
function App() {
    return (
        <ThemeProvider>
            <ThemedButton />
        </ThemeProvider>
    );
}
```

### useReducer Hook

```jsx
import { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        case 'set':
            return { count: action.payload };
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
}

function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
            <button onClick={() => dispatch({ type: 'set', payload: 10 })}>
                Set to 10
            </button>
        </div>
    );
}
```

### Custom Hooks

```jsx
// Custom hook for API calls
function useApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

// Custom hook for local storage
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
}

// Usage
function App() {
    const { data, loading, error } = useApi('/api/users');
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return <div>{/* render data */}</div>;
}
```

## 🔄 Component Lifecycle

### Class Component Lifecycle

```jsx
class LifecycleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log('Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should component update');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get snapshot before update');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did update');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    render() {
        console.log('Render');
        return <div>Count: {this.state.count}</div>;
    }
}
```

### Functional Component Lifecycle with Hooks

```jsx
function LifecycleComponent() {
    const [count, setCount] = useState(0);

    // componentDidMount equivalent
    useEffect(() => {
        console.log('Component mounted');
    }, []);

    // componentDidUpdate equivalent
    useEffect(() => {
        console.log('Count updated:', count);
    }, [count]);

    // componentWillUnmount equivalent
    useEffect(() => {
        return () => {
            console.log('Component will unmount');
        };
    }, []);

    return <div>Count: {count}</div>;
}
```

## 🎨 JSX Patterns

### Conditional Rendering

```jsx
function ConditionalComponent({ isLoggedIn, user }) {
    // If/else
    if (isLoggedIn) {
        return <div>Welcome back, {user.name}!</div>;
    } else {
        return <div>Please log in</div>;
    }
}

// Ternary operator
function WelcomeMessage({ isLoggedIn, user }) {
    return (
        <div>
            {isLoggedIn ? (
                <h1>Welcome back, {user.name}!</h1>
            ) : (
                <h1>Please log in</h1>
            )}
        </div>
    );
}

// Logical AND
function Notification({ message }) {
    return (
        <div>
            {message && <div className="notification">{message}</div>}
        </div>
    );
}

// Logical OR
function UserDisplay({ user }) {
    return (
        <div>
            {user.name || 'Anonymous User'}
        </div>
    );
}
```

### Lists and Keys

```jsx
function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                </li>
            ))}
        </ul>
    );
}

// With index (not recommended for dynamic lists)
function NumberList({ numbers }) {
    return (
        <ul>
            {numbers.map((number, index) => (
                <li key={index}>
                    {number}
                </li>
            ))}
        </ul>
    );
}

// Fragment for multiple elements
function UserInfo({ user }) {
    return (
        <>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.age} years old</p>
        </>
    );
}
```

## 🔧 Event Handling

```jsx
function EventHandling() {
    const handleClick = (event) => {
        console.log('Button clicked!');
        console.log(event.target);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
    };

    const handleChange = (event) => {
        console.log('Input changed:', event.target.value);
    };

    return (
        <div>
            <button onClick={handleClick}>
                Click me
            </button>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    onChange={handleChange}
                    onFocus={() => console.log('Input focused')}
                    onBlur={() => console.log('Input blurred')}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

// With parameters
function ParameterizedEvents() {
    const handleClick = (id) => {
        console.log('Clicked item:', id);
    };

    return (
        <div>
            {[1, 2, 3].map(id => (
                <button 
                    key={id}
                    onClick={() => handleClick(id)}
                >
                    Item {id}
                </button>
            ))}
        </div>
    );
}
```

## 📦 Props and State

### Props

```jsx
// Passing props
function ParentComponent() {
    return (
        <ChildComponent 
            name="John"
            age={25}
            isActive={true}
            user={{ name: "John", age: 25 }}
            onClick={() => console.log('clicked')}
        />
    );
}

// Receiving props
function ChildComponent(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Active: {props.isActive ? 'Yes' : 'No'}</p>
            <button onClick={props.onClick}>Click me</button>
        </div>
    );
}

// Props validation
import PropTypes from 'prop-types';

ChildComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isActive: PropTypes.bool,
    user: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    }),
    onClick: PropTypes.func
};

ChildComponent.defaultProps = {
    age: 0,
    isActive: false
};
```

### State Management

```jsx
// Local state
function Counter() {
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setIsActive(!isActive)}>
                Toggle Active
            </button>
        </div>
    );
}

// Complex state
function UserForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <form>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
            />
        </form>
    );
}
```

## 🎯 Performance Optimization

### React.memo

```jsx
import { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
    // Expensive computation
    const processedData = data.map(item => item * 2);
    
    return (
        <div>
            {processedData.map(item => (
                <div key={item}>{item}</div>
            ))}
        </div>
    );
});

// Custom comparison function
const CustomComponent = memo(({ data }) => {
    return <div>{data}</div>;
}, (prevProps, nextProps) => {
    return prevProps.data.id === nextProps.data.id;
});
```

### useMemo and useCallback

```jsx
import { useMemo, useCallback } from 'react';

function OptimizedComponent({ items, onItemClick }) {
    // Memoize expensive calculation
    const expensiveValue = useMemo(() => {
        return items.reduce((sum, item) => sum + item.value, 0);
    }, [items]);

    // Memoize callback function
    const handleClick = useCallback((id) => {
        onItemClick(id);
    }, [onItemClick]);

    return (
        <div>
            <p>Total: {expensiveValue}</p>
            {items.map(item => (
                <button 
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
}
```

## 🔗 React Router

```jsx
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users/123">User 123</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users/:id" element={<UserProfile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

function UserProfile() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h1>User Profile: {id}</h1>
            <button onClick={() => navigate('/')}>
                Go Home
            </button>
        </div>
    );
}
```

## 🎨 Styling

### CSS Modules

```jsx
// styles.module.css
.container {
    padding: 20px;
    background-color: #f0f0f0;
}

.title {
    color: #333;
    font-size: 24px;
}

// Component
import styles from './styles.module.css';

function StyledComponent() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Styled Title</h1>
        </div>
    );
}
```

### Styled Components

```jsx
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.primary ? 'blue' : 'gray'};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

function StyledApp() {
    return (
        <Container>
            <Button primary>Primary Button</Button>
            <Button>Secondary Button</Button>
        </Container>
    );
}
```

## 🔗 Useful Resources

- [React Documentation](https://react.dev/)
- [React Hooks Documentation](https://react.dev/reference/react)
- [Create React App](https://create-react-app.dev/)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)

---

**Happy coding! ⚛️** 