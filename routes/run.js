var express = require('express');
var router = express.Router();

// Require controller modules
var run_controller = require('../controllers/runController');

/// ROUTES ///

router.get('/', run_controller.index);

/* GET request for creating. NOTE This must come before route for id (i.e. display file) */
router.get('/create', run_controller.run_create_get);

/* POST request for creating Author. */
router.post('/create', run_controller.run_create_post);

/* GET request to delete Author. */
router.get('/:id/delete', run_controller.run_delete_get);

// POST request to delete Author
router.post('/:id/delete', run_controller.run_delete_post);

/* GET request to update Author. */
router.get('/:id/update', run_controller.run_update_get);

// POST request to update Author
router.post('/:id/update', run_controller.run_update_post);

/* GET request for one Author. */
router.get('/:id', run_controller.run_detail);

/* GET request for list of all Authors. */
router.get('/runs', run_controller.run_list);

module.exports = router
