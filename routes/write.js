var express = require('express');
var router = express.Router();

// Require controller modules
var write_controller = require('../controllers/writeController');

/// ROUTES ///

router.get('/', write_controller.index);

/* GET request for creating. NOTE This must come before route for id (i.e. display file) */
router.get('/create', write_controller.write_create_get);

/* POST request for creating. */
router.post('/create', write_controller.write_create_post);

/* GET request to delete. */
router.get('/:id/delete', write_controller.write_delete_get);

// POST request to delete
router.post('/:id/delete', write_controller.write_delete_post);

/* GET request to update. */
router.get('/:id/update', write_controller.write_update_get);

// POST request to update
router.post('/:id/update', write_controller.write_update_post);

/* GET request for one. */
router.get('/:id', write_controller.write_detail);

/* GET request for list of all */
router.get('/writes', write_controller.write_list);

module.exports = router
