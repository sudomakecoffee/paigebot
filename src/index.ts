import { config } from "dotenv";
import { expand } from "dotenv-expand";

const parsed = config();
expand(parsed);

// Configuration loaded, proceed with bootstrapping application
import { startApp } from "./app";

startApp();
