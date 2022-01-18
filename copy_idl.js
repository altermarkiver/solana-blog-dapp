const fs = require("fs");
const blog_idl = require("./target/idl/blog.json");

fs.writeFileSync("./app/src/idl.json", JSON.stringify(blog_idl, null, 2));