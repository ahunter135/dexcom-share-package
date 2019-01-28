exports.getDexcomSessionId = async function(username, password) {
  var body = {
      accountName: username,
      password: password,
      applicationId: "d89443d2-327c-4a6f-89e5-496bbb0317db"
    };

    return await fetch('https://share1.dexcom.com/ShareWebServices/Services/General/LoginPublisherAccountByName', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
    }).then(function(response) {
      return response.text();
    }).then(function(data) {
      return JSON.parse(data);
    }).catch(function(err) {
      console.log("ERROR");
      console.log(err);
    });
}

exports.getDexcomGlucoseData = async function(sessionId) {
  return await fetch('https://share1.dexcom.com/ShareWebServices/Services/Publisher/ReadPublisherLatestGlucoseValues?sessionId=' + sessionId + '&minutes=1440&maxCount=1', {
      method: 'post',
      headers: {
      "Content-Type": "application/json"
      },
  }).then(function(response) {
      return response.text();
  }).then(function(data) {
      data = JSON.parse(data);
      return data;    
  });
}