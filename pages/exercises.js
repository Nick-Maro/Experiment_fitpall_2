import { useState } from 'react'
import { Button } from "@/components/ui/button_es"
import { Input } from "@/components/ui/input_es"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select_es"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card_es"
import { PlayCircle, Filter } from 'lucide-react'

// Dati di esempio per gli esercizi
const exercises = [
  {
    id: 1,
    name: "Squat",
    level: "Principiante",
    type: "Forza",
    target: "Gambe",
    videoUrl: "https://example.com/squat-video",
    description: "Lo squat è un esercizio fondamentale per la forza delle gambe.",
    instructions: "1. Stai in piedi con i piedi alla larghezza delle spalle. 2. Abbassa il corpo come se stessi per sederti. 3. Mantieni il petto alto e le ginocchia in linea con i piedi. 4. Spingi attraverso i talloni per tornare in posizione eretta."
  },
  {
    id: 2,
    name: "Plank",
    level: "Intermedio",
    type: "Resistenza",
    target: "Core",
    videoUrl: "https://example.com/plank-video",
    description: "Il plank è eccellente per costruire la resistenza del core.",
    instructions: "1. Inizia in posizione push-up. 2. Abbassa gli avambracci a terra. 3. Mantieni il corpo in linea retta dalla testa ai talloni. 4. Contrai i muscoli addominali e glutei. 5. Mantieni la posizione per il tempo desiderato."
  },
  // Aggiungi altri esercizi qui...
]

export default function ZonaEsercizi() {
  const [filteredExercises, setFilteredExercises] = useState(exercises)
  const [searchTerm, setSearchTerm] = useState('')
  const [levelFilter, setLevelFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [targetFilter, setTargetFilter] = useState('')

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterExercises(e.target.value, levelFilter, typeFilter, targetFilter);
  };
  
  const handleLevelFilter = (value) => {
    setLevelFilter(value);
    filterExercises(searchTerm, value, typeFilter, targetFilter);
  };
  
  const handleTypeFilter = (value) => {
    setTypeFilter(value);
    filterExercises(searchTerm, levelFilter, value, targetFilter);
  };
  
  const handleTargetFilter = (value) => {
    setTargetFilter(value);
    filterExercises(searchTerm, levelFilter, typeFilter, value);
  };
  
  const filterExercises = (search, level, type, target) => {
    const filtered = exercises.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(search.toLowerCase()) &&
        (level === '' || exercise.level === level) &&
        (type === '' || exercise.type === type) &&
        (target === '' || exercise.target === target)
    );
    setFilteredExercises(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Zona Esercizi</h1>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <Input
          type="search"
          placeholder="Cerca esercizi..."
          value={searchTerm}
          onChange={handleSearch}
          className="bg-gray-800 text-gray-100 border-gray-700"
        />
        <Select onValueChange={handleLevelFilter}>
          <SelectTrigger className="w-[180px] bg-gray-800 text-gray-100 border-gray-700">
            <SelectValue placeholder="Livello" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-gray-100 border-gray-700">
            <SelectItem value="Principiante">Principiante</SelectItem>
            <SelectItem value="Intermedio">Intermedio</SelectItem>
            <SelectItem value="Avanzato">Avanzato</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={handleTypeFilter}>
          <SelectTrigger className="w-[180px] bg-gray-800 text-gray-100 border-gray-700">
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-gray-100 border-gray-700">
            <SelectItem value="Forza">Forza</SelectItem>
            <SelectItem value="Resistenza">Resistenza</SelectItem>
            <SelectItem value="Mobilità">Mobilità</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={handleTargetFilter}>
          <SelectTrigger className="w-[180px] bg-gray-800 text-gray-100 border-gray-700">
            <SelectValue placeholder="Obiettivo" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-gray-100 border-gray-700">
            <SelectItem value="Gambe">Gambe</SelectItem>
            <SelectItem value="Core">Core</SelectItem>
            <SelectItem value="Braccia">Braccia</SelectItem>
            <SelectItem value="Schiena">Schiena</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="bg-gray-800 text-gray-100 border-gray-700 hover:bg-gray-700">
          <Filter className="mr-2 h-4 w-4" /> Filtra
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map(exercise => (
          <Card key={exercise.id} className="bg-gray-800 text-gray-100 border-gray-700">
            <CardHeader>
              <CardTitle>{exercise.name}</CardTitle>
              <CardDescription className="text-gray-400">
                {exercise.level} | {exercise.type} | {exercise.target}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-700 mb-4 flex items-center justify-center">
                <PlayCircle className="h-12 w-12 text-gray-400" />
              </div>
              <p className="mb-4">{exercise.description}</p>
              <h4 className="font-semibold mb-2">Istruzioni:</h4>
              <p className="text-sm text-gray-400">{exercise.instructions}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}