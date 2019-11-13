// true ? (let x = 3) console.log(x) : console.log('no')

// <Route component={NoMatch} />

// const test = ({a: A, ...rest}) => {
//   console.log(A, rest);
// };
//
// test({a: 5, b:1, c:2});

// <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />

// import React from 'react';
// import PropTypes from 'prop-types';
// import {Pagination} from 'react-bootstrap';
//
// const Paginate = ({termsPerPage, totalTerms, currentPage, paginate, seeMore}) => {
//   const pageNumbers = [];
//   let active = currentPage;
//
//   for(let i = 1; i <= Math.ceil(totalTerms / termsPerPage); i++) {
//     pageNumbers.push(
//       <Pagination.Item key={i} active={i === active} onClick={() => paginate(i)}>
//         {i}
//       </Pagination.Item>
//     );
//   };
//
//   return (
//     <Pagination>
//       {pageNumbers.length > 1 && <Pagination.First onClick={() => paginate(1)}/>}
//       {pageNumbers.length > 0 && <Pagination.Prev>Previous</Pagination.Prev>}
//       {pageNumbers}
//       {pageNumbers.length > 0 && <Pagination.Next>See more</Pagination.Next>}
//     </Pagination>
//   );
// };
//
// Paginate.propTypes = {
//   termsPerPage: PropTypes.number.isRequired,
//   totalTerms: PropTypes.number.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   paginate: PropTypes.func.isRequired,
//   seeMore: PropTypes.func.isRequired
// };
//
// export default Paginate;


// const clearError = dispatch => {
//   dispatch({
//     type: CLEAR_ERROR
//   });
// };
//
// console.log(clearError);

// const arr = [{kanji: 'one'}, {kanji: 'two'}, {kanji: 'three'}];
// const includes = arr.some(obj => obj.kanji === 'four');
// console.log(includes);

// const x = false;
// const y = true;
//
// if (x || y) {
//   console.log('true');
// } else {
//   console.log('false');
// };

// <div>{String.fromCharCode(0x2713)} Added</div>
// <div>{"\u2713 Added"}</div>

// const english = [{english_definitions: ['a', 'b', 'c']}];
// console.log(english[0].english_definitions.join('; '));


// const tempArray = [
//   {kanji: '本', kana: 'ほん', english: 'book'},
//   {kanji: '家', kana: 'いえ', english: 'house'},
//   {kanji: '犬', kana: 'いぬ', english: 'dog'}
// ];
// const tempArray = null;

// <Nav.Link eventKey="disabled" disabled style={{color: 'white'}}>
//   {user && user.name}
// </Nav.Link>

// function warnTheSheep(queue) {
//   if (queue[queue.length - 1] === 'wolf') {
//     return 'Pls go away and stop eating my sheep';
//   };
//
//   let rev = [...queue];
//   rev.reverse();
//   let n = rev.indexOf('wolf');
//   return `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`;
// }
//
// warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]);
// warnTheSheep(["sheep", "sheep", "wolf"])

// const func = (a,b,c) => {
//
// };

// function func1() {
//   console.log('func1: ', this);
//   const obj = {
//     func2() {
//       console.log('func2: ', this);
//       // let that = this;
//       function func3() {
//         console.log('func3: ', this);
//       }
//       func3();
//       const func4 = () => {
//         console.log('func4: ', this);
//       };
//       func4();
//     }
//   };
//   // obj.func2.bind(this)();
//   obj.func2();
// };
// func1();

// const obj = {
//   name: 'mimi',
//   age: 40,
//   func1() {
//     console.log(`${this.name} is ${this.age} years old`);
//   }
// };
//
// const obj2 = {
//   name: "mariko",
//   age: 28
// };
//
// const func2 = obj.func1.bind(obj2);
// func2();
// const obj = {
//   func1() {
//     console.log('func1: ', this);
//     let that = this;
//     function func2() {
//       console.log('func2: ', that);
//     };
//     func2();
//   }
// };
// obj.func1();

// function func2() {
//   console.log("this: ", this);
//   function func3() {
//     console.log('func3 this: ', this);
//   };
//   func3();
// };
// func2();
//
//
// const obj = {
//   func1() {
//     console.log('this: ', this);
//   }
// };
//
// obj.func1();



