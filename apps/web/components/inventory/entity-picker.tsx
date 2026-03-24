"use client"

import * as React from "react"
import { Check, ChevronDown, Plus } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const triggerClass = cn(
  "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground",
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  "dark:bg-input/30 dark:hover:bg-input/50 flex w-full min-w-0 items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow]",
  "outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 h-9 text-left",
)

const rowClass = cn(
  "relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-2 pl-2 pr-8 text-sm outline-none",
  "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
)

export type EntityPickerProps = {
  value: string
  options: readonly string[]
  onChange: (value: string) => void
  /** Nome já validado (trim); o pai atualiza lista e valor. Sem `prompt()` — funciona em CSP e em browsers sem diálogo nativo. */
  onCreateSubmit: (name: string) => void
  createNewLabel: string
  createInputPlaceholder?: string
  /** Ex.: subcategoria vazia */
  allowEmpty?: boolean
  emptyLabel?: string
  placeholder?: string
  id?: string
  "aria-labelledby"?: string
}

/**
 * Combobox para usar dentro de `Dialog`: Popover com `modal={false}` evita conflito com o diálogo modal.
 * Criação de item via campo inline (não usa `window.prompt`).
 */
export function EntityPicker({
  value,
  options,
  onChange,
  onCreateSubmit,
  createNewLabel,
  createInputPlaceholder = "Nome…",
  allowEmpty = false,
  emptyLabel = "—",
  placeholder = "Selecione…",
  id,
  "aria-labelledby": ariaLabelledBy,
}: EntityPickerProps) {
  const [open, setOpen] = React.useState(false)
  const [creating, setCreating] = React.useState(false)
  const [draft, setDraft] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (creating && open) {
      window.setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [creating, open])

  const display =
    allowEmpty && !value.trim()
      ? emptyLabel
      : value.trim() || placeholder

  const finishCreate = React.useCallback(() => {
    const n = draft.trim()
    if (!n) return
    onCreateSubmit(n)
    setDraft("")
    setCreating(false)
    setOpen(false)
  }, [draft, onCreateSubmit])

  const cancelCreate = React.useCallback(() => {
    setDraft("")
    setCreating(false)
  }, [])

  return (
    <Popover
      modal={false}
      open={open}
      onOpenChange={(o) => {
        setOpen(o)
        if (!o) {
          setCreating(false)
          setDraft("")
        }
      }}
    >
      <PopoverTrigger asChild>
        <button
          type="button"
          id={id}
          aria-labelledby={ariaLabelledBy}
          role="combobox"
          aria-expanded={open}
          data-placeholder={!value.trim() && allowEmpty ? true : undefined}
          className={triggerClass}
        >
          <span className="truncate flex-1">{display}</span>
          <ChevronDown className="size-4 shrink-0 opacity-50" aria-hidden />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={4}
        collisionPadding={12}
        className={cn(
          "p-0 z-[200] max-h-[min(320px,var(--radix-popover-content-available-height))]",
          "w-[var(--radix-popover-trigger-width)] min-w-[12rem] max-w-[calc(100vw-2rem)]",
          "border bg-popover text-popover-foreground shadow-md",
        )}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {creating ? (
          <div className="p-2 space-y-2">
            <Input
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={createInputPlaceholder}
              className="h-9"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  finishCreate()
                }
                if (e.key === "Escape") cancelCreate()
              }}
            />
            <div className="flex justify-end gap-2">
              <Button type="button" variant="ghost" size="sm" className="h-8" onClick={cancelCreate}>
                Cancelar
              </Button>
              <Button type="button" size="sm" className="h-8" onClick={finishCreate}>
                Adicionar
              </Button>
            </div>
          </div>
        ) : (
          <div className="overflow-y-auto overflow-x-hidden p-1 max-h-[280px]" role="listbox">
            {allowEmpty && (
              <button
                type="button"
                role="option"
                aria-selected={!value.trim()}
                className={cn(rowClass, !value.trim() && "bg-accent/80")}
                onClick={() => {
                  onChange("")
                  setOpen(false)
                }}
              >
                <span className="flex-1 truncate text-left">{emptyLabel}</span>
                {!value.trim() && <Check className="absolute right-2 size-4 shrink-0" aria-hidden />}
              </button>
            )}
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                role="option"
                aria-selected={value === opt}
                className={cn(rowClass, value === opt && "bg-accent/80")}
                onClick={() => {
                  onChange(opt)
                  setOpen(false)
                }}
              >
                <span className="flex-1 truncate text-left">{opt}</span>
                {value === opt && <Check className="absolute right-2 size-4 shrink-0" aria-hidden />}
              </button>
            ))}
            <div className="border-t border-border mt-1 pt-1">
              <button
                type="button"
                className={cn(
                  rowClass,
                  "text-primary font-medium hover:bg-primary/10 focus:bg-primary/10",
                )}
                onClick={() => setCreating(true)}
              >
                <Plus className="size-4 shrink-0" aria-hidden />
                <span className="flex-1 truncate text-left">{createNewLabel}</span>
              </button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
