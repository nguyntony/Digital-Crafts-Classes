require('dotenv').config();    // don't forget to require dotenv

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const es6Renderer = require('express-es6-template-engine');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

// const {
    // userRouter,
    // todoRouter
// } = require('./routers');

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = '0.0.0.0';

const logger = morgan('tiny');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(session({
    store: new FileStore(),  // no options for now
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: true,
    rolling: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

app.use(logger);
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('hey');
});

const { layout } = require('./utils');
const {
    Artist,
    Album,
    Song
} = require('./models');

// Artists

app.get('/artists', async (req, res) => {
    const artists = await Artist.findAll();
    res.render('artists/list', {
        locals: {
            artists
        },
        ...layout
    })
});

app.get('/artists/new', (req, res) => {
    res.render('artists/new', {
        ...layout
    });    
});

app.post('/artists/new', async (req, res) => {
    const { name } = req.body;
    if (name) {
        const newArtist = Artist.create({
            name
        });
        if (newArtist) {
            console.log('New artist:', name);
            res.redirect('/artists')
        } else {
            res.redirect('/artists/new')
        }
    }
});


// Albums
app.get('/artists/:artistId/albums/', async (req, res) => {
    const { artistId } = req.params;
    console.log('=================', artistId);
    if (artistId) {
        // Get the artist (so we can display their name)
        const artist = await Artist.findByPk(artistId);
        // Get all their albums
        const albums = await Album.findAll({
            where: {
                artistId
            }
        });
        console.log(`Found albums for ${artistId}`);
        res.render('albums/list', {
            locals: {
                artist,
                albums
            },
            ...layout
        });        
    } else {
        res.redirect('/artists');
    }
});


app.get('/artists/:artistId/albums/new', async (req, res) => {
    const { artistId } = req.params;
    if (artistId) {
        // Get the artist (so we can display their name)
        const artist = await Artist.findByPk(artistId);
        res.render('albums/new', {
            locals: {
                artist
            },
            ...layout
        })
    } else {
        res.redirect('/artists');        
    }    
});

app.post('/artists/:artistId/albums/new', async (req, res) => {
    const { artistId } = req.params;
    const { title } = req.body;

    if (artistId && title) {
        const newAlbum = await Album.create({
            title,
            artistId
        });
        res.redirect(`/artists/${artistId}/albums/`)
    } else {
        // Tell them to send a GET to the same URL.
        res.redirect(req.url);
    }
});

// songs by album
app.get('/artists/:artistId/albums/:albumId/songs', async (req, res) => {
    const { artistId, albumId } = req.params;
    if (artistId && albumId) {
        const artist = await Artist.findByPk(artistId);
        const album = await Album.findByPk(albumId);
        const songs = await Song.findAll({
            where: {
                albumId
            }
        })
        res.render('songs/list', {
            locals: {
                artist,
                album,
                songs
            },
            ...layout
        });        
    } else {
        res.redirect('/artists');
    }
});

app.get('/artists/:artistId/albums/:albumId/songs/new', async (req, res) => {
    const { artistId, albumId } = req.params;
    if (artistId && albumId) {
        const artist = await Artist.findByPk(artistId);
        const album = await Album.findByPk(albumId);
        res.render('songs/new', {
            locals: {
                artist,
                album
            },
            ...layout
        })
    } else {
        res.redirect('/artists');
    }
})

app.post('/artists/:artistId/albums/:albumId/songs/new', async (req, res) => {
    const { artistId, albumId } = req.params;
    const { title } = req.body;
    if (title && artistId && albumId) {
        const newSong = await Song.create({
            title,
            albumId
        });

        res.redirect(`/artists/${artistId}/albums/${albumId}/songs`);
    } else {
        res.redirect('/artists');        
    }
});

app.get('/artists/:artistId/songs/', async (req, res) => {
    const { artistId } = req.params;
    if (artistId) {
        const artist = await Artist.findByPk(artistId);
        const songs = [];
        res.render('artists/songs', {
            locals: {
                artist,
                songs                
            },
            ...layout
        })
    } else {
        res.redirect('/');
    }
});

server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});
