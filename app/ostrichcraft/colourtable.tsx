import React from 'react';

const colors = [
  { code: '&0', name: 'Black', hex: '#000000' },
  { code: '&1', name: 'Dark Blue', hex: '#0000AA' },
  { code: '&2', name: 'Dark Green', hex: '#00AA00' },
  { code: '&3', name: 'Dark Aqua', hex: '#00AAAA' },
  { code: '&4', name: 'Dark Red', hex: '#AA0000' },
  { code: '&5', name: 'Dark Purple', hex: '#AA00AA' },
  { code: '&6', name: 'Gold', hex: '#FFAA00' },
  { code: '&7', name: 'Gray', hex: '#AAAAAA' },
  { code: '&8', name: 'Dark Gray', hex: '#555555' },
  { code: '&9', name: 'Blue', hex: '#5555FF' },
  { code: '&a', name: 'Green', hex: '#55FF55' },
  { code: '&b', name: 'Aqua', hex: '#55FFFF' },
  { code: '&c', name: 'Red', hex: '#FF5555' },
  { code: '&d', name: 'Light Purple', hex: '#FF55FF' },
  { code: '&e', name: 'Yellow', hex: '#FFFF55' },
  { code: '&f', name: 'White', hex: '#FFFFFF' },
];

export default function SimpleColorTable() {
  return (
      <div className="w-full max-w-md rounded-xl border border-white/20 shadow-xl overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-white/20 bg-[#1f262b]">
              <th className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-zinc-500">Code</th>
              <th className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-zinc-500">Color</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/20">
            {colors.map((color) => (
              <tr key={color.code} className="transition-colors group">
                <td className="px-6 py-4 font-mono text-indigo-400 font-bold">
                  {color.code}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-5 h-5 rounded shadow-inner ring-1 ring-white/20" 
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}