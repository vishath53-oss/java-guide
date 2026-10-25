import { useEffect } from 'react'

/**
 * Updates the document title with the given title, appending the site name.
 * Call this at the top of every page component.
 */
export function usePageTitle(title: string) {
  useEffect(() => {
    const prev = document.title
    document.title = title ? `${title} | Java Study Mate` : 'Java Study Mate'
    return () => {
      document.title = prev
    }
  }, [title])
}
