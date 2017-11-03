'use strict';

const getLogger = require('../../config/globalLoger.js');
const logger = getLogger.getLogger('Register');
const maindb = require('../../../storage/models/registration.js');
const Joi = require('joi');

/**
 * insert document student: Function to save information of student
 * @param req
 * @param res
 * @returns {*}
 */
exports.create = (req, res, next) => {
    const schema = Joi.object().keys({
        name: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
    });
    return schema.validate(req.body, { stripUnknown: true }, (err, params) => {
        if (err) {
            return res.status(409).json({ err: err });
        }
        return maindb(params).save()
            .then((register) => {
                logger.info('registration', register);
                return res.send('User Register Successfully');
            })
            .catch((err) => {
                logger.warn('err...', err);
                return next();
            });
    });
};

