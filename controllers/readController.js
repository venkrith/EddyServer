var path = require('path');
var fs = require('fs');

exports.index = function(req, res) {
    res.redirect('/read/create');
}

// Display list of all Files
exports.read_list = function(req, res) {
    res.send('NOT IMPLEMENTED: File list');
};

// Display detail page for a specific File
exports.read_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: File detail: ' + req.params.id);
};

// Display File create form on GET
exports.read_create_get = function(req, res) {
    res.render('read-form', {title: 'Read from a file'})
};

// Handle File create on POST
exports.read_create_post = function(req, res) {
        var user_input = req.body.name;
        console.log("Client Data: " + user_input);

        fs.readFile('write.txt', function(err, data) {
            if (err) {
                console.error("Read failed: " + err);
            }
            else {
                console.log("Read succeeded!");
                res.sendFile(path.join(__dirname, '../write.txt'));
            }
        });
};

// Display File delete form on GET
exports.read_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: File delete GET');
};

// Handle File delete on POST
exports.read_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: File delete POST');
};

// Display File update form on GET
exports.read_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: File update GET');
};

// Handle File update on POST
exports.read_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: File update POST');
};
