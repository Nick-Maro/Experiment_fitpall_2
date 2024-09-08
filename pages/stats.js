"use client"

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Calendar } from '@/components/ui/calendar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Activity, Dumbbell, Flame, Heart } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const data = [
  { name: 'Lun', calories: 2400, weight: 80 },
  { name: 'Mar', calories: 1398, weight: 79.5 },
  { name: 'Mer', calories: 9800, weight: 79.2 },
  { name: 'Gio', calories: 3908, weight: 79 },
  { name: 'Ven', calories: 4800, weight: 78.8 },
  { name: 'Sab', calories: 3800, weight: 78.5 },
  { name: 'Dom', calories: 4300, weight: 78.3 },
]

const workouts = [
  { date: '2023-06-01', type: 'Cardio', duration: '45 min', calories: 350 },
  { date: '2023-06-03', type: 'Forza', duration: '60 min', calories: 400 },
  { date: '2023-06-05', type: 'HIIT', duration: '30 min', calories: 300 },
  { date: '2023-06-07', type: 'Yoga', duration: '75 min', calories: 200 },
]

export default function ProgressTracking() {
  const [date, setDate] = useState(new Date())

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-8">Tracciamento Progressi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gray-900">
          <CardHeader>
            <CardTitle>Calorie Bruciate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none', color: '#F3F4F6' }} />
                  <Line type="monotone" dataKey="calories" stroke="#EF4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900">
          <CardHeader>
            <CardTitle>Peso Corporeo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none', color: '#F3F4F6' }} />
                  <Line type="monotone" dataKey="weight" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900">
          <CardHeader>
            <CardTitle>Statistiche Settimanali</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Flame className="text-red-500" />
                <div>
                  <p className="text-sm text-gray-400">Calorie Totali</p>
                  <p className="text-2xl font-bold">12,450</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="text-green-500" />
                <div>
                  <p className="text-sm text-gray-400">Allenamenti</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Dumbbell className="text-blue-500" />
                <div>
                  <p className="text-sm text-gray-400">Peso Sollevato</p>
                  <p className="text-2xl font-bold">2,500 kg</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-pink-500" />
                <div>
                  <p className="text-sm text-gray-400">FC Media</p>
                  <p className="text-2xl font-bold">72 bpm</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-900 md:col-span-2">
          <CardHeader>
            <CardTitle>Storico Allenamenti</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="list" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="list">Lista</TabsTrigger>
                <TabsTrigger value="calendar">Calendario</TabsTrigger>
              </TabsList>
              <TabsContent value="list">
                <ul className="space-y-4">
                  {workouts.map((workout, index) => (
                    <li key={index} className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">{workout.type}</p>
                          <p className="text-sm text-gray-400">{workout.date}</p>
                        </div>
                        <div className="text-right">
                          <p>{workout.duration}</p>
                          <p className="text-sm text-gray-400">{workout.calories} cal</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="calendar">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border border-gray-700"
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="bg-gray-900">
          <CardHeader>
            <CardTitle>Obiettivi</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <p className="text-sm text-gray-400">Peso Obiettivo</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">75 kg</p>
                  <p className="text-green-500">-3.3 kg</p>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </li>
              <li>
                <p className="text-sm text-gray-400">Allenamenti Settimanali</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">4 / 5</p>
                  <p className="text-yellow-500">1 rimanente</p>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </li>
              <li>
                <p className="text-sm text-gray-400">Calorie Giornaliere</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">1800 / 2000</p>
                  <p className="text-blue-500">200 rimanenti</p>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}