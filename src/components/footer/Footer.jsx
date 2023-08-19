import React from 'react'
import './footer.css'
import { format } from 'date-fns'

function Footer() {
  return (
    <footer>
        <p>&copy; rb {format(new Date(), 'yyyy')}</p>
    </footer>
  )
}

export default Footer