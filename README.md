# Calculator Application
implemented in React with javascript
using redux for state management
react-router for routing

## Pages

### Login - 
fields: email and password with confirm Password
### Main
holds the tabs component and header component
### Header
### Tabs
a component that gets a list of tab each tab hold one component 
Calculator tab (default active tab)
### Calculator & History within Tabs

## Custom Hooks
useLoginFormValidator - for chalking form fields (using utils - validators)
useLocalStorage - for holding username between pages

## 3rd party libs
craco - Create React App Configuration Override is an easy and comprehensible configuration layer for create-react-app.
without using 'eject' by adding a single configuration (e.g. craco.config.js) file at the root of your application 
and customize your eslint, babel, postcss configurations and many more.
"start": "craco start",

clsx - utility for constructing className strings conditionally.
Also serves as a faster & smaller drop-in replacement for the classnames module.
clsx('foo', [1 && 'bar', { baz:false, bat:null }, ['hello', ['world']]], 'cya');

tailwindcss - for the design 
