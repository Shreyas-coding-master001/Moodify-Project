import dotenv from "dotenv";

dotenv.config();

if(!process.env.Port) console.error("Port is not Defined in envirnment variables");
if(!process.env.MONGO_URI) console.error("Mongo URI is not Defined in envirnment variables");
if(!process.env.JWT_SECRET) console.error("JWT Secret is not Defined in envirnment variables");
if(!process.env.REDIS_HOST) console.error("Redis Host is not Defined in envirnment variables");
if(!process.env.REDIS_PORT) console.error("Redis Port is not Defined in envirnment variables");
if(!process.env.REDIS_PASSWORD) console.error("Redis Password is not Defined in envirnment variables");
if(!process.env.PRIVATE_KEY_IMAGE_KIT) console.error("Private key of ImageKit is not defined in environment variable");


export const config = {
    Port : process.env.Port,
    MONGO_URI : process.env.MONGO_URI,
    JWT_SECRET : process.env.JWT_SECRET,
    REDIS_HOST : process.env.REDIS_HOST,
    REDIS_PORT : process.env.REDIS_PORT,
    REDIS_PASSWORD : process.env.REDIS_PASSWORD,
    PRIVATE_KEY_IMAGE_KIT : process.env.PRIVATE_KEY_IMAGE_KIT,
}
