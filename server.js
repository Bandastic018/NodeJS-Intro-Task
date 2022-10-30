//Creating a server to render html pages

// Creating an HTTP module

const http = require('http');
const path = require('path');
const fs = require('fs');
const { error } = require('console');

// Creating a server with http variable

const server = http.createServer((req, res) => {
    //homepage routing
    if (req.url === '/') {
        // page variable declaration
        let page = '/home.html'
        //file path
        let filePath = path.join(`${__dirname}${page}`);
        fs.readFile(filePath, 'utf8', (err, data) => {
            //error handling
            if (err) throw err;
                
            if (!err)
                //Page name slicing thus /home.html page to home page
                page = page.slice(1, -5)
                console.log(`${page} page rendered successfully.`)
            
            //Head rendering
            res.writeHead(200, { 'Content-Type': 'text/html' });
            //Send back a responds information 
            res.end(data);


        })
        
    }
    //About page routing
    if (req.url === '/About.html') {
        // page variable redeclaration
        let page = '/About.html'
        //file path
        let filePath = path.join(`${__dirname}${page}`);
        fs.readFile(filePath, 'utf8', (err, data) => {
            //error handling
            if (err) throw err;
                
            if (!err)
                //Page name slicing thus /About.html page to About page
                page = page.slice(1,-5)
                console.log(`${page} page rendered successfully.`)
            //Head rendering
            res.writeHead(200, { 'Content-Type': 'text/html' });
            //Send back a responds information 
            res.end(data);


        })
        
    }
      //Contact page routing
    if (req.url === '/Contact.html') {
       // page variable redeclaration
        let page = '/Contact.html'
        //file path
        let filePath = path.join(`${__dirname}${page}`);
        fs.readFile(filePath, 'utf8', (err, data) => {
            //error handling
            if (err) throw err
                
            if (!err)
                //Page name slicing thus /Contact.html page to Contact page
                page = page.slice(1,-5)
                console.log(`${page} page rendered successfully.`)
            //Head rendering
            res.writeHead(200, { 'Content-Type': 'text/html' });
            //Send back a responds information 
            res.end(data);


        })
        
    } 
    //Printing not at an even if, if function is true . I will have 
    //to look at it again
    //else {
    //     newFunction();
    // }
})

    
    
                                                

// create a port for which the server should listen
const port = 4000
server.listen(port, () => {
    console.log(`Server is running at port ${port}`)
});

// function newFunction() {
//     console.error(`Page rendered unsuccessfully.`
//     );
// }

