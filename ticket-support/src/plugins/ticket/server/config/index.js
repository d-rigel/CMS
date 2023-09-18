'use strict';

module.exports = {
  default: {},
  validator() {},
 
   //   mimic send receive email
   receiveEmail(sender, subject, message, callback) {
    setTimeout(function () {
      const tId = Math.floor(Math.random() * 1234578);
      const email = {
        sender: sender,
        subject: subject,
        message: message,
        threadId: tId,
        receivedAt: new Date(),
      };
      callback(null, email); // Simulate a successful email reception
    }, 2000); // Simulate a 2-second delay
  }

};
