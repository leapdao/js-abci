let lotion = require('./lotion');

let app = lotion({
  initialState: { count: 0 },     // initial blockchain state
  target: 'tcp://localhost:46657',
  abciPort: 46658,
});

app.use(function (state, tx) {
  console.log(state, tx);
  if(state.count === tx.nonce) {
    state.count++
  }
});

app.listen(3000);
