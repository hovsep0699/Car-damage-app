import { createEffect, createStore } from 'effector';
 
  
  export const fetchData = createEffect<void, string[]>({
    handler: async () => {
      const response = await fetch('https://myfailemtions.npkn.net/b944ff/');
      
      return await response.json();
    },
  });

  export const changeActiveButtons = createEffect<string[], string[]>({
    handler: async (activeButtons) => {
      const response = await fetch('https://myfailemtions.npkn.net/b944ff/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(activeButtons),
      });
      const data = await response.json();
  
      return data;
    },
  });
  
  export const $dots = createStore<string[]>([])
    .on(fetchData.doneData, (_, data) => data)
    .on(changeActiveButtons.doneData, (_, data) => data)
    .on(fetchData.fail, () => []); 
  