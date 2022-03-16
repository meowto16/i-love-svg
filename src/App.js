import React, {useState, Suspense} from 'react'

import classes from './App.module.css'

const Heart = React.lazy(() => import('./experiments/heart'))
const VK = React.lazy(() => import('./experiments/vk'))
const AnatomyOfSvg = React.lazy(() => import('./experiments/anatomy-of-svg'))
const CatRunner = React.lazy(() => import('./experiments/cat-runner'))

const SvgList = {
  'heart': Heart,
  'vk': VK,
  'anatomy-of-svg': AnatomyOfSvg,
  'cat-runner': CatRunner,
  'none': () => <>Выберите SVG</>
}

const App = () => {
  const [activeSvg, setActiveSvg] = useState('cat-runner')

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
