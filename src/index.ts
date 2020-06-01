import * as React from 'react'
import { eventmit, EventmitHandler } from 'eventmit'

const { useRef, useContext, useEffect } = React;

const EmitterContext = React.createContext(eventmit())
const Provider = EmitterContext.Provider

const createEmitterProvider = (subscription: ReturnType<typeof eventmit>) => ({
  children,
}: {
  children: React.ReactNode
}) => {
  return React.createElement(Provider, {
    value: subscription,
    children,
  })
}

export const useEmitter = <T>() => {
  const emitter = useRef(eventmit<T>())
  const Provider = createEmitterProvider(emitter.current)
  return [emitter.current.emit, Provider] as const
}

export const useSubscriber = <T>(fn: EventmitHandler<T>) => {
  const ctx = useContext(EmitterContext)
  useEffect(() => {
    ctx.on(fn)
    return () => {
      ctx.off(fn)
    }
  }, [ctx, fn])
}