import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        version: 'v1.0.0',
        title: 'E2E Messanger',
        description: 'End-to-end encrypted messaging service'
    },
    host: 'localhost:3000'
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/index.ts'];

swaggerAutogen()(outputFile, endpointsFiles, doc);