import { request } from "@strapi/helper-plugin";

const todoRequests = {
  getAllTickets: async () => {
    return await request("/ticket/find", {
      method: "GET",
    });
  },

  addTicket: async (data) => {
    return await request(`/ticket/create`, {
      method: "POST",
      body: { data: data },
    });
  },


};

export default todoRequests;
