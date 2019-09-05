// Load the MySQL pool connection
const pool = require('../data/config');
//thai inicio
nodeMailer = require('nodemailer');
/*app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());*/

//thai fin

const router = app => {
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
    /*TODO: Thai*/
    app.post('/send-email', function (req, res) {
        let transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'youemail@gmail.com',//process.env.EMAIL || 'abc@gmail.com', // TODO: your gmail account
                pass: 'yourpass'//process.env.PASSWORD || '1234' // TODO: your gmail password
            }
        });
        
        // Step 2
        let mailOptions = {
            from: 'abc@gmail.com', // TODO: email sender
            to: 'thaiilizina@gmail.com', // TODO: email receiver
            subject: 'Nodemailer - Test',
            text: 'Wooohooo it works!!'
        };
        
        // Step 3
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                return log('Error occurs');
            }
            return log('Email sent!!!');
        })
        /*let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user:'thaiilizina@gmail.com',
                clientId: '1050554924440-5t7gq43929a0trql3sgpapauo0n8pjnh.apps.googleusercontent.com',
                clientSecret: 'BPFOYeqbLur9TfNBTsfKUaiQ',
                refreshToken: '1/hWJs5E0cxTJTVVeTAxJABxiJKZEzO4KkegU8xfqnV7kYOUR_REFRESH_TOKEN'
            },
            
            tls:{
                rejectUnauthorized:false
            }
        });*/
        
       
       
 
}); //post

     
}

module.exports = router;
