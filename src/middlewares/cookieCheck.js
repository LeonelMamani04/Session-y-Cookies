// Chequea si existe la cookies y si es asi la asigna a la session y al locals para tambien poder accederlas desde las vistas
module.exports = (req, res, next) => {
      if (req.cookies.color && !req.session.color) {
            req.session.color = req.cookies.color;
      }
      next();
};
