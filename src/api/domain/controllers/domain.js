"use strict";

/**
 * Default created Domain controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::domain.domain");