// function scope() {
//   console.log(this);
//   let that = this;
//   return function() {
//     console.log(that);
//   };
// };
// let inner = scope();
// inner();
// const demoMemo = func => {
//   return () => {
//     console.log(func);
//     console.log(arguments[0]);
//   };
// };
//
// const adder = demoMemo(function(num){
//   num + num;
// });

// const arr = [1,2,3];
// const arr2 = ['a', 'b', 'c'];
// const result = arr.push.apply(arr, arr2);
// console.log(result);
// console.log(arr);

// const arr = [1,3,5,7,3,4,77];
// const apply = Math.max.apply(null, arr);
// console.log(apply);
// const spread = Math.max(...arr);
// console.log(spread);

// function func(a, b, c) {
//   const stringified = JSON.stringify(arguments)
//   console.log(stringified);
//   console.log(arguments);
// };
// func(10, 11, 12);
//
// const arr = [1,2,3];
// console.log(JSON.stringify(arr));

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/Home';
// import About from './components/About';
// import Dictionary from './components/Dictionary';
// import VocabList from './components/VocabList';
// import Registration from './components/Registration';
// import Header from './components/Header';
// import Login from './components/Login';
// import {connect} from 'react-redux';
// import {BrowserRouter as Router,
//   Switch,
//   Route} from 'react-router-dom';
//
// const App = ({isAuthenticated}) => {
//   const PrivateRoute = ({component: Component, ...rest}) => {
//     return (
//       <Route
//         {...rest}
//         render={props =>
//           isAuthenticated === true ? (
//             <Component {...props} />
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login"
//               }}
//             />
//           )
//         }
//       />
//     );
//   };
//
//   return (
//     <Router>
//       <div>
//         <Header />
//
//         <Switch>
//           <Route exact path='/' component={Home} />
//           <Route path='/dictionary' component={Dictionary} />
//           <Route path='/about' component={About} />
//           <Route path='/registration' component={Registration} />
//           <Route path='/login' component={LoginPage} />
//           <PrivateRoute path='/vocablist' isAuthenticated={isAuthenticated} component={VocabList} />
//         </Switch>
//       </div>
//     </Router>
//
//   );
// }
//
// const mapStateToProps = state => ({
//   isAuthenticated: state.authenticate.isAuthenticated
// });
//
// export default connect(mapStateToProps)(App);



// import React from 'react';
//
// const LoginStatus = ({token}) => (
//   {token
//     ?
//     <Nav.Link variant="link" onClick={handleShow}>Logout</Nav.Link>
//     :
//     <Nav>
//       <Nav.Link variant="link" onClick={handleShow}>Login</Nav.Link>
//       <Login
//         show={show}
//         onHide={handleClose}
//       />
//     </Nav>
//   }
// );
//
// export default LoginStatus;



// const isPalindrome = str => {
//   return (str === str.split('').reverse().join('') ? true : false);
// };
//
// isPalindrome('gog');

// const isPalindrome = str => {
//   if (str === str.split('').reverse().join('')) {
//     return true;
//   };
//   return false;
// };
//
// isPalindrome('god');
//
// const reverse = str => {
//   const arr = [...str];
//   const rev = [];
//
//   for(let i = 0; i < arr.length; i++) {
//     rev.unshift(arr[i]);
//   };
//   return rev;
// };
//
// const reverseForEach = str => {
//   const arr = [...str];
//   const rev = [];
//
//   arr.forEach(val => rev.unshift(val));
//   return rev;
// };
//
// const compare = (a1, a2) => {
//   for (let j = 0; j < a1.length; j++) {
//     if (a1[j] !== a2[j]) {
//       return false;
//     };
//   };
//   return true;
// };
//
// const isPalindrome = string => {
//   //transform string to an array
//   const arr1 = [...string];
//   //create an array with its values the reverse order of arr1
//   const arr2 = reverseForEach(string);
//   //test whether arr1 and arr2 are the same
//   return compare(arr1, arr2);
// };
//
// console.log(isPalindrome('gog'));


