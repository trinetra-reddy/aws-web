import type { NextApiRequest, NextApiResponse } from 'next'

interface GeoData {
  country: string
  countryCode: string
  region: string
  city: string
  latitude: number
  longitude: number
  timezone: string
  nearestOffice: {
    name: string
    country: string
    address: string
    phone: string
    email: string
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeoData | { error: string }>
) {
  try {
    // Get IP address from request
    const forwarded = req.headers['x-forwarded-for']
    const ip = typeof forwarded === 'string' 
      ? forwarded.split(',')[0] 
      : req.socket.remoteAddress || '8.8.8.8'

    // For development, use a default IP if localhost
    const testIp = ip === '::1' || ip === '127.0.0.1' ? '8.8.8.8' : ip

    // Fetch geolocation data from ipapi.co (free tier: 1000 requests/day)
    const geoResponse = await fetch(`https://ipapi.co/${testIp}/json/`)
    
    if (!geoResponse.ok) {
      throw new Error('Failed to fetch geo data')
    }

    const geoData = await geoResponse.json()

    // Determine nearest office based on country
    const nearestOffice = getNearestOffice(geoData.country_code)

    const response: GeoData = {
      country: geoData.country_name || 'Unknown',
      countryCode: geoData.country_code || 'XX',
      region: geoData.region || '',
      city: geoData.city || '',
      latitude: geoData.latitude || 0,
      longitude: geoData.longitude || 0,
      timezone: geoData.timezone || '',
      nearestOffice
    }

    // Cache for 1 hour
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200')
    res.status(200).json(response)
  } catch (error) {
    console.error('Geo API Error:', error)
    
    // Return default office (India) on error
    res.status(200).json({
      country: 'Unknown',
      countryCode: 'XX',
      region: '',
      city: '',
      latitude: 0,
      longitude: 0,
      timezone: '',
      nearestOffice: offices.india
    })
  }
}

// Office data
const offices = {
  india: {
    name: 'India Office (Headquarters)',
    country: 'India',
    address: 'HPR LUXURY HOUSES, Kakkalapalle Rural, Andhra Pradesh, India',
    phone: '+91 7013594249',
    email: 'account@ananthawebsolutions.com'
  },
  canada: {
    name: 'Canada Office',
    country: 'Canada',
    address: '380 Southdale Road East, London, Ontario, Canada',
    phone: '+1 XXX XXX XXXX',
    email: 'account@ananthawebsolutions.com'
  },
  usa: {
    name: 'USA Office',
    country: 'United States',
    address: '6115 Abbotts Bridge Rd Apt 1716, Johns Creek, GA 30097-5760, USA',
    phone: '+1-470-225-0022',
    email: 'account@ananthawebsolutions.com'
  }
}

// Determine nearest office based on country code
function getNearestOffice(countryCode: string) {
  // North America
  if (countryCode === 'US') {
    return offices.usa
  }
  if (countryCode === 'CA') {
    return offices.canada
  }
  
  // Americas (prefer USA office)
  if (['MX', 'BR', 'AR', 'CL', 'CO', 'PE', 'VE'].includes(countryCode)) {
    return offices.usa
  }
  
  // Europe (prefer Canada office due to timezone)
  if (['GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'CH', 'AT', 'SE', 'NO', 'DK', 'FI', 'IE', 'PT', 'PL'].includes(countryCode)) {
    return offices.canada
  }
  
  // Asia, Africa, Oceania (prefer India office)
  return offices.india
}

