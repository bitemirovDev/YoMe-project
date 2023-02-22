const data = [
    {
        src: 'img/portfolio1.jpg',
        title: 'WEB TYPOGRAPHY',
        category: 'WEB'
    },
    {
        src: 'img/portfolio2.jpg',
        title: 'AUDIO EMBEDDED',
        category: 'BRAND'
    },
    {
        src: 'img/portfolio3.jpg',
        title: 'IMAGE GALLERY',
        category: 'WEB'
    },
    {
        src: 'img/portfolio4.jpg',
        title: 'CYLINDRICAL PAKAGING',
        category: 'GRAPHIC'
    },
    {
        src: 'img/portfolio5.jpg',
        title: 'YOUTUBE VIDEO',
        category: 'WEB'
    },
    {
        src: 'img/portfolio6.jpg',
        title: 'CUPS CUSTOMIZED',
        category: 'GRAPHIC'
    },
]

let portfolioButtons = document.getElementById('portfolio_buttons')
let portfolioContent = document.getElementById('portfolio_content')

let categories = []

for(let item of data){
    categories.push(item.category)
}

categories = [...new Set(categories)]

let outputButtons = `<p onclick="filterPortfolioContent('ALL')">ALL</p>`

for(let category of categories){
    outputButtons += `<p onclick="filterPortfolioContent('${category}')">${category}</p>`
}

portfolioButtons.innerHTML = outputButtons

let outputItems = ``

for(let item of data){
    outputItems += `
        <div class="portfolio-item">
        <img src="${item.src}" alt="">
        <p>${item.title}</p>
        </div>
    `
}

portfolioContent.innerHTML = outputItems

function filterPortfolioContent(categ){
    let outputFilter = ``
    for(let item of data){
        if(item.category == categ){
            outputFilter += `
            <div class="portfolio-item">
            <img src="${item.src}" alt="">
            <p>${item.title}</p>
            </div>
        ` 
        }else if(categ == 'ALL'){
            outputFilter += `
            <div class="portfolio-item">
            <img src="${item.src}" alt="">
            <p>${item.title}</p>
            </div>
        `
        }
    }
    portfolioContent.innerHTML = outputFilter
}