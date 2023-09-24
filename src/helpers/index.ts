const Models = require("../models");

const insertNewDocument = async (modelDb: any, storeObj: any) => {
    let data = new Models[modelDb](storeObj);
    return await data.save();
  };

export {
    insertNewDocument
}