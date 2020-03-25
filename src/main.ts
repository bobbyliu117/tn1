import express from 'express';
import router from './router/router';
import {reqTagger} from './router/middleware';

express()
  .use(express.urlencoded({extended: true}))
	.use(reqTagger('test_tag_1'))
  .use(router)
  .listen(3001, ()=>console.log('Listening port: 3001'));
