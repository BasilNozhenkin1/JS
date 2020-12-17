class Component {}

class ComponentWithTemplate extends Component {
    render() {
        return `<div>I am component template</div>`
    }
}

class HigherOrderComponent extends Component {
    render() {
        throw new Error('I dont have rennder method')
    }
    wrapComponent(component) {
        component.isWrapped = true
        console.log(component)
    }
}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {}
}
class ContentComponent extends ComponentWithTemplate {
    onUpdate() {}
}
class FooterComponent extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends  HigherOrderComponent {}

function renderComponent(component) {
    console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new ContentComponent())
renderComponent(new FooterComponent())
new HOC().wrapComponent(new ContentComponent())