"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    
    return await strapi.entityService.findMany("plugin::ticket.ticket", query);
  },

  async create(data) {
    const { email } = data; 

    // Check if the email address has been marked as spam before.
    const isEmailMarkedAsSpam = await strapi
      .query("plugin::ticket.ticket")
      .count({ email , status: "spam" });
    
      console.log("is email spam?", isEmailMarkedAsSpam)

      let newTicketStatus = 'wait'; // Default status.
   
      if (isEmailMarkedAsSpam) {
        newTicketStatus = 'spam';
      }

      const newTicketData = {
        ...data,
        status: newTicketStatus,
      };
      const newTicket = await strapi.entityService.create('plugin::ticket.ticket', newTicketData);

      return newTicket;

  },

  async respond(ticketId, data) {
    const threadID = ticketId;
    const responseData =  {
      to: 'support@example.com',
      from: data.email,
      subject: data.subject,
      message: data.message,
      status: "replied",
      threadID: threadID,
      date: Date.now() // Use the same ThreadID as the original email.
    }

    // Update the ticket with the response data
    const newTicket = await strapi.entityService.create(
      "plugin::ticket.ticket",
       responseData
    );

    return newTicket;
  },

  async resolve(id, data) {
    try {
      // Save the updated invitation
      data.status = "resolved";
      const updatedTicket = await strapi.entityService.update(
        "plugin::ticket.ticket",
        id,
        { data: data }
      );
      return updatedTicket;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  async spam(id, data) {
    try {
      // Save the updated invitation
      data.status = "spam";
      const spamTicket = await strapi.entityService.update(
        "plugin::ticket.ticket",
        id,
        { data: data }
      );
      return spamTicket;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  async read(id, data) {
    try {
    //updated the status to read
      data.status = "read";
      const readTicket = await strapi.entityService.update(
        "plugin::ticket.ticket",
        id,
        { data: data }
      );
      return readTicket;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  async sendEmail(ctx) {
    try {
      // Simulate sending an email
      const emailData = ctx.request.body; // This should contain email details like to, subject, message, etc.

      console.log('Simulated email sent:', emailData);

      ctx.send({ message: 'Email sent successfully' });
    } catch (err) {
      ctx.throw(500, 'Error sending email', { error: err });
    }
  },
  async receiveEmail(ctx) {
    try {
      // Simulate receiving an email
      const emailData = {
        id: '467843',
        from: 'sender@example.com',
        subject: 'Received Email Subject',
        message: 'Received Email Message',
        threadID: '6',
        status: 'resolved'
      };
      console.log('Simulated email received:', emailData);
      ctx.send({ message: 'Email received and processed' });
    } catch (err) {
      ctx.throw(500, 'Error receiving email', { error: err });
    }
  },

 
});
