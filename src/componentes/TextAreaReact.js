import React, { useState } from 'react'
 

const TextAreaReact = ({agregar,name}) => {

    const [Area, setArea] = useState("")

  const actualizarArea = (e) => {
    agregar(e.target.value)
  }

  return (
    <>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12">
              <div className="relative w-full mb-3">
              <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
              >
                  Agrege su contenido
              </label>
              
              
             <textarea
                  type="text"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  rows="4"
                  onChange={actualizarArea}
              ></textarea>
              </div>
          </div>
        </div>
    </>
  )
}

export default TextAreaReact
