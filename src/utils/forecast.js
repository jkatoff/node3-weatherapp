const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/3f4511907cd5b4f0ff0955ee112e8979/' + latitude + ',' + longitude

  request({ url, json: true }, (error, { body }) => {
    if(error) {
      callback("Unable to connect to Weather Service", undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined,body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' degrees out.  There is a ' + body.currently.precipProbability + ' percent chance of rain  There is ' + body.currently.cloudCover + '% cloud cover')
    }
  })

}

module.exports = forecast