var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  idEvento: String,
  titulo: String,
  descripcion: String,
  lugar: String,
  organizador: String,
  calificacion_evento:String,
  usuario: String
});

var Post = mongoose.model("eventos", PostSchema);
module.exports = Post;