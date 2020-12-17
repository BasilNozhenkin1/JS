/*
    Single responsibility principle
 */
class Articles {
    constructor(header, description) {
        this.header = header
        this.description = description
        this.modified = false
    }
    update(description) {
        this.description = description
        this.modified = true
    }
}
class ArticlesPrinter {
    constructor(article) {
        this.article = article
    }
    html() {
        return `
            <div class="article">
                <h1>${this.article.header}</h1>
                <p>${this.article.description}</p>
            </div>
        `
    }
    json() {
        return JSON.stringify({
            header: this.article.header,
            description: this.article.description,
            modified: this.article.modified
        }, null, 2)
    }
    xml() {
        return `
            <news>
                <title>${this.article.header}</title>
                <description>${this.article.description}</description>
            </news>
        `
    }
}

const printer = new ArticlesPrinter(
    new Articles('COVID', 'COVID продолжается')
)
console.log(printer.html())
console.log(printer.json())
console.log(printer.xml())