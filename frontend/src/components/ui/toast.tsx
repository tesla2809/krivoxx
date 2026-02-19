'use client';

import * as React from "react"
import { X, CheckCircle, AlertCircle, Info } from "lucide-react"
import { cn } from "@/lib/utils/cn"

type ToastType = 'success' | 'error' | 'info'

interface ToastProps {
  message: string
  type?: ToastType
  duration?: number
  onClose: () => void
}

const toastIcons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
}

const toastStyles = {
  success: "bg-green-50 border-green-500 text-green-900",
  error: "bg-red-50 border-red-500 text-red-900",
  info: "bg-blue-50 border-blue-500 text-blue-900",
}

export function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const Icon = toastIcons[type]

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 flex items-center gap-3 p-4 rounded-lg border-l-4 shadow-lg",
        "animate-slide-in-right",
        toastStyles[type]
      )}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 shrink-0 opacity-70 hover:opacity-100 transition-opacity"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

// Toast Container Hook
export function useToast() {
  const [toasts, setToasts] = React.useState<Array<{ id: string; message: string; type: ToastType }>>([])

  const showToast = React.useCallback((message: string, type: ToastType = 'info') => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { id, message, type }])
  }, [])

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const ToastContainer = React.useMemo(
    () => (
      <>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </>
    ),
    [toasts, removeToast]
  )

  return { showToast, ToastContainer }
}