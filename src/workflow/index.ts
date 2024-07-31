import path from "path";
const WORKFLOW_NAME = process.argv[2];
require(path.join(__dirname, WORKFLOW_NAME, "index.js"));
