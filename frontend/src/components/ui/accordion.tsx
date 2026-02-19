'use client';

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils/cn"

interface AccordionItemProps {
  value: string
  trigger: React.ReactNode
  children: React.ReactNode
}

interface AccordionProps {
  type?: 'single' | 'multiple'
  children: React.ReactNode
  className?: string
}

const AccordionContext = React.createContext<{
  openItems: string[]
  toggleItem: (value: string) => void
}>({ openItems: [], toggleItem: () => {} })

export function Accordion({ type = 'single', children, className }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>([])

  const toggleItem = (value: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(value) ? [] : [value])
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter((item) => item !== value)
          : [...openItems, value]
      )
    }
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ value, trigger, children }: AccordionItemProps) {
  const { openItems, toggleItem } = React.useContext(AccordionContext)
  const isOpen = openItems.includes(value)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleItem(value)}
        className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-gray-50 transition-colors"
      >
        <span>{trigger}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gray-500 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-4 pt-0 text-gray-600">{children}</div>
      </div>
    </div>
  )
}