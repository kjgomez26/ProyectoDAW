// Load the MySQL pool connection
const pool = require('../data/config');

const EventosController= require('../controllers/EventosController.js');


const router = app => {

    //CRUD para el cliente
    app.get('/eventos', EventosController.getEventos)


    app.get('/eventos/:id', EventosController.getSingleEvento)

    app.post('/add', EventosController.addEvento)


    app.put('/update/:id', EventosController.updateEvento)

    app.delete('/delete/:id', EventosController.deleteEvento)

    app.get('/eventosUsuario/:usuario', EventosController.getUser)

    


    // Display welcome message on the root
    app.get('/', (request, response) => {
        response.send({
            message: 'API REST-Proyecto Final'
        });
    });

    //Primera Entidad-Usuario
    app.get('/usuarios', (request, response) => {
        pool.query('SELECT * FROM usuario', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    app.get('/usuarios/:usuario', (request, response) => {
        const usuario = request.params.usuario;

        pool.query('SELECT * FROM usuario WHERE usuario = ?', usuario, (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    app.post('/usuarios', (request, response) => {
        pool.query('INSERT INTO usuario SET ?', request.body, (error, result) => {
            if (error) throw error;

            response.status(201).send('Usuario añadido');
        });
    });

    app.put('/usuarios/:usuario', (request, response) => {
        const usuario = request.params.usuario;

        pool.query('UPDATE usuario SET ? WHERE usuario = ?', [request.body, usuario], (error, result) => {
            if (error) throw error;

            response.send('Usuario actualizado correctamente');
        });
    });

    app.delete('/usuarios/:usuario', (request, response) => {
        const usuario = request.params.usuario;

        pool.query('DELETE FROM usuario WHERE usuario = ?', usuario, (error, result) => {
            if (error) throw error;
            response.send('Usuario eliminado.');
        });
    });

    //Segunda Entidad-Profesor
    app.get('/profesores', (request, response) => {
        pool.query('SELECT * FROM profesor', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    app.get('/profesores/:id', (request, response) => {
        const id = request.params.id;

        pool.query('SELECT * FROM profesor WHERE idProfesor = ?', id, (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    app.post('/profesores', (request, response) => {
        pool.query('INSERT INTO profesor SET ?', request.body, (error, result) => {
            if (error) throw error;

            response.status(201).send('Profesor añadido con éxito.');
        });
    });

    app.delete('/profesores/:id', (request, response) => {
        const id = request.params.id;

        pool.query('DELETE FROM profesor WHERE idProfesor = ?', id, (error, result) => {
            if (error) throw error;
            response.send('Profesor eliminado.');
        });
    });

    //Tercera Entidad-Cursos
    app.get('/cursos', (request, response) => {
        pool.query('SELECT * FROM curso', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });
    app.get('/cursos/:id', (request, response) => {
        const id = request.params.id;
        pool.query('SELECT * FROM curso WHERE idCurso = ?', id, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
    app.post('/cursos', (request, response) => {
        pool.query('INSERT INTO curso SET ?', request.body, (error, result) => {
            if (error) throw error;

            response.status(201).send('Nuevo curso añadido con éxito.');
        });
    });
    app.delete('/cursos/:id', (request, response) => {
        const id = request.params.id;
        pool.query('DELETE FROM curso WHERE idCurso = ?', id, (error, result) => {
            if (error) throw error;
            response.send('Curso eliminado.');
        });
    });

    //Cuarta Entidad-Eventos
    app.get('/eventos', (request, response) => {
        pool.query('SELECT * FROM evento', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });
    app.get('/eventos/:id', (request, response) => {
        const id = request.params.id;
        pool.query('SELECT * FROM evento WHERE idEvento = ?', id, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
    app.post('/eventos', (request, response) => {
        pool.query('INSERT INTO evento SET ?', request.body, (error, result) => {
            if (error) throw error;

            response.status(201).send('Nuevo evento añadido con éxito.');
        });
    });
    app.delete('/eventos/:id', (request, response) => {
        const id = request.params.id;
        pool.query('DELETE FROM evento WHERE idEvento = ?', id, (error, result) => {
            if (error) throw error;
            response.send('Evento eliminado.');
        });
    });



 /*   app.post('/add',function (req, res) {
  let post = new Post(req.body);
  post.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
app.get('/',function (req, res) {
    Post.find(function(err, posts){
    if(err){
      res.json(err);
    }
    else {
      res.json(posts);
    }
  });
});

// Defined edit route
app.get('/edit/:id',function (req, res) {
  let id = req.params.id;
  Post.findById(id, function (err, post){
      if(err) {
        res.json(err);
      }
      res.json(post);
  });
});

//  Defined update route
app.post('/update/:id',function (req, res) {
    Post.findById(req.params.id, function(err, post) {
    if (!post)
      res.status(404).send("data is not found");
    else {
        post.title = req.body.title;
        post.body = req.body.body;
        post.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
app.delete('/delete/:id',function (req, res) {
    Post.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});*/
}

module.exports = router;
