import { useEffect, useRef } from 'react';

function useIntersectionObserver(elements, callback, options) {

  const observerOptions = options || {}

  const observer = useRef(null)

  useEffect(() => {
    if(elements.length) {
      observer.current = new IntersectionObserver((observedEntries) => {
        callback(observedEntries)
      }, observerOptions)
      
      elements.forEach(element => {
        observer.current.observe(element)
      })
    }

    return () => {
      if(observer.current) {
        observer.current.disconnect()
      }
    }
  }, [callback, elements, observerOptions])
}

export default useIntersectionObserver;