"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bookmark, MoreVertical } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { DateModal } from "@/components/date-modal"

interface MealScreenProps {
  onNavigate: (screen: "meal" | "diet" | "bookmark" | "settings") => void
}

export function MealScreen({ onNavigate }: MealScreenProps) {
  const [showDateModal, setShowDateModal] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 px-6 pt-12 pb-24">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-white mb-1">2025년 10월 11일</h1>
            <p className="text-white/60 text-sm">대덕소프트웨어마이스터고등학교</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="text-white">
              <Bookmark className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white" onClick={() => onNavigate("settings")}>
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-3xl p-8 border border-purple-500/20">
          <div className="space-y-4 text-center">
            <p className="text-white text-lg font-medium">참쌀밥</p>
            <p className="text-white text-lg font-medium">맑은콩나물국</p>
            <p className="text-white text-lg font-medium">묵은지찜닭</p>
            <p className="text-white text-lg font-medium">참부리감자만두</p>
            <p className="text-white text-lg font-medium">배추김치</p>
            <p className="text-blue-400 text-lg font-medium">과일주스</p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-white/80 text-center text-base">980 kcal</p>
          </div>
        </div>
      </div>

      <BottomNav currentTab="meal" onNavigate={onNavigate} />

      {showDateModal && <DateModal onClose={() => setShowDateModal(false)} />}
    </div>
  )
}
