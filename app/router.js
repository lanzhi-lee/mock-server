'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.index.index);
    router.get('/example', controller.example.index);
};