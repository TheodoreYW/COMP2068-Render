var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render("index", { title: 'Home' });
});

router.get('/about-me', (req, res, next) => {
  res.render("about", { title: 'About Me' });
});

router.get('/projects', (req, res, next) => {
  res.render("projects", { title: 'Projects' });
});

router.get('/contact-me', (req, res, next) => {
  res.render("contact", { title: 'Contact Me' });
});

module.exports = router;
