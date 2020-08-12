({
    handleMessage: function (component, event, helper) {
      var msg = {
        name: "Hello",
        value: component.get("v.message.Email")
      };
      component.find("jsApp").message(msg);
      // console.log("AAGAT", event);
      // const payload = event.getParams().payload;
      // console.log("AAGAT SECOND", payload);
      // component.set('v.message', message.payload.value);
      // message.payload.value contains the returned value
      // component.find
    },
    handleError: function (component, event, helper) {
      var error = event.getParams();
      console.log(error);
    }
  })