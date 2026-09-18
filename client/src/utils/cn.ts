import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind class strings safely: clsx handles conditional/falsy
 * values, twMerge resolves conflicts (e.g. "p-2" vs "p-4" -> keeps the last).
 * Use this whenever a component needs to combine its own styles.ts classes
 * with a caller-supplied `className` prop.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
