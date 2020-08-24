POKEMONCARD:

Thing to know:

The 'useRef' is a hook from 'react', allows us to reference elements inside of our html aka our <input/>

the 'useEffect' is a hook from 'react'

The 'pokemonNameRef.current.value = null' is a quality of life change, due to the auto-removal of the input box

When we add Pokemons, we need to create an id, which it doesnt do manually, everytime we add a new pokemon,
for this to work we need to install the following dependency below.

Dependencies to install:

'npm uuid'/'npm i @types/uuid'
