var express = require('express');
var router = express.Router();

// Require controller modules
var read_controller = require('../controllers/readController');

/// ROUTES ///

router.get('/', read_controller.index);

/* GET request for creating. NOTE This must come before route for id (i.e. display file) */
router.get('/create', read_controller.read_create_get);

/* POST request for creating. */
router.post('/create', read_controller.read_create_post);

/* GET request to delete. */
router.get('/:id/delete', read_controller.read_delete_get);

// POST request to delete
router.post('/:id/delete', read_controller.read_delete_post);

/* GET request to update. */
router.get('/:id/update', read_controller.read_update_get);

// POST request to update
router.post('/:id/update', read_controller.read_update_post);

/* GET request for one. */
router.get('/:id', read_controller.read_detail);

/* GET request for list of all */
router.get('/reads', read_controller.read_list);

module.exports = router
