if(!process.env.Port) console.error("Port is not Defined in envirnment variables");
if(!process.env.MONGO_URI) console.error("Mongo URI is not Defined in envirnment variables");


export const config = {
    Port : process.env.Port,
    MONGO_URI : process.env.MONGO_URI
}
