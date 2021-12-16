// ** React Imports
import { useEffect, useState } from 'react'

const BlankLayout = ({ children, ...rest }) => {
  // ** States
  const [isMounted, setIsMounted] = useState(false)

  //** ComponentDidMount
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className=" bg-gray-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen">
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default BlankLayout
