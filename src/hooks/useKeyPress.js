import React, { useEffect } from 'react'

function useKeyPress (key, action) {
  useEffect(() => {
    function onKeyUp (e) {
      if (e.key === key) {
        action()
      }
    }
    window.addEventListener('keyup', onKeyUp)

    return () => window.removeEventListener('keyup', onKeyUp)
  }, [])
}

export default useKeyPress
