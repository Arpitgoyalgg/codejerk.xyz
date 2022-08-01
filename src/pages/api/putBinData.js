export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const bodyFromClient = req.body
  console.log(bodyFromClient)

  var myHeaders = new Headers()
  myHeaders.append(
    'X-Master-Key',
    '$2b$10$/ENjcchiA31ls6D7NeUAMeWuiCsoNSyE9iccV8a/SoRS5JbHDOy2u'
  )
  myHeaders.append('Content-Type', 'application/json')

  var raw = JSON.stringify(bodyFromClient);
  

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  }

  fetch('https://api.jsonbin.io/v3/b/62d97a21248d43754ffe585b', requestOptions)
    .then(response => response.text())
    .then(result => res.status(200).json('Getting sneaky, huh?'))
}
