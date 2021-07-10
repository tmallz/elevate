import axios from "axios";

export default {
  // Gets stations from CTA API
  getStations: function() {
    return axios.get("http://lapi.transitchicago.com/api/1.0/ttfollow.aspx?key=2559b370a9d34dd2aa9e36688a14bfc7&runnumber=830&outputType=JSON");
  },
};
