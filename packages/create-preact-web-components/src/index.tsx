import { createContext, h, render } from 'preact'
import { useState } from 'preact/hooks'

type Attributes = {
    targetId?: string
}

const AttributeContext = createContext<Attributes>({})

const MyElement = () => {
    const [count, setCount] = useState(1)
    const increment = () => setCount(count + 1);
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={increment}>count up</button>
            <AttributeContext.Consumer>
               {attrs => (<p>{attrs.targetId}</p>)}
            </AttributeContext.Consumer>
        </div>
    )
}

class CustomElement extends HTMLElement {
    #shadow!: ShadowRoot
    connectedCallback() {
        const root = document.createElement('div')
        this.#shadow = this.attachShadow({ mode: 'closed' })
        this.#shadow.appendChild(root)

        render(
            <AttributeContext.Provider value={{
                targetId: this.getAttribute('targetId') ?? undefined
            }}>
                <MyElement />
            </AttributeContext.Provider>
        , root)
    }
}

customElements.define('my-custom-element', CustomElement)
