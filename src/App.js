import React, {useState, Suspense} from 'react'

import classes from './App.module.css'

const Heart = React.lazy(() => import('./experiments/heart'))
const VK = React.lazy(() => import('./experiments/vk'))

const SvgList = {
  'heart': Heart,
  'vk': VK,
  'none': () => <>Выберите SVG</>
}

const App = () => {
  const [activeSvg, setActiveSvg] = useState('vk')

  const ActiveSvgComponent = SvgList[activeSvg]

  return (
    <div className="App">
      <div className={classes.buttons}>
        {Object.keys(SvgList).map((key) => (
          <button
            className={classes.button}
            key={key}
            onClick={() => setActiveSvg(key)}>
            {activeSvg === key ? '✅ ' : ''}{key}
          </button>
        ))}
      </div>
      <div className={classes.svgContainer}>
        <Suspense fallback={<div>Loading...</div>}>
          <ActiveSvgComponent/>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
