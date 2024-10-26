import express from 'express';
import { logger } from './module-ex-common-utils/index.js';
import { auth } from './module-ex-auth/index.js';

const app = express();
app.get('/', async function(req, res) {
  const token = 'some token';
  await auth.verify(token);
  res.send('all good');
});

app.listen(3000, 'localhost', function() {
  logger.info('listening on http://localhost:3000');
});

