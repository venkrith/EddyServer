var path = require('path');
var fs = require('fs');

exports.index = function(req, res) {
    res.redirect('/write/create');
}

// Display list of all Files
exports.write_list = function(req, res) {
    res.send('NOT IMPLEMENTED: File list');
};

// Display detail page for a specific File
exports.write_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: File detail: ' + req.params.id);
};

// Display File create form on GET
exports.write_create_get = function(req, res) {
    res.render('write-form', {title: 'Write to a file'})
};

// Handle File create on POST
exports.write_create_post = function(req, res) {
   //Check that the name field is not empty
    req.checkBody('name', 'Empty data is not allowed').notEmpty(); 
    
    //Trim and escape the name field. 
    req.sanitize('name').escape();
    req.sanitize('name').trim();
    
    //Run the validators
    var errors = req.validationErrors();

    if (errors) {
        //If there are errors render the form again, passing the previously entered values and errors
        res.render('write-form', { title: 'Write to a file', writename: {name: req.body.name}, errors: errors});
        return;
    } 
    else {
        // Data from form is valid.
        //

        var user_input = req.body.name;
        console.log("Client Data: " + user_input);

        fs.writeFile('write.txt', user_input, function(err) {
            if (err) console.error("Write failed: " + err);
            else console.log("Write succeeded!");
        });

        res.send('Write succeeded!');
    }
};

// Display File delete form on GET
exports.write_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: File delete GET');
};

// Handle File delete on POST
exports.write_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: File delete POST');
};

// Display File update form on GET
exports.write_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: File update GET');
};

// Handle File update on POST
exports.write_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: File update POST');
};
