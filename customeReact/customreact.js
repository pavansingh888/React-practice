function customRender(reactElement,Container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // Container.appendChild(domElement)
    //for different number of attribute problem would come.So we will use loop based code.

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    Container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

//suppose we want torender a tag

//we need a function which will render our reactElemnt in root-mainContainer
customRender(reactElement,mainContainer)