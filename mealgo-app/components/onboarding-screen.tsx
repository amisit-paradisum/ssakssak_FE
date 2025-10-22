"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface OnboardingScreenProps {
  onNext: () => void
}

export function OnboardingScreen({ onNext }: OnboardingScreenProps) {
  const [school, setSchool] = useState("")

  return (
    <div className="flex flex-col min-h-screen px-6 pt-20">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-white mb-8">학교를 입력해주세요</h1>

        <div className="relative">
          <Input
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="학교이름을 검색해주세요"
            className="w-full h-14 bg-transparent border-2 border-white/30 rounded-2xl text-white placeholder:text-white/50 pr-12 text-base"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-white w-6 h-6" />
        </div>

        <div className="mt-32 flex justify-center opacity-30">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M40 35L35 40L40 45L35 50L40 55C40 55 45 50 50 50C55 50 60 55 60 55L65 50L60 45L65 40L60 35C60 35 55 40 50 40C45 40 40 35 40 35Z"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M60 55L65 60L60 65L65 70L60 75C60 75 55 70 50 70C45 70 40 75 40 75L35 70L40 65L35 60L40 55C40 55 45 60 50 60C55 60 60 55 60 55Z"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-center text-white/30 text-2xl font-bold mt-4">mealgo</p>
      </div>

      <div className="pb-8">
        <Button
          onClick={onNext}
          className="w-full bg-black text-white hover:bg-black/90 h-14 rounded-xl font-bold text-base"
        >
          NEXT
        </Button>
        <div className="mt-6 h-1 w-32 mx-auto bg-white/30 rounded-full" />
      </div>
    </div>
  )
}
