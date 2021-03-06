const types = require('../models/types');
module.exports.validateBody = (body, schema, options) => {
    let err = '';
    Object.keys(body).map(key => err += !(body[key]) ? `#${key} cannot be empty` : '');
    Object.keys(schema.tree).map(key => {
        err += (schema.tree[key].required && !(Object.keys(body).includes(key)))
            ? `#${key} is required` : '';
    });
    if (err === '')
        if (options)
            options.map(key => {
                if (types[key])
                    if (!types[key].includes(body[key]))
                        err += `#your value '${body[key]}' for key '${key}' is invalid`;
            })
    return err;
}
module.exports.createModel = (body, model, schema) => {
    Object.keys(body).map(key => {
        if (Object.keys(schema.tree).includes(key)) model[key] = body[key];
    })
    return model;
}
module.exports.updateModel = (body, model, schema, editables) => {
    Object.keys(body).map(key => {
        if (Object.keys(schema.tree).includes(key) && editables.includes(key)) { model[key] = body[key];  }
    })
}