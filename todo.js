const Request = require("./utils/Request.js")

if (!process.argv[2]) {
    printUsage();
    process.exit();
}

switch (process.argv[2]) {
    case "read":
        read(process.argv[3]);
        break;
    case "update":
        update(process.argv[3], process.argv[4]);
        break;
    default:
        printUsage();
}

function read(id) {
    // read item from server
    let path = "/todo/";
    path += id || "";
    let request = new Request("localhost", 3000, path, "GET");
    request.sendRequest((err, result) => {
        if (err) {
            console.log(err);
        }
        var parsed = JSON.parse(result);
        console.log(parsed);
    });
}

function update(id, text) {
    if (!id || !text) {
        console.log("please provide an id and a text");
        return;
    }

    let path = "/todo/";
    path += id || "";
    path += "?text=" + text;
    let request = new Request("localhost", 3000, path, "PUT");
    request.sendRequest((err, result) => {
            console.log(result);
    });
}

function remove(id) {
    if (!id) {
        console.log("please provide an id.");
    }

    // delete request
}

function create(text) {
    if (!text) {
        console.log("please provide an id.");
    }

    // create item request
}

function printUsage() {
    console.log("usage: todo")
    console.log("create: todo")
    console.log("create: todo read [id]")
    console.log("create: todo create text ")
    console.log("create: todo update id text ")
    console.log("create: todo delete id ")
}

