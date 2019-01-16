import React from 'react'
import AddToCalendarHOC from 'react-add-to-calendar-hoc'

function Button({ children, onClick }) {
  return (
    <button
      css={{
        width: 200,
        padding: 10,
        border: '1px solid #e5e5e5',
        background: '#3E3D4D',
        color: '#fff',
        fontSize: '1.5rem',
        borderRadius: 5,
        cursor: 'pointer',
        '&:focus': {
          outline: 'none',
        },
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function Dropdown({ children }) {
  return (
    <div
      css={{
        width: 200,
        padding: 10,
        margin: '0 auto',
        display: 'grid',
        gridGap: 6,
        border: '1px solid #e5e5e5',
        borderTop: 'none',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#fff',
      }}
    >
      {children}
    </div>
  )
}

export default AddToCalendarHOC(Button, Dropdown)
