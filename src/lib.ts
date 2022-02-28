export function renderBlock (elementId:string, html:string):void {
    const element: HTMLElement | null = document.getElementById(elementId)
    if(element !==null){
      element.innerHTML = html  
    }
}

export interface Message{
  text:string
  type?:string
}

export interface Action {
  // type?:string
  name:string
  handler?: Function
}

export function renderToast (message:Message, action?:Action):void {
  let messageText:string = ''
  
  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  
  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(message, action)
    }
  }
}
