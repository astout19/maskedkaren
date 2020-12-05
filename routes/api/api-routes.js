const express = require("express");
const router = express();
const stateGuidelines = require("../../data/covid-state-data");

router.get("/api/stateGuidlines/:state", function(req, res) {
    var chosen = req.params.state;
  
  
    for (var i = 0; i < stateGuidlines.length; i++) {
      if (chosen === stateGuidelines[i].stateName) {
        return res.json(stateGuidelines[i]);
      }
    }
  
    return res.json(false);
  });
  
  module.exports = router;