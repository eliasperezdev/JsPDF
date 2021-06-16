import React from 'react'

const LIObjetivo = ({item, eliminar}) => {

  const borrar = () => {
    eliminar(item.id)
  }

  return (
    <>
      <li className="text-base font-bold  leading-normal text-blue-800">{item.valor+" "} <button onClick={borrar}><i className="fas fa-window-close text-red-800"></i></button></li>
    </>
  )
}

export default LIObjetivo
