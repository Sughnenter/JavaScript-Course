 /*
      true;
      false;
      console.log(3 > 5 - 5);
      console.log(5 === "5.00");
      const age = 15;
      if (true) {
        console.log("hello");
      } else {
        console.log("Else");
      }
      if (age >= 16) {
        console.log("you can drive");
        console.log("Congrats")
      } else if(age>=14){
        console.log("almost there");
      } else {
        console.log("You are not able to drive");
      }
        
      console.log(!0);

      console.log(5 / "text");

      let variable;
      console.log(variable);
      */

      const result = 0 ? "truthy" : "falsy";
      console.log(result);

      false && console.log("hello");

      const message = 5 && "hello";
      console.log(message);

      const currency = undefined || "USD";
      console.log(currency);