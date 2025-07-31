const express = require("express")
const expressLayouts = require("express-ejs-layouts")
require("dotenv").config()
const baseController = require("./controllers/baseController")
const pool = require("./database")
const utilities = require("./utilities")
const inventoryRoute = require("./routes/inventoryRoute")
const staticRoutes = require("./routes/static")

const app = express()

app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout")
app.use(express.static("public"))

app.use("/", staticRoutes)
app.get("/", utilities.handleErrors ? utilities.handleErrors(baseController.buildHome) : baseController.buildHome)
app.use("/inv", inventoryRoute)

app.get("/", (req, res) => {
  res.render('index')
})

app.get("/index", (req, res) => {
  res.render('index')
})

app.get("layouts/custom", (req, res) => {
  res.render('custom')
})

app.get("layouts/sedan", (req, res) => {
  res.render('sedan')
})

app.get("layouts/sport", (req, res) => {
  res.render('sport')
})

app.get("layouts/suv", (req, res) => {
  res.render('suv')
})
app.get("layouts/truck", (req, res) => {
  res.render('truck')
})

app.use(async (req, res, next) => {
  next({ status: 404, message: "Sorry, we appear to have lost that page." })
})

app.use(async (err, req, res, next) => {
  let nav = await utilities.getNav()
  console.error(`Error at: "${req.originalUrl}": ${err.message}`)
  let message = err.status == 404 ? err.message : "Oh no! There was a crash. Maybe try a different route?"
  res.status(err.status || 500).render("errors/error", {
    title: err.status || "Server Error",
    message,
    nav,
  })
})

const port = process.env.PORT || 5500
const host = process.env.HOST || "localhost"
app.listen(port, () => {
  console.log(`App listening at http://${host}:${port}`)
})
