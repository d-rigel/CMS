"use strict";
const { receiveEmail } = require("../config/index")

module.exports = {
  async find(ctx) {
    try {
      return await strapi.plugin("ticket").service("ticket").find(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async create(ctx) {
    try {
      ctx.body = await strapi.plugin("ticket").service("ticket").create(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async respond(ctx) {
    try {
      ctx.body = await strapi
        .plugin("ticket")
        .service("ticket")
        .respond(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async resolve(ctx) {
    try {
      ctx.body = await strapi
        .plugin("ticket")
        .service("ticket")
        .resolve(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  //the spam 
  async spam(ctx) {
    try {
      ctx.body = await strapi
        .plugin("ticket")
        .service("ticket")
        .spam(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async read(ctx) {
    try {
      ctx.body = await strapi
        .plugin("ticket")
        .service("ticket")
        .read(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async sendEmail(ctx) {
    try {
      ctx.body = await strapi
        .plugin("ticket")
        .service("ticket")
        .sendEmail(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async receiveEmail(ctx) {
    try {
      ctx.body = await strapi
        .plugin("ticket")
        .service("ticket")
        .receiveEmail(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  // async spams(ctx) {
  //   try {
  //     return await strapi
  //       .plugin("ticket")
  //       .service("ticket")
  //       .spams(ctx.query);
  //   } catch (err) {
  //     ctx.throw(500, err);
  //   }
  // },

//   async delete(ctx) {
//     try {
//       ctx.body = await strapi
//         .plugin("todo")
//         .service("todo")
//         .delete(ctx.params.id);
//     } catch (err) {
//       ctx.throw(500, err);
//     }
//   },

  

//   async update(ctx) {
//     try {
//       ctx.body = await strapi
//         .plugin("todo")
//         .service("todo")
//         .update(ctx.params.id, ctx.request.body);
//     } catch (err) {
//       ctx.throw(500, err);
//     }
//   },

//   async toggle(ctx) {
//     try {
//       ctx.body = await strapi
//         .plugin("todo")
//         .service("todo")
//         .toggle(ctx.params.id);
//     } catch (err) {
//       ctx.throw(500, err);
//     }
//   },
//.....
  async toggle(ctx) {
    try {
      ctx.body = await strapi
        .plugin("todo")
        .service("todo")
        .toggle(ctx.params.id);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
