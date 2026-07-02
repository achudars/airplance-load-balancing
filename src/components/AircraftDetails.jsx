export default function AircraftDetails({ aircraft }) {
  if (!aircraft) return null

  const rows = [
    { label: 'ICAO Type',       value: aircraft.icao },
    { label: 'Category',        value: aircraft.type },
    { label: 'Engines',         value: aircraft.engines },
    { label: 'Max Passengers',  value: aircraft.maxPax },
    { label: 'DOW',             value: `${aircraft.dow.toLocaleString()} kg` },
    { label: 'MZFW',            value: `${aircraft.mzfw.toLocaleString()} kg` },
    { label: 'MTOW',            value: `${aircraft.mtow.toLocaleString()} kg` },
    { label: 'MLM',             value: `${aircraft.mlm.toLocaleString()} kg` },
    { label: 'Max Fuel',        value: `${aircraft.maxWingFuel.toLocaleString()} kg` },
    { label: 'Max Cargo',       value: `${aircraft.maxCargo.toLocaleString()} kg` },
    { label: 'Std Pax Weight',  value: `${aircraft.paxWeightKg} kg/pax` },
    { label: 'Typical Taxi Fuel', value: `${aircraft.taxiFuelBurn} kg` },
  ]

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
      {rows.map(r => (
        <div key={r.label} className="flex flex-col gap-0.5 border-b border-slate-800 pb-3">
          <span className="text-xs text-slate-500 uppercase tracking-wider">{r.label}</span>
          <span className="text-sm font-mono font-semibold text-white">{r.value}</span>
        </div>
      ))}
    </div>
  )
}
