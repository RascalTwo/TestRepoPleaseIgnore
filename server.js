console.log('May Node be with you');


require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


MongoClient.connect(process.env.MONGODB_URI).then(client => {
	const db = client.db('star-wars-quotes');
	const quotesCollection = db.collection('quotes');

	app.get('/', (request, response) => {
		db.collection('quotes').find().toArray()
			.then(results => {
				response.render('index.ejs', { quotes: results });
			})
			.catch(error => console.error(error))
	});

	app.post('/quotes', (request, response) => {
		quotesCollection.insertOne(request.body)
			.then(result => {
				console.log(result);
				response.redirect('/');
			})
			.catch(error => console.error(error));
	});

	app.listen(3001, () => {
		console.log('Listening on http://localhost:3001/');
	});
}).catch(console.error);