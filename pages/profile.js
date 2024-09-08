/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CrgO4bVoZU0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-[#1e1e1e] text-white min-h-[100vh]">
      <header className="bg-[#2c2c2c] py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DumbbellIcon className="h-6 w-6" />
          <h1 className="text-xl font-bold">Fitpal</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/landing" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Allenamenti
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Profilo
          </Link>
        </div>
      </header>
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#2c2c2c] rounded-lg p-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-sm text-[#a0a0a0]">@johndoe</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-4xl font-bold">150</p>
                <p className="text-sm text-[#a0a0a0]">Allenamenti</p>
              </div>
              <div>
                <p className="text-4xl font-bold">12</p>
                <p className="text-sm text-[#a0a0a0]">Obiettivi</p>
              </div>
              <div>
                <p className="text-4xl font-bold">98%</p>
                <p className="text-sm text-[#a0a0a0]">Progressi</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold">Obiettivi</h3>
              <div className="mt-2 grid gap-2">
                <div className="flex items-center justify-between">
                  <p>Perdere 10 kg</p>
                  <Progress value={80} className="w-1/2" />
                </div>
                <div className="flex items-center justify-between">
                  <p>Aumentare la massa muscolare</p>
                  <Progress value={60} className="w-1/2" />
                </div>
                <div className="flex items-center justify-between">
                  <p>Migliorare la resistenza</p>
                  <Progress value={90} className="w-1/2" />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold">Calisthenics Skills</h3>
              <div className="mt-2 grid gap-2">
                <div className="flex items-center justify-between">
                  <p>Pull-ups</p>
                  <Progress value={75} className="w-1/2" />
                </div>
                <div className="flex items-center justify-between">
                  <p>Dips</p>
                  <Progress value={65} className="w-1/2" />
                </div>
                <div className="flex items-center justify-between">
                  <p>Handstand Push-ups</p>
                  <Progress value={50} className="w-1/2" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#2c2c2c] rounded-lg p-6">
            <h3 className="text-xl font-bold">Attività recenti</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p>Hai completato l'allenamento di corsa</p>
                  <p className="text-sm text-[#a0a0a0]">2 ore fa</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p>Hai raggiunto il tuo obiettivo di 10.000 passi</p>
                  <p className="text-sm text-[#a0a0a0]">4 ore fa</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p>Hai completato l'allenamento di forza</p>
                  <p className="text-sm text-[#a0a0a0]">8 ore fa</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold">Schede più usate</h3>
              <div className="mt-2 grid gap-2">
                <div className="flex items-center justify-between">
                  <p>Full Body Workout</p>
                  <Progress value={90} className="w-1/2" />
                </div>
                <div className="flex items-center justify-between">
                  <p>Cardio Intensivo</p>
                  <Progress value={80} className="w-1/2" />
                </div>
                <div className="flex items-center justify-between">
                  <p>Potenziamento Gambe</p>
                  <Progress value={75} className="w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <Button variant="outline" className="px-4 py-2 rounded-md">
            Modifica profilo
            <FilePenIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

function DumbbellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  )
}


function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}