jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px 5.0px 7.5px #999999)",
                        "text-shadow": "none",
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#666666"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px 2.0px 2.5px #999999)",
                        "text-shadow": "none",
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#666666"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6f544c14-1607-4944-b1e4-1efb02d7b34f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px 5.0px 7.5px #999999)",
                        "text-shadow": "none",
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#666666"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px 2.0px 2.5px #999999)",
                        "text-shadow": "none",
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#666666"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4ff2f8ce-4eaa-4a6c-84f0-0568fe623413"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });