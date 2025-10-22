"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, Search } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"

interface BookmarkScreenProps {
  onNavigate: (screen: "meal" | "diet" | "bookmark" | "settings") => void
}

export function BookmarkScreen({ onNavigate }: BookmarkScreenProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const tags = [
    "우동",
    "김밥찬",
    "제육볶음",
    "순대볶음",
    "국밥",
    "복",
    "대마라파메이글",
    "민복이민복",
    "복약산칼라면",
    "떡",
    "김밥의민족",
    "농무염",
    "뽕무염",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 px-6 pt-12 pb-24">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" className="text-white" onClick={() => onNavigate("meal")}>
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-2xl font-bold text-white">북마크</h1>
        </div>

        <div className="relative mb-6">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="좋아하는 음식을 입력하세요"
            className="w-full h-14 bg-transparent border-2 border-white/30 rounded-2xl text-white placeholder:text-white/50 pr-12"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-white w-5 h-5" />
          <Button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 bg-white text-black hover:bg-gray-100 rounded-xl font-bold text-sm">
            추가
          </Button>
        </div>

        <p className="text-white/60 text-sm mb-4">n개 추가됨</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-10 px-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <BottomNav currentTab="bookmark" onNavigate={onNavigate} />
    </div>
  )
}
