import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.tsx'
import './index.css'
import "./global.d.ts"

const someOPtionsOnlyForDev = {
  selector: "#root",
  options: {
    initializedOptions: ["A0", "A2", "B1"],
  }
};

if (import.meta.env.MODE  ===  'development') {
  console.log("DEV");
  const  renderElement  =  document.getElementById('root');
  createRoot(renderElement  as  HTMLElement).render(
    <App
      options={{
         ...someOPtionsOnlyForDev
      }}
    />
  );
} else {
  // console.log("Prod");
  
	window.DAMAGE_SELECTOR_API  = {
		init: (options: PluginOptions) => {
			const { selector } = options;
			if (selector) {
				const  renderElement: HTMLElement = document.querySelector(selector) as HTMLElement;
				if (renderElement) {
					createRoot(renderElement).render(
						<ErrorBoundary fallbackRender={()=><div>Something went wrong</div>}>
							<App  options={options}  />
						</ErrorBoundary>
					);
				}
			}
		}
	};
}
