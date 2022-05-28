console.log('May Node be with you');


require('dotenv').config();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const express = require('express');


const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


MongoClient.connect(process.env.MONGODB_URI).then(client => {
	const db = client.db('star-wars-quotes');
	const quotesCollection = db.collection('quotes');

	app.get('/', (_, response) => {
		return quotesCollection.find().toArray().then(results =>
			response.render('index.ejs', { quotes: results })
		)
	});

	app.post('/quotes', (request, response) => {
		return quotesCollection.insertOne(request.body).then(() =>
			response.redirect('/')
		);
	})

	app.delete('/quotes', (request, response) => {
		return quotesCollection.deleteOne({ _id: new mongodb.ObjectId(request.body.quoteID) }).then(result =>
			response.status(result.deletedCount === 0 ? 404 : 200).end()
		);
	});

	app.put('/quotes', (request, response) => {
		return quotesCollection.findOneAndUpdate({ _id: new mongodb.ObjectId(request.body.quoteID) }, { $set: { name: request.body.name, quote: request.body.quote } }, { upsert: true }).then(result =>
			response.send(result.value)
		);
	});

	app.listen(3001, () => {
		console.log('Listening on http://localhost:3001/');
	});

}).catch(console.error);