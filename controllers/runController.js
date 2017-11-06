var path = require('path');

exports.index = function(req, res) {
    res.redirect('/run/create');
}

// Display list of all Files
exports.run_list = function(req, res) {
    res.send('NOT IMPLEMENTED: File list');
};

// Display detail page for a specific File
exports.run_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: File detail: ' + req.params.id);
};

// Display File create form on GET
exports.run_create_get = function(req, res) {
    res.render('run-form', {title: 'Enter Any Command'})
};

// Handle File create on POST
exports.run_create_post = function(req, res) {
   //Check that the name field is not empty
    req.checkBody('name', 'Command Name is required').notEmpty(); 
    
    //Trim and escape the name field. 
    req.sanitize('name').escape();
    req.sanitize('name').trim();
    
    //Run the validators
    var errors = req.validationErrors();

    if (errors) {
        //If there are errors render the form again, passing the previously entered values and errors
        res.render('run-form', { title: 'Enter Any Command', runname: {name: req.body.name}, errors: errors});
        return;
    } 
    else {
        // Data from form is valid.
        //

        var user_input = req.body.name;
        var command_array = user_input.split(/\s+/);
        var command = command_array.shift();
        var params = command_array;
        console.log("Client Command: " + command);
        console.log("Client Arguments: " + params);

        var execFile = require('child_process').execFile

        // this launches the executable and returns immediately
        var child = execFile(command, params, 
            function (error, stdout, stderr) {
                // This callback is invoked once the child terminates
                // You'd want to check err/stderr as well!
                if (error) {
                    console.log("Program execution failed.  Error (if any): ");
                    console.log(stderr)
                    res.send('Program execution has failed for: ' + command + ' ' + params.join(' '));
                } else {
                    console.log("Here is the complete output of the program: ");
                    var result = stdout.split("\r\n");
                    console.log(result)

                    res.json(result);
                }

            });

    }
};

// Display File delete form on GET
exports.run_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: File delete GET');
};

// Handle File delete on POST
exports.run_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: File delete POST');
};

// Display File update form on GET
exports.run_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: File update GET');
};

// Handle File update on POST
exports.run_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: File update POST');
};
