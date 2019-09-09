This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React hook boilerplate is redux like application but no redux

You could use this quickly setup for react hook working with context api and use multiply reducer applications. No more redux needed anymore.

![Sample](./src/sample.png?raw=true "Book component")

In the project directory, you can run:

### `npm start`


## The Setup

Make sure you have Nodejs installed on your machine (I’m using version v12.6.0) and we’ll put the app together using,
create-react-app:
`$ npx create-react-app react-hooker-boilerplate`

Once it’s done, start it by running `$ npm start` in your project directory.
Then open the package.json file. require node version 16.8 above 

## The "react-hooker-boilerplate" will follow Redux three fundamental **principles**, **stores**, **actions**, and **reducers**. But build by useing context api working with useReducer

### `npm i react-router-dom`

- let's start from create a store first, I have create configureStore.js under store folder

```javascript
import React, {createContext, useContext, useReducer} from 'react';

import rootReducer, { initialState } from '../reducers/index';

const StateContext = createContext();
const DispatchContext = createContext();

export const useStateValue = () => useContext(StateContext);
export const useDispatch = () => useContext(DispatchContext);

function Store(props) {
    
    const [state, dispatch] = useReducer(rootReducer, initialState);
    
    return (
       <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
           {props.children}
        </StateContext.Provider>
      </DispatchContext.Provider>
    );
  }


export default Store;

```

- since application grow will handle more and more complex state, so I create two separate reducer as example how to handle them 

- userReducer

```javascript

import { UPDATE_SELECTED_USER } from '../constants/actionConstants';


const userReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_SELECTED_USER: 
            return {
                ...state,
                selected: action.selected
            }
  
        default:
            return state;
    }
  }
  
  export default userReducer;

```

- bookReducer

```javascript
    import { UPDATE_SELECTED_BOOK } from '../constants/actionConstants';

    const bookReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_SELECTED_BOOK:
            return {
                ...state,
                selected: action.selected
            }

        default:
        return state;
    }
    }

    export default bookReducer;
```


- rootReducer

```javascript
    import bookReducer from './bookReducer';
    import userReducer from './userReducer';

    const rootReducer = ({book, user}, action) => {
        // middleware goes here, i.e calling analytics service, etc.
    
        return {
            book: bookReducer(book, action),
            user: userReducer(user, action)
        }
    }

    export const initialState = {
        user: {
            list: [
                {
                "balance": "$3,946.45",
                "picture": "http://placehold.it/32x32",
                "age": 23,
                "name": "Bird Ramsey",
                "gender": "male",
                "company": "NIMON",
                "email": "birdramsey@nimon.com"
                },
            ....
            
                ],
        selected: null
        },
        book: {
        selected: null,
        list: [
            {
            "author": "Chinua Achebe",
            "country": "Nigeria",
            "imageLink": "images/things-fall-apart.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
            "pages": 209,
            "title": "Things Fall Apart",
            "year": 1958
            },
            ...
            ]
        }
    }

    export default rootReducer;

```

- action that work exactly like redux

```javascript
    import { UPDATE_SELECTED_USER } from  '../constants/actionConstants';

    export const updateSelectedUser = (dispatch, user) => 
        dispatch ({
            type: UPDATE_SELECTED_USER,
            selected: user
        })

```

- UserComponent build in react hook and reader data from your stor and fire action

```javascript
    import React from 'react'
    import { useStateValue, useDispatch } from '../../store/configureStore';
    import { updateSelectedUser } from '../../reducers/user.action';

    const UserInfo = ({user, selected, onClick}) => {

        const handleClick = (user) => e => {
            onClick(user);
        };

        return (
        <tr 
            onClick={handleClick(user)} 
            className={`${user === selected ? 'hightlight' : '' }`}
        >
            <td>{user.balance}</td>
            <td><img src={user.picture} width={60} height={80}/></td>
            <td>{user.age}</td>
            <td>{user.name}</td>
            <td>{user.gender}</td>
            <td>{user.company}</td>
            <td>{user.email}</td>
        </tr>
        )


    }


    export default function UserComponent() {
        const {user} = useStateValue();

        const {list, selected} = user;

        const dispatch = useDispatch();

        const handleOnClick = user => updateSelectedUser(dispatch, user);
        
        return (
            <table>
            <tbody>
            <tr>
                <th>balance</th>
                <th>picture</th>
                <th>age</th>
                <th>name</th>
                <th>gender</th>
                <th>company</th>
                <th>email</th>
            </tr>

            {list.map( (item, idx) => <UserInfo key={idx} user={item} selected={selected} onClick={handleOnClick} /> )}
            </tbody>
        </table>
        )
    }

```

- appRouter.js

```javascript

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    BookComponent,
    UserComponent,
    Home
} from './components/';


const  AppRouter = () => {
    return (
        <Router>
            <div>

            <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
        </ul>

        <hr />
            
           

            <Route exact path="/" component={Home} />
            <Route path="/user" component={UserComponent} />
            <Route path="/book" component={BookComponent} />
            </div>
            
        </Router>
    )
}

export default AppRouter;


```

- App.js

```javascript

import React from 'react';
import AppRouter from './AppRouter';
import './App.css';
import Store from './store/configureStore';

function App() {
  return (
    <Store>
      <AppRouter/>
   </Store>
  );
}

export default App;


```

- middleware that could be build a separeat file and put it into my rootReduce

```javascript
const rootReducer = ({book, user}, action) => {
    // middleware goes here, i.e calling analytics service, etc.
   
    return {
        book: bookReducer(book, action),
        user: userReducer(user, action)
    }
}

```



## Conclusion

As you can see with the power of the context api and react hooks it can entirely get rid of redux but working like redux application. 

