

# Clean Earth Society

<h1 align="center">	
	<img src="https://github.com/swilcox21/clean-earth-society/blob/master/src/img/clean-earth-society-homepage.gif?raw=true" width="500">
</h1>
<h4 align="center">An Environmental Charity Market Place</h4>

&nbsp; &nbsp; &nbsp; A one stop shop for environmentally aware individuals looking to make a difference. Users will be presented with loads of
valuable information on global environmental issues and given a list of informative articles to browse though and amazing
charities to choose from to make a contribution towards improving the health of our planet.
<br>
<br>
##### Languages:
&nbsp; &nbsp; &nbsp; React.js, javascript, Python, HTML, css, bootstrap, Github, SQLAlchemy, Flux

<h3>
	Check it out!
	<a href="https://clean-earth-society.vercel.app/" target="_blank">
	<br>
	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img src="https://github.com/swilcox21/GIFs/blob/main/triple-down-arrows.gif?raw=true" height="50">
	<br>
	https://clean-earth-society.vercel.app/
	</a>
</h3>

# Demo
### Login | Register | Edit 
<h1>
	<a href="https://clean-earth-society.vercel.app/login" target="_blank">
		<img src="https://github.com/swilcox21/clean-earth-society/blob/master/src/img/clean-earth-society-login.gif?raw=true" width="500"> 
	</a>
</h1>

## Donate
##### (takes user directly to the chosen charities donation page)
<h1>
	<a href="https://clean-earth-society.vercel.app/charities" target="_blank">
		<img src="https://github.com/swilcox21/clean-earth-society/blob/master/src/img/clean-earth-society-donate.gif?raw=true" width="500"> 
	</a>
</h1>

## Shop
<h1>  
	<a href="https://clean-earth-society.vercel.app/shop" target="_blank">
		<img src="https://github.com/swilcox21/clean-earth-society/blob/master/src/img/clean-earth-society-shop.gif?raw=true" width="500"> 
	</a>
</h1>


### Requirements:
- Make sure you are using node version 10

1. Install the packages:
```
$ npm install
```
2. Create a .env file:
```
$ cp .env.example .env
```
3. Start coding! and the webpack dev server with live reload, for windows, mac, linux or Gitpod:

```bash
$ npm run start
```

### Styles
You can update the `styles/index.scss` or create new `.scss` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components
Add more files into your `./src/js/components` or styles folder as you need them and import them into your current files as needed.

**Note (New changes)**: Components have been converted into functions to support the use of hooks:
* Instead of a class component, we're using a `const` function.
* Class `constructor` and `state` have been replaced by `useState()` hooks.
* `componentDidMount()` was replaced by `useEffect({}, [])` - It runs at mount thanks to the second parameter (`[]`).
* `Actions` and `Store` still work the same way.

```jsx
// Previous "Class Oriented"
export class Demo extends React.Component {
	constructor(props) {
		super(props);

		this.state = getState('code here');
	}
}

// New "Functional Oriented"
export const Demo = () => (
	const [state, setState] = getState('code here'); //using the state (if needed)
  const { store, actions } = useContext(Context); // using the context (if needed)

);
```

💡Note: There is an example using the Context API inside `views/demo.js`;

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)
BreathCode Lesson [view](https://content.breatheco.de/lesson/react-hooks-explained)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context. Check `/views/demo.js` to see a demo.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>
}
```

## Publish your website!

1. **Vercel:** The FREE recomended hosting provider is [vercel.com](https://vercel.com/), you can deploy in 1 minutes by typing the following 2 commands:

Login (you need to have an account):
```sh
$ npm i vercel -g && vercel login
```
Deploy:
```sh
$ vercel --prod
```
✎ Note: If you don't have an account just go to vercel.com, create a account and come back here.

![Vercel example procedure to deploy](https://github.com/4GeeksAcademy/react-hello-webapp/blob/4b530ba091a981d3916cc6e960e370decaf2e234/docs/deploy.png?raw=true)

2. **Github Pages:** This boilerplate is 100% compatible with the free github pages hosting.
To publish your website you need to push your code to your github repository and run the following command after:
```sh
$ npm run deploy
```
Note: You will need to [configure github pages for the branch gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)
