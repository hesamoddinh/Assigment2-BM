const express = require('express');
const app = express();
const port = 3000;

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const database = 'assignment-2';

mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
	if (err) { console.error(err); }
	app.locals.db = db;
	app.listen(port, () => console.log('Server started on port 3000'));
});

//Sample data to be used in the courses and students collections
const sample_courses = [
	{ _id: 1, long_title: 'Advanced Web Technologies', short_title: 'advwebtech', professor: 'Mohamed Chatti', type: 'Lecture', credits: 6, language: 'English', registered_students: ['jg111111', 'dp222222', 'ec333333', 'mc444444', 'wm555555', 'mb666666', 'cb777777', 'gs888888', 'pc999999', 'ep010101'] },
	{ _id: 2, long_title: 'Learning Analytics and Visual Analytics', short_title: 'lava', professor: 'Mohamed Chatti', type: 'Lab', credits: 4, language: 'English', registered_students: ['jg111111', 'mc444444', 'mb666666', 'cb777777', 'ep010101'] },
	{ _id: 3, long_title: 'Big Data and Learning Analytics', short_title: 'bdla', professor: 'Mohamed Chatti', type: 'Seminar', credits: 4, language: 'English', registered_students: ['ec333333', 'wm555555', 'gs888888', 'pc999999', 'ep010101'] },
	{ _id: 4, long_title: 'Programmierparadigmen', short_title: 'prodigmen', professor: 'Janis Voigtländer', type: 'Lecture', credits: 6, language: 'German', registered_students: ['jg111111', 'dp222222', 'mc444444', 'wm555555', 'mb666666', 'gs888888', 'pc999999', 'ep010101'] },
	{ _id: 5, long_title: 'Webprogrammierung mit Yesod und DSLs', short_title: 'webprogra', professor: 'Janis Voigtländer', type: 'Lab', credits: 4, language: 'German', registered_students: ['ec333333', 'mc444444', 'cb777777', 'gs888888'] },
];
const sample_students = [
	{ _id: 'jg111111', first_name: 'Jennifer', last_name: 'Garza', age: 18, study_program: 'AI', attending_courses: [1, 2, 4] },
	{ _id: 'dp222222', first_name: 'Duane', last_name: 'Palmer', age: 29, study_program: 'ISE', attending_courses: [1, 4] },
	{ _id: 'ec333333', first_name: 'Ernestine', last_name: 'Chambers', age: 28, study_program: 'ISE', attending_courses: [1, 3, 5] },
	{ _id: 'mc444444', first_name: 'Marjorie', last_name: 'Cannon', age: 33, study_program: 'Komedia', attending_courses: [1, 2, 4, 5] },
	{ _id: 'wm555555', first_name: 'Whitney', last_name: 'Mcgee', age: 23, study_program: 'AI', attending_courses: [1, 3, 4] },
	{ _id: 'mb666666', first_name: 'Madeline', last_name: 'Benson', age: 25, study_program: 'AI', attending_courses: [1, 2, 4] },
	{ _id: 'cb777777', first_name: 'Curtis', last_name: 'Ballard', age: 19, study_program: 'ISE', attending_courses: [1, 2, 5] },
	{ _id: 'gs888888', first_name: 'Glen', last_name: 'Spencer', age: 18, study_program: 'AI', attending_courses: [1, 3, 4, 5] },
	{ _id: 'pc999999', first_name: 'Pedro', last_name: 'Curry', age: 28, study_program: 'Komedia', attending_courses: [1, 3, 4] },
	{ _id: 'ep010101', first_name: 'Everett', last_name: 'Poole', age: 30, study_program: 'Komedia', attending_courses: [1, 2, 3, 4] },
];

app.use(express.static(__dirname + "/resources"));

app.get('/', (req, res) => res.sendFile('resources/Home.html', { root: __dirname }));
app.get('/contact', (req, res) => res.sendFile('resources/Contact-Us.html', { root: __dirname }));