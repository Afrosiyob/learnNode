const mongoose = require( "mongoose" );

const express = require( "express" );
const config = require( "config" );
const morgan = require( "morgan" );
const { homeRouter } = require( "./src/routes/home.routes" );
const { bookRouter } = require( "./src/routes/book.routes" );

const app = express();
// middleware
app.use( morgan( "tiny" ) );
app.use( express.json() );
// router
app.use( "/", homeRouter );
app.use( "/api/books", bookRouter );

const PORT = config.get( "PORT" ) || process.env.PORT || 5000;

app.listen( PORT, async () => {
  await mongoose
    .connect( config.get( "mongoUrl" ), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    } )
    .then( () => {
      console.log( "mongo db ga ulandi" );
    } )
    .catch( ( err ) => {
      console.log( err );
      process.exit( 1 );
    } );
} );
