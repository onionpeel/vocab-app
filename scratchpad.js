<p>ハローキティが好き？</p>
<p>いえ、口がない猫は可笑しい。ゴジラは一番だ！</p>
<br />

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

const countLetter = (word, character) => {
  let count = 0;
  for (let letter of word) {
    if(letter === character) {
      count++;
    };
  };
  return count;
};

console.log(countLetter('banana', 'a'));
