import { app } from "./src/app.js";

//Config Files
import  { config }  from "./src/config/config.js";
import connectDB from "./src/config/database.js";

connectDB();

app.listen(config.Port, () => console.log(`Server is Running on ${config.Port}`));