var express = require('express');
var router = express.Router();
const pinchActions = require('../pinchActions');
const cors = require('./cors');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/text/:personalname/:contactname1/:contacttel1/:contactname2/:contacttel2')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, (req,res,next) => {
	pinchActions.textContacts(req.params.personalname, req.params.contactname1, req.params.contacttel1, req.params.contactname2, req.params.contacttel2);
});

router.route('/call/:personaltel')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, (req,res,next) => {
	pinchActions.callSelf(req.params.personaltel);
});

module.exports = router;

/*
shirtRouter.route('/:userId/:price')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, (req,res,next) => {
    Shirts.find({})
    .then((shirts) => {
        find.displayClothes(req.params.userId, shirts, next, res, req.params.price);
    }, (err) => next(err))
    .catch((err) => next(err));
});
*/