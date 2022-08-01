export default function handler(req, res) {
  fetch(
    `https://geolocation-db.com/json/`,
  )
    .then(response => response.json())
    .then(geo => res.status(200).json(geo))
}
