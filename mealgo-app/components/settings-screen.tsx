"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft } from "lucide-react"

interface SettingsScreenProps {
  onBack: () => void
}

export function SettingsScreen({ onBack }: SettingsScreenProps) {
  const [settings, setSettings] = useState({
    schoolChange: true,
    darkMode: true,
    preferredMenuAlert: true,
    timeDisplay: false,
    mealChange: true,
    fontSizeChange: true,
    highContrastMode: true,
  })

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="flex flex-col min-h-screen px-6 pt-12">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" className="text-white" onClick={onBack}>
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-2xl font-bold text-white">설정</h1>
      </div>

      <div className="space-y-3">
        <SettingItem label="학교 변경" checked={settings.schoolChange} onToggle={() => toggleSetting("schoolChange")} />
        <SettingItem label="다크모드" checked={settings.darkMode} onToggle={() => toggleSetting("darkMode")} />
        <SettingItem
          label="선호메뉴알림"
          checked={settings.preferredMenuAlert}
          onToggle={() => toggleSetting("preferredMenuAlert")}
        />
        <SettingItem
          label="시간표기능 비활성화"
          checked={settings.timeDisplay}
          onToggle={() => toggleSetting("timeDisplay")}
        />
        <SettingItem label="학반 변경" checked={settings.mealChange} onToggle={() => toggleSetting("mealChange")} />
        <SettingItem
          label="글자 크기 변경"
          checked={settings.fontSizeChange}
          onToggle={() => toggleSetting("fontSizeChange")}
        />
        <SettingItem
          label="고대비 모드"
          checked={settings.highContrastMode}
          onToggle={() => toggleSetting("highContrastMode")}
        />
      </div>
    </div>
  )
}

function SettingItem({ label, checked, onToggle }: { label: string; checked: boolean; onToggle: () => void }) {
  return (
    <div className="flex items-center justify-between bg-black rounded-2xl px-6 py-5">
      <span className="text-white font-medium">{label}</span>
      <Switch checked={checked} onCheckedChange={onToggle} />
    </div>
  )
}