// 1. string to array
// 2. new string that is reverse of string
// 3. iterate and compare the two strings
// 4. return true if all indexes match; otherwise false
// const config = {
//   headers: {"Content-Type": "application/json"}
// };
//
// const jsonUser = JSON.stringify(user);

// const user = {
//   name: 'joe',
//   age: 55
// };
//
// const x = user.name;
// const y = user.age
//
// const newUser = JSON.stringify({x, y});
// const jsonUser = JSON.stringify(user);
//
// console.log('newUser: ', newUser);
// console.log('jsonUser: ', jsonUser);

// Header.js
// import React from 'react';
// import HeaderLoggedIn from './HeaderLoggedIn';
// import HeaderLoggedOut from './HeaderLoggedOut';
//
// redux state: userLoggedIn
//
// const Header = () => (
//   {userLoggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
// );
//
// export default Header;

// <Row>
//   <Col xs={10}>
//     <h2>{resultWord}</h2>
//   </Col>
//   <Col xs={2}>hey</Col>
// </Row>
//
// <Row>
//   <h2>{resultWord}</h2>
// </Row>
//
// <Row>
//   <h2 className="text-justify">hey hey</h2>
// </Row>

// const Term = ({resultWord, resultReading, meaning}) => (
//     <Card style={{marginBottom: 10, padding: 10, boxShadow: "1px 2px 5px grey",
//                   backgroundColor: 'rgb(245, 250, 250)'}}>
//       <Row>
//         <Col xs={12} md={3}>
//           <h2>{resultWord}</h2>
//         </Col>
//         <Col xs={12} md={9} style={{paddingTop:8}}>
//           <Row>
//           <p style={{fontSize:"125%"}}>{resultReading} </p>
//           </Row>
//           <Row>
//             <ol>
//               {meaning.map(def => (
//                 <li key={uuid()}>
//                   <p style={{fontFamily: 'Helvetica', fontSize:"125%"}}>{def.english_definitions.join('; ')}</p>
//                 </li>
//               ))}
//             </ol>
//           </Row>
//         </Col>
//       </Row>
//     </Card>
// );

// const array = ['a', 'b', 'c', 'd'];
// const str = array.join('; ');
// console.log(str)


// const Term = ({resultWord, resultReading}) => (
//   <ListGroup.Item>
//     <Card>
//       <Row>
//         <Col>
//           {resultWord}
//         </Col>
//         <Col>
//           {resultReading}
//         </Col>
//       </Row>
//     </Card>
//   </ListGroup.Item>
// );
//
// <ListGroup>
//   {terms.map(term => (
//     <ListGroup.Item key={uuid}>
//     {term.japanese[0].word}
//     <br />
//     {term.japanese[0].reading}
//     </ListGroup.Item>
//   ))}
// </ListGroup>
//
// {terms.map(term => (
//   <ListGroup.Item key={uuid()}>
//   {term.japanese[0].word}
//   <br />
//   {term.japanese[0].reading}
//   </ListGroup.Item>
// ))}
//
//
// <ul>
//   {
//     terms.map(term => (
//       <li key={uuid()}>
//         {term.japanese[0].word}
//         <br />
//         {term.japanese[0].reading}
//         <br />
//         <ul>
//           {term.senses[0].english_definitions.map(def => (
//             <li key={uuid()}>
//               {def}
//             </li>
//           ))}
//         </ul>
//       </li>
//     ))
//   }
// </ul>

// <p>ハローキティが好き？</p>
// <p>いえ、口がない猫は可笑しい。ゴジラは一番だ！</p>
// <br />

// const http = require('http');
//
// const data = {
//   "name": "jeff",
//   "diet": "vegan"
// };
//
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write('Hello to me');
//     res.end();
//   };
//
//   if (req.url === '/api/data') {
//     res.write(JSON.stringify(data));
//     res.end();
//   };
// });

// const server = http.createServer((req, res) => {
//   res.setHeader({"Content-Type": "application/json"});
//   res.writeHead(200);
//   res.end();
// });

// server.listen(5000, () => {
//   console.log('Server is listening on port 5000');
// });

// const countLetter = (word, character) => {
//   let count = 0;
//   for (let letter of word) {
//     if(letter === character) {
//       count++;
//     };
//   };
//   return count;
// };
//
// console.log(countLetter('banana', 'a'));
