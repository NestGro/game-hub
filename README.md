Hello! This is a Game Hub application that uses Vite, Chakra.UI and RAWG.io (https://rawg.io/) as a data source.

########################################################################################################################

Install Vite

########################################################################################################################

    npm i vite

    - Select framework: React

    - Select variant: Typescript

########################################################################################################################

Install dependencies

########################################################################################################################

    npm i

########################################################################################################################

Start dev server

########################################################################################################################

    npm run dev

########################################################################################################################

Installing Chakra ui

########################################################################################################################

    - go to https://v2.chakra-ui.com/getting-started/vite-guide

    - run this command:

    npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

    - After installing Chakra UI, you need to set up the ChakraProvider at the root of your application.

    - Go to the src directory and inside main.jsx or main.tsx

    - add this line after React import statements
    import { ChakraProvider } from '@chakra-ui/react'

    - wrap ChakraProvider around App:

    const rootElement = document.getElementById('root')
    ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </React.StrictMode>,
    )

########################################################################################################################

Install Axios

########################################################################################################################

npm i axios
