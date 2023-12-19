import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
  `

  const myButtonGetStarted = document.getElementById('myButtonGetStarted');

  if (myButtonGetStarted) {
    myButtonGetStarted.addEventListener('click', handleClick);
  }
  
  function handleClick() {
    myButtonGetStarted?.classList.add('active');
  }

  const myButtonSectionGetStarted = document.getElementById('myButtonSectionGetStarted');

  if (myButtonSectionGetStarted) {
    myButtonSectionGetStarted.addEventListener('click', handlesectionClick);
  }
  
  function handlesectionClick() {
    myButtonSectionGetStarted?.classList.add('active');
  }

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)



