import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Zap, Trophy, ChevronRight, Star } from "lucide-react"
import Link from "next/link"
export default function LandingPage() {
  const [userCount, setUserCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => (prev < 10000 ? prev + 123 : 10000))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <header className="px-4 lg:px-6 h-14 flex items-center backdrop-blur-sm bg-white/30 sticky top-0 z-10">
        <Link className="flex items-center justify-center" href="#">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">FitPal</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#features">
            Funzionalità
          </Link>
          <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#how-it-works">
            Come funziona
          </Link>
          <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#testimonials">
            Testimonianze
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Il tuo <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">compagno di fitness</span> personale
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Raggiungi i tuoi obiettivi di fitness con allenamenti personalizzati, piani nutrizionali e una community motivante.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
                  Inizia Gratis
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  Scopri di più
                </Button>
              </div>
              <div className="w-full max-w-sm mx-auto mt-8 overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-500">Utenti soddisfatti</p>
                    <div className="mt-1 text-3xl font-semibold text-purple-600">
                      {userCount.toLocaleString()}+
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Funzionalità Uniche</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Allenamenti Adattivi</h3>
                <p className="text-gray-500">Piani di esercizio che si evolvono con te, adattandosi ai tuoi progressi.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold">Nutrizione AI</h3>
                <p className="text-gray-500">Consigli nutrizionali personalizzati basati sulle tue preferenze e obiettivi.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">Sfide Community</h3>
                <p className="text-gray-500">Partecipa a sfide motivanti e celebra i successi con altri membri.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Come Funziona</h2>
            <div className="space-y-8">
              {[
                { title: "Crea il tuo profilo", description: "Inserisci i tuoi obiettivi, preferenze e livello di fitness" },
                { title: "Ricevi il tuo piano", description: "Ottieni un programma personalizzato di allenamento e nutrizione" },
                { title: "Traccia i progressi", description: "Monitora i tuoi miglioramenti e adatta il piano in tempo reale" },
                { title: "Celebra i risultati", description: "Raggiungi i tuoi obiettivi e festeggia con la community" }
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                  {index < 3 && <ChevronRight className="flex-shrink-0 w-6 h-6 text-gray-400" />}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Cosa Dicono i Nostri Utenti</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Marco", text: "FitPal ha trasformato la mia routine di allenamento. Mi sento più motivato che mai!" },
                { name: "Giulia", text: "I piani nutrizionali sono fantastici. Ho finalmente trovato un equilibrio nella mia dieta." },
                { name: "Luca", text: "Le sfide della community mi spingono a dare il massimo. È come avere un personal trainer sempre con te." }
              ].map((testimonial, index) => (
                <div key={index} className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-purple-600">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Inizia il Tuo Viaggio Fitness Oggi
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Unisciti a migliaia di utenti soddisfatti che hanno trasformato la loro vita con FitPal.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Inserisci la tua email"
                    type="email"
                  />
                  <Button className="bg-white text-purple-600 hover:bg-gray-100" type="submit">
                    Iscriviti
                  </Button>
                </form>
                <p className="text-xs text-gray-200">
                  Iscrivendoti, accetti i nostri{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Termini e Condizioni
                  </Link>
                </p>
              </div>
              <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-purple-600">Sblocca il Tuo Potenziale</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Progressi</span>
                  <span className="text-purple-600 font-semibold">0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full w-0 transition-all duration-1000 ease-out"></div>
                </div>
                <p className="mt-4 text-sm text-gray-500">Iscriviti ora e inizia il tuo percorso verso una vita più sana!</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© 2023 FitPal Inc. Tutti i diritti riservati.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termini di Servizio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}