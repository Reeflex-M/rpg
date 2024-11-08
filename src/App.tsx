import React, { useState } from 'react';
import PlayerCard from './components/PlayerCard';

interface Player {
  id: number;
  name: string;
  hp: number;
  maxHp: number;
  mana: number;
  maxMana: number;
}

const initialPlayers: Player[] = [
  { id: 1, name: 'Guerrier', hp: 100, maxHp: 100, mana: 50, maxMana: 50 },
  { id: 2, name: 'Mage', hp: 70, maxHp: 70, mana: 100, maxMana: 100 },
  { id: 3, name: 'Prêtre', hp: 80, maxHp: 80, mana: 80, maxMana: 80 },
  { id: 4, name: 'Voleur', hp: 75, maxHp: 75, mana: 60, maxMana: 60 },
  { id: 5, name: 'Druide', hp: 85, maxHp: 85, mana: 70, maxMana: 70 },
];

function App() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);

  const handleHpChange = (playerId: number, change: number) => {
    setPlayers(players.map(player => {
      if (player.id === playerId) {
        const newHp = Math.min(Math.max(0, player.hp + change), player.maxHp);
        return { ...player, hp: newHp };
      }
      return player;
    }));
  };

  const handleManaChange = (playerId: number, change: number) => {
    setPlayers(players.map(player => {
      if (player.id === playerId) {
        const newMana = Math.min(Math.max(0, player.mana + change), player.maxMana);
        return { ...player, mana: newMana };
      }
      return player;
    }));
  };

  const handleReset = () => {
    setPlayers(initialPlayers);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Gestionnaire RPG</h1>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Réinitialiser
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {players.map(player => (
            <PlayerCard
              key={player.id}
              {...player}
              onHpChange={handleHpChange}
              onManaChange={handleManaChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;