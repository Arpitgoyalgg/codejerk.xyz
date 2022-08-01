export default function handler(req, res) {
  var myHeaders = new Headers()
  myHeaders.append(
    'X-Master-Key',
    '$2b$10$/ENjcchiA31ls6D7NeUAMeWuiCsoNSyE9iccV8a/SoRS5JbHDOy2u'
  )

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  fetch(`https://api.jsonbin.io/v3/b/62d97a21248d43754ffe585b/latest`,requestOptions)
    .then(response => response.json())
    .then(geoData => res.status(200).json(geoData))
}
