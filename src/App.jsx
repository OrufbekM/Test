import { CustomMorph } from "./components/MyHero";
import { Perspectivebg } from "./components/Perspectivebg";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <Perspectivebg>
        <CustomMorph />
      </Perspectivebg>
    </div>
  )
}

export default App  