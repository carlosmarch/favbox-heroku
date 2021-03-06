const express = require('express')
const path = require('path');

const app = express()
const port = process.env.PORT || 3000 // Heroku will need the PORT environment variable

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`App is live on port ${port}!`))

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'build', 'index.html'));
});
