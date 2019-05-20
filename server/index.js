const app = require('./app');
// const bodyParser = require('body-parser')
const port = 3004;
app.listen(port, () => {
  console.log('Server is listening on port:', port);
});
