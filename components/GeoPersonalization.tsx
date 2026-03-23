'use client'
import { useState, useEffect } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

interface GeoData {
  country: string
  countryCode: string
  city: string
  nearestOffice: {
    name: string
    country: string
    address: string
    phone: string
    email: string
  }
}

export default function GeoPersonalization() {
  const [geoData, setGeoData] = useState<GeoData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch geo data
    fetch('/api/geo')
      .then(res => res.json())
      .then(data => {
        setGeoData(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Failed to fetch geo data:', error)
        setLoading(false)
      })
  }, [])

  if (loading || !geoData) {
    return null
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Your Nearest Office: {geoData.nearestOffice.name}
          </h3>
          {geoData.country && geoData.country !== 'Unknown' && (
            <p className="text-sm text-slate-600 mb-3">
              We detected you're browsing from <strong>{geoData.city && geoData.city !== 'Unknown' ? `${geoData.city}, ` : ''}{geoData.country}</strong>
            </p>
          )}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>{geoData.nearestOffice.address}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Phone className="w-4 h-4 text-blue-600" />
              <a href={`tel:${geoData.nearestOffice.phone.replace(/\s/g, '')}`} className="hover:text-blue-600 transition-colors">
                {geoData.nearestOffice.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Mail className="w-4 h-4 text-blue-600" />
              <a href={`mailto:${geoData.nearestOffice.email}`} className="hover:text-blue-600 transition-colors">
                {geoData.nearestOffice.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Compact version for header/footer
export function GeoOfficeInfo() {
  const [geoData, setGeoData] = useState<GeoData | null>(null)

  useEffect(() => {
    fetch('/api/geo')
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(error => console.error('Failed to fetch geo data:', error))
  }, [])

  if (!geoData) {
    return null
  }

  return (
    <div className="inline-flex items-center gap-2 text-sm">
      <MapPin className="w-4 h-4" />
      <span>{geoData.nearestOffice.country}</span>
      <span className="text-blue-600 font-semibold">{geoData.nearestOffice.phone}</span>
    </div>
  )
}

