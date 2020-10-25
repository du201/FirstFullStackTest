module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  // const sedentary_minutes = require("../controllers/sedentary_minutes.controller.js");
  // const lightly_active_minutes = require("../controllers/lightly_active_minutes.controller.js");
  // const fairly_active_minutes = require("../controllers/fairly_active_minutes.controller.js");
  // const very_active_minutes = require("../controllers/very_active_minutes.controller.js");
  // const hr30100_minutes = require("../controllers/hr30100_minutes.controller.js");
  // const hr100140_minutes = require("../controllers/hr100140_minutes.controller.js");
  // const hr140170_minutes = require("../controllers/hr140170_minutes.controller.js");

  // Create a new Customer
  app.post("/customers", customers.create);

  // Retrieve all Customers
  app.get("/customers", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/customers/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/customers/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/customers/:customerId", customers.delete);

  // Delete all customers
  app.delete("/customers", customers.deleteAll);

  //For Merck Biometrics

  // Retrieve all sedentary_minutes
  // app.get("/sedentary_minutes", sedentary_minutes.findAll);

  // // Retrieve all lightly_active_minutes
  // app.get("/lightly_active_minutes", lightly_active_minutes.findAll);

  // // Retrieve all fairly_active_minutes
  // app.get("/fairly_active_minutes", fairly_active_minutes.findAll);

  // // Retrieve all very_active_minutes
  // app.get("/very_active_minutes", very_active_minutes.findAll);

  // // Retrieve all hr30100_minutes
  // app.get("/hr30100_minutes", hr30100_minutes.findAll);

  // // Retrieve all hr100140_minutes
  // app.get("/hr100140_minutes", hr100140_minutes.findAll);

  // // Retrieve all hr140170_minutes
  // app.get("/hr140170_minutes", hr140170_minutes.findAll);



};