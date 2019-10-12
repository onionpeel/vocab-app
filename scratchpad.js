<Header />
<Container>
  <Row>
    <Col xs={12} sm={8}>
      <div>
        <Form className="mt-2">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Find that Japanese word you've always longed for</Form.Label>
            <Form.Control type="text" placeholder="What's taking you so long?"/>
            <Form.Text className="text-muted">
              Life fulfillment is a click away.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" style={{marginBottom: 10}}>
            Search
          </Button>
        </Form>
      </div>

    </Col>
    <Col xs={12} sm={4} className="sidebar-section">
      <Image src='assets/bookstoreCropped.jpg' className="img-fluid" rounded/>
      <p>I've lived here my whole life and still can't read this stuff.  I wish I had a convenient tool for looking up the meaning of these words.</p>
    </Col>
  </Row>
</Container>

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
