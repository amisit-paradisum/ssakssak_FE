"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BottomNav } from "@/components/bottom-nav"
import { TagDeleteModal } from "@/components/tag-delete-modal"

interface DietScreenProps {
  onNavigate: (screen: "meal" | "diet" | "bookmark" | "settings") => void
}

export function DietScreen({ onNavigate }: DietScreenProps) {
  const [percentage, setPercentage] = useState("30")
  const [note, setNote] = useState("이지호이다")
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 px-6 pt-12 pb-24">
        <h2 className="text-lg font-medium text-white mb-4">오늘 급식은 지번 급식보다</h2>

        <div className="bg-black rounded-3xl p-8 mb-6 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-6xl font-bold text-white mb-2">12%</p>
              <p className="text-blue-400 text-sm">
                <span className="font-semibold">255kcal</span> 줄어듦
              </p>
            </div>
            <div className="text-6xl">🔥</div>
          </div>
        </div>

        <h3 className="text-base font-medium text-white mb-4">밥을 얼마나 드셨나요? 칼로리를 확인해보세요</h3>

        <div className="bg-black rounded-3xl p-6">
          <h4 className="text-blue-400 text-xl font-bold mb-4">칼로리 계산기</h4>

          <div className="flex gap-3 mb-4">
            <div className="flex-1 relative">
              <Input
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                className="w-full h-12 bg-transparent border-2 border-white rounded-xl text-white text-center text-lg font-medium"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-lg">%</span>
            </div>
            <Button className="h-12 px-8 bg-white text-black hover:bg-gray-100 rounded-xl font-bold">확인</Button>
          </div>

          <Input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full h-12 bg-transparent border-2 border-white rounded-xl text-white px-4"
          />
        </div>
      </div>

      <BottomNav currentTab="diet" onNavigate={onNavigate} />

      {showDeleteModal && <TagDeleteModal onClose={() => setShowDeleteModal(false)} />}
    </div>
  )
}
