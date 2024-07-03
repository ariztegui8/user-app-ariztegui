'use client'
import ColumnIcons from '@/components/ColumnIcons'
import React, { useState } from 'react'

const Home = () => {

  const [menuColumn, setMenuColumn] = useState(false)

  const handleMenuColumn = () => {
      setMenuColumn(!menuColumn)
  }

  return (
    <div>
      {/* <ColumnIcons
            handleMenuColumn={handleMenuColumn}
            menuColumn={menuColumn}
        /> */}
    </div>
  )
}

export default Home