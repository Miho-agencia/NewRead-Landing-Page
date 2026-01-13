
import React, { useState, useEffect } from 'react';

const TelemetryOverlay: React.FC = () => {
  const [data, setData] = useState({
    lat: "-23.5505",
    lng: "-46.6333",
    cpu: "12%",
    ping: "24ms"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        lat: (-23.5505 + (Math.random() - 0.5) * 0.001).toFixed(4),
        lng: (-46.6333 + (Math.random() - 0.5) * 0.001).toFixed(4),
        cpu: `${Math.floor(Math.random() * 20 + 5)}%`,
        ping: `${Math.floor(Math.random() * 10 + 20)}ms`
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-4 right-4 font-mono text-[8px] text-blue-500/60 leading-tight select-none pointer-events-none z-50 bg-black/20 backdrop-blur-sm p-2 rounded-lg border border-white/5">
      <div>LOC: {data.lat} / {data.lng}</div>
      <div>SYS_LOAD: {data.cpu}</div>
      <div>NET_LAT: {data.ping}</div>
      <div>ENC: AES_256_GCM</div>
      <div className="mt-1 flex gap-1">
        <div className="w-1 h-1 bg-blue-500 animate-pulse"></div>
        <div className="w-1 h-1 bg-emerald-500 animate-pulse delay-75"></div>
      </div>
    </div>
  );
};

export default TelemetryOverlay;
