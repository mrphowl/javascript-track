const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const env = process.env.NODE_ENV || 'development';
const dbconfig = require(__dirname + '/config/config.json')[env];
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/static', express.static('public'));

const options = {
  host: dbconfig.host,
  port: dbconfig.port,
  user: dbconfig.username,
  password: dbconfig.password,
  database: dbconfig.database,
  clearExpired: true,
  expiration: 300000, // 5 mins
  createDatabaseTable: true,
  endConnectionOnClose: true,
	charset: 'utf8mb4_bin',
	schema: {
		tableName: 'sessions',
		columnNames: {
			session_id: 'session_id',
			expires: 'expires',
			data: 'data'
		}
	}
};

const sessionStore = new MySQLStore(options);
// use express session to track login
app.use(session({
  secret: 'rainbow barf',
  resave: false,
  saveUninitialized: false,
  store: sessionStore
}));
// Make user ID available in the templates.
app.use((req, res, next) => {
  res.locals.currentUser = req.session.userId;
  res.locals.currentSet = req.session.setName || 'All cards';
  next();
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
