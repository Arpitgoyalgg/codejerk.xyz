import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export function DinoCount(props) {
  const [existingBinData, setExistingBinData] = useState()
  const [count, setCount] = useState()
  const [countDep, setCountDep] = useState(false)
  const [geoData, setGeoData] = useState()
  const isMounted = useRef(false)

  useEffect(() => {
    fetch(`https://api.jsonbin.io/v3/b/62d97a21248d43754ffe585b/latest`)
      .then(response => response.json())
      .then(binData => {
        setExistingBinData(binData.record)
        setCount(binData.record.count)
      })

    fetch(`https://geolocation-db.com/json/`)
      .then(response => response.json())
      .then(geoData => setGeoData(geoData))
  }, [])

  useEffect(() => {
    if (isMounted.current) {
      let prevGeo = existingBinData.geoData
      prevGeo.push(geoData)
      let newData = {
        ...existingBinData,
        count: count,
        geoData: prevGeo,
      }

      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData),
      }
      fetch(
        'https://api.jsonbin.io/v3/b/62d97a21248d43754ffe585b',
        requestOptions
      )
        .then(response => response.json())
        .then(data => console.log('Getting sneaky, huh?'))
    } else {
      isMounted.current = true
    }
  }, [countDep])

  function handleCountCountry() {
    setCount(count + 1)
    setCountDep(!countDep)
  }

  return (
    <div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-32 h-32 overflow-hidden rounded-lg md:h-40 md:w-40 lg:h-48 lg:w-48">
          <Image
            src="/images/giphy.webp"
            alt="My avatar"
            width={256}
            height={256}
            quality={100}
            priority={true}
          />
        </div>
      </div>
      <div className="mt-2 ml-2">
        Here's someone greeting.{' '}
        <span className="text-pink-600">
          <b>Cute, right?</b>
        </span>
        <div
          className="text-center mt-2 animate-bounce"
          onClick={handleCountCountry}
        >
          💖 {count}
        </div>
      </div>
    </div>
  )
}
