import React from 'react'
import { useEffect,useState } from 'react';

export default function DevicesTestApi() {
  const [devices, setDevices] = useState(null);

  const fetchAllDevices = async()=>{
    const response = await fetch('/api/getResearch')
    const json = await response.json()
    if (response.ok){
      setDevices(json)
    }
  }

  useEffect(()=>{
    fetchAllDevices()
    console.log(devices)
  },[])
  return (
    <div>
      {devices && devices.map((device) => (
        <h1 key={device._id}>{device.type}</h1>
      ))}
    </div>
  )
}
