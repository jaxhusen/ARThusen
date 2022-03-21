import React from 'react'
import Startsida from './Startsida'

function BildArray() {
     const headerPics = [
        {
            id: 1,
            name: "Streets of Saturn",
            size: "100x150",
            price: 1150,
            img: "johannas-app\src\components\PIX\STREETSOFSATURN.jpg",
        },
        {
          id: 2,
          name: "Skyfall",
          size: "100x70",
          price: 950,
          img: "johannas-app\src\components\PIX\SKYFALL.jpg",
        },
        {
          id: 3,
          name: "Northernlightofanvisualimpared",
          size: "100x70",
          price: 950,
          img: "johannas-app\src\components\PIX\NOTHERNLIGHTSOFANVISUALIMPARED.jpg",
        },
        {
          id: 4,
          name: "Twinning",
          size: "30x70",
          price: 950,
          img: "johannas-app\src\components\PIX\TWINNING.jpg",
        }
    ] 

  return (
    <div>BildArray
      {headerPics.map(pic => <Startsida key={pic.id} pic={pic} />)}
    </div>
  )
}

export default BildArray