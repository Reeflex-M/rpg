import React, { useState } from 'react';

interface PlayerCardProps {
  id: number;
  name: string;
  hp: number;
  maxHp: number;
  mana: number;
  maxMana: number;
  onHpChange: (id: number, value: number) => void;
  onManaChange: (id: number, value: number) => void;
}

export default function PlayerCard({
  id,
  name,
  hp,
  maxHp,
  mana,
  maxMana,
  onHpChange,
  onManaChange
}: PlayerCardProps) {
  const [hpAmount, setHpAmount] = useState<number>(10);
  const [manaAmount, setManaAmount] = useState<number>(10);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-3">{name}</h2>
      
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium">PV: {hp}/{maxHp}</span>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={hpAmount}
              onChange={(e) => setHpAmount(Math.max(1, parseInt(e.target.value) || 0))}
              className="w-16 px-2 py-1 border rounded text-center"
              min="1"
            />
            <button 
              onClick={() => onHpChange(id, -hpAmount)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              -{hpAmount}
            </button>
            <button 
              onClick={() => onHpChange(id, hpAmount)}
              className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              +{hpAmount}
            </button>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-red-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(hp / maxHp) * 100}%` }}
          ></div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium">Mana: {mana}/{maxMana}</span>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={manaAmount}
              onChange={(e) => setManaAmount(Math.max(1, parseInt(e.target.value) || 0))}
              className="w-16 px-2 py-1 border rounded text-center"
              min="1"
            />
            <button 
              onClick={() => onManaChange(id, -manaAmount)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              -{manaAmount}
            </button>
            <button 
              onClick={() => onManaChange(id, manaAmount)}
              className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              +{manaAmount}
            </button>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(mana / maxMana) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}