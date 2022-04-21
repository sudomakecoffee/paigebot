import { config } from "dotenv";
import { expand } from "dotenv-expand";

const parsed = config();
const expanded = expand(parsed);

console.log(expanded);
// Configuration loaded, proceed with bootstrapping application
import { startApp } from "./app";

startApp();
