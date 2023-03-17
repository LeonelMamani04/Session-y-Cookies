const {validationResult}  = require("express-validator");

module.exports={
    main: (req,res)=> {
       res.render("index",{ title: "Session y Cookies", session: req.session })
    },
    store: (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
              let color = "";
              if (req.body.nameColor == "Azul") {
                    color = "bg-primary";
              } else if (req.body.nameColor == "Gris") {
                    color = "bg-secondary";
              } else if (req.body.nameColor == "Verde") {
                    color = "bg-success";
              } else if (req.body.nameColor == "Rojo") {
                    color = "bg-danger";
              } else {
                    color = "bg-warning";
              }

              const data = {
                    ...req.body,
              };

              req.session.color = color;

              if (req.body.remember) {
                    let duracionSession = new Date(Date.now() + 30000);
                    res.cookie("color", req.session.color, { expires: duracionSession, httpOnly: true });
              }

              res.render("index", { title: "Session y Cookies", data, session: req.session });
        } else {
              res.render("index", {
                    title: "Session y Cookies",
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session,
              });
        }
  },
  destroy: (req, res) => {
        req.session.destroy();
        if (req.cookies.color) {
              res.cookie("color", "", { maxAge: -1 });
        }
        return res.redirect("/");
  },

}