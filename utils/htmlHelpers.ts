// Waits for the DOM to load and then gather element innerHTML 
export function waitForElm(selector: string): Promise<Element> {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector))
      }
  
      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector))
          observer.disconnect()
        }
      })
  
      observer.observe(document.body, {
        childList: true,
        subtree: true
      })
    })
  }