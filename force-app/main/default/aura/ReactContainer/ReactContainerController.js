({
    // handleMessage: function (component, event, helper) {
    //   var msg = {
    //     name: "Hello",
    //     value: component.get("v.message.Email")
    //   };
    //   component.find("jsApp").message(msg);
    //   // console.log("AAGAT", event);
    //   // const payload = event.getParams().payload;
    //   // console.log("AAGAT SECOND", payload);
    //   // component.set('v.message', message.payload.value);
    //   // message.payload.value contains the returned value
    //   // component.find
    // },
        handleSaveRecord: function(component, event, helper) {
          component.find("recordEditor").saveRecord($A.getCallback(function(saveResult) {
              if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                  console.log("Save completed successfully.");
              } else if (saveResult.state === "INCOMPLETE") {
                  console.log("User is offline, device doesn't support drafts.");
              } else if (saveResult.state === "ERROR") {
                  console.log('Problem saving record, error: ' +
                             JSON.stringify(saveResult.error));
              } else {
                  console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
              }
          }));},
    handleError: function (component, event, helper) {
      var error = event.getParams();
      console.log(error);
    }
  })