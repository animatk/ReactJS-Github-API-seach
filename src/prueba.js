const hobies = [
  {
    nombre: 'alejandro',
    hobbies: [
      'h1',
      'h2',
      'h3',
    ],
  },
  {
    nombre: 'Juan',
    hobbies: [
      'h1',
      'h4',
      'h5',
    ],
  },
  {
    nombre: 'Luis',
    hobbies: [
      'h6',
      'h2',
      'h7',
    ],
  },
]

let hobbiesList = []

hobies.forEach((item) => {
  hobbiesList = [...hobbiesList, ...item.hobbies]
  
})

console.log(hobbiesList)
