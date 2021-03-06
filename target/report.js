$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Cucumber/Cucumber/src/test/java/AddCustomer.feature");
formatter.feature({
  "name": "to test add customer functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@us1"
    },
    {
      "name": "@AddCustomerPlan"
    }
  ]
});
formatter.scenario({
  "name": "To test customer id is generated for valid customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@us1"
    },
    {
      "name": "@AddCustomerPlan"
    },
    {
      "name": "@sprint1"
    }
  ]
});
formatter.step({
  "name": "The user is in add customer page.",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fills in the valid customer details",
  "rows": [
    {
      "cells": [
        "sudha",
        "sw tester",
        "sudha@gmail.com",
        "chennai",
        "123456789"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Steps.the_user_fills_in_the_valid_customer_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button.",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user shouid see the customer ID generated.",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.the_user_shouid_see_the_customer_ID_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("D:/Cucumber/Cucumber/src/test/java/AddTariffPlan.feature");
formatter.feature({
  "name": "to test Add Tariff Plan.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@2regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@addTariffPlan"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To test the sucess message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint1"
    }
  ]
});
formatter.step({
  "name": "The user is in Add Tariff Plan page.",
  "keyword": "Given "
});
formatter.step({
  "name": "The user fills in the valid Plan details.\"\u003cMonthRental\u003e\",\"\u003cFreeLocMins\u003e\",\"\u003cFreeIntMins\u003e\",\"\u003cFreeSMS\u003e\",\"\u003cLocCharges\u003e\",\"\u003cIntCharges\u003e\",\"\u003cSMSCharges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user clicks the submit buttons.",
  "keyword": "When "
});
formatter.step({
  "name": "The user shouid see the Sucess Message.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonthRental",
        "FreeLocMins",
        "FreeIntMins",
        "FreeSMS",
        "LocCharges",
        "IntCharges",
        "SMSCharges"
      ]
    },
    {
      "cells": [
        "1000",
        "100",
        "200",
        "100",
        "400",
        "500",
        "600"
      ]
    },
    {
      "cells": [
        "2000",
        "200",
        "300",
        "120",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "3000",
        "300",
        "400",
        "130",
        "600",
        "700",
        "800"
      ]
    },
    {
      "cells": [
        "4000",
        "400",
        "500",
        "140",
        "700",
        "800",
        "800"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test the sucess message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@2regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@addTariffPlan"
    },
    {
      "name": "@sprint1"
    }
  ]
});
formatter.step({
  "name": "The user is in Add Tariff Plan page.",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps1.the_user_is_in_Add_Tariff_Plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fills in the valid Plan details.\"1000\",\"100\",\"200\",\"100\",\"400\",\"500\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps1.the_user_fills_in_the_valid_Plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit buttons.",
  "keyword": "When "
});
formatter.match({
  "location": "Steps1.the_user_clicks_the_submit_buttons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user shouid see the Sucess Message.",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps1.the_user_shouid_see_the_Sucess_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the sucess message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@2regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@addTariffPlan"
    },
    {
      "name": "@sprint1"
    }
  ]
});
formatter.step({
  "name": "The user is in Add Tariff Plan page.",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps1.the_user_is_in_Add_Tariff_Plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fills in the valid Plan details.\"2000\",\"200\",\"300\",\"120\",\"500\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps1.the_user_fills_in_the_valid_Plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit buttons.",
  "keyword": "When "
});
formatter.match({
  "location": "Steps1.the_user_clicks_the_submit_buttons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user shouid see the Sucess Message.",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps1.the_user_shouid_see_the_Sucess_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the sucess message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@2regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@addTariffPlan"
    },
    {
      "name": "@sprint1"
    }
  ]
});
formatter.step({
  "name": "The user is in Add Tariff Plan page.",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps1.the_user_is_in_Add_Tariff_Plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fills in the valid Plan details.\"3000\",\"300\",\"400\",\"130\",\"600\",\"700\",\"800\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps1.the_user_fills_in_the_valid_Plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit buttons.",
  "keyword": "When "
});
formatter.match({
  "location": "Steps1.the_user_clicks_the_submit_buttons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user shouid see the Sucess Message.",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps1.the_user_shouid_see_the_Sucess_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the sucess message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@2regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@addTariffPlan"
    },
    {
      "name": "@sprint1"
    }
  ]
});
formatter.step({
  "name": "The user is in Add Tariff Plan page.",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps1.the_user_is_in_Add_Tariff_Plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fills in the valid Plan details.\"4000\",\"400\",\"500\",\"140\",\"700\",\"800\",\"800\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps1.the_user_fills_in_the_valid_Plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit buttons.",
  "keyword": "When "
});
formatter.match({
  "location": "Steps1.the_user_clicks_the_submit_buttons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user shouid see the Sucess Message.",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps1.the_user_shouid_see_the_Sucess_Message()"
});
formatter.result({
  "status": "passed"
});
});