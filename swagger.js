const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts Api",
    description: "Api to storage and retrieve contacts"
  },
  host: "localhost:4000",
  scheme: ["http", "https"]
}

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);