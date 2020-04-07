const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent (address) + '.json?access_token=pk.eyJ1IjoiamthdG9mZiIsImEiOiJjazdnY3F2OTYwYzl0M2Zta3ViNjk1Y3djIn0.iHxNvd4du6YG6Eag51f7uw&limit=1'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services", undefined)
    } else if (body.features.length === 0) {
        callback("Unable to find location.  Try another search", undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}


module.exports = geocode