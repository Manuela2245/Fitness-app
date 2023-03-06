import Principal from"./pages/principal/Principal"
import Why from "./pages/why/Why"

import SearchEx from "./pages/search/SearchEx"
import s from "./style.module.css"

function App() {
  return (
    <div className={s.principalStyle}>

      <Principal/>
      <Why/>
      <SearchEx/>
    </div>
  )
}

export default App
