
![npm](https://img.shields.io/npm/dt/react-js-paginator.svg)
![npm](https://img.shields.io/npm/v/react-js-paginator.svg)
![npm](https://img.shields.io/npm/l/react-js-paginator.svg)

# React-js-paginator
Simple react JS paginator

# Description

Simple React JS Pagination component. Can be easily customized with CSS objects

# How it looks

![alt text](screenshots/paginator_w_styles.png "React JS pagination")

# Installation

Install it from npm and include it in your React build process (using Webpack, Browserify, etc).

```
npm i react-js-paginator
```

# Usage

It is really easy to use, just: 

Import `Paginator` in your react component.

```javascript
import Paginator from 'react-js-paginator';
```

And then specify the page size, total elements and a callback function.

For example:
```javascript
<Paginator
  pageSize={10}
  totalElements={64}
  onPageChangeCallback={(e) => {this.pageChange(e)}}
/>
```
Once the page has changed, will trigger the callback function and send back the current page.

Styles can be customized using `pageBoxStyle` and `activePageBoxStyle` props like:

```javascript
pageBoxStyle={{
	border: 0, 
	color: 'black', 
	padding: 3, 
	fontSize: 16
}}
```

```javascript
activePageBoxStyle={{
	fontWeight: 'bolder', 
	color: 'green'
}}
```

Giving you as result:

![alt text](screenshots/paginator_custom.png "React JS pagination custom")


# Props

| Name        | Type            | Mandatory | Description  
| ------------- |:-------------:| -----:|:-----|
| pageSize      | int | Y |How many elements will compose a page |
| totalElements | int | Y   | Total elements you have in store |
| onPageChangeCallback | function    | Y| function to be triggered when a page change happens |
| pageBoxStyle | object    | N| style object for each pagination box |
| activePageBoxStyle | object    | N| style object the active page |
| maxPagesToDisplay | int    | N| how many pages will be displayed at the same time in the paginator (default 6)|

# License 

Licensed under the MIT License.
