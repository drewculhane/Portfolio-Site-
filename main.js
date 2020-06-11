console.log('app.js', $)
// sheetURl is the shared url... anyone with that url can open the sheet in google sheets. 
const sheetURL = 'https://docs.google.com/spreadsheets/d/1sYHMXcxvPa4Dvwms8uslrdamWUOVVacDnyW_1ovv1G0/edit?usp=sharing'
// sheetAsJSON is how we will pull the data as JSON (javascript object notation) 
let sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/1sYHMXcxvPa4Dvwms8uslrdamWUOVVacDnyW_1ovv1G0/od6/public/values?alt=json' 

console.log('running before ajax')
$.ajax({
    url: sheetAsJSON
}).then( data =>  {
    console.log('data', data)
    const projects = data.feed.entry.map( project => {
        return {
            title: project.gsx$title.$t, 
            image: project.gsx$image.$t, 
            description: project.gsx$description.$t, 
            url: project.gsx$url.$t
        }
    }) // map ends 
    app(projects)
})
.catch ( err => console.log('err', err))
console.log('Running after ajax')
// Javascript provides us a way to pause a statement to continue with the code. 

function app(projectsArr) { 
    console.log('inside app-projects', projectsArr)
    projectsArr.forEach( project => { 
        let $carddiv = $('<div>')
        $carddiv.attr('class', 'card')
        $carddiv.attr('style', 'width: 18rem;')
        $carddiv.attr('class', project.title)
        $('.mainProjects').append($carddiv.attr('class', project.title))
        let $cardimg = $('<img>').attr('class', 'card-img-top')
        $cardimg.attr('src', project.image)
        $cardimg.attr('alt', 'Card Image Cap') 
        $cardimg.attr('class', project.title)
        $carddiv.attr('class', project.title).append($cardimg.attr('class', project.title))
        let $cardbodydiv = $('<div>')
        $cardbodydiv.attr('class', 'card-body')
        $cardbodydiv.attr('class', project.title)
        $carddiv.attr('class', project.title).append($cardbodydiv.attr('class', project.title))
        let $h5card = $('<h5>')
        $h5card.attr('class', 'card-title')
        $h5card.text(project.title)
        $h5card.attr('class', project.title)
        $cardbodydiv.attr('class', project.title).append($h5card.attr('class', project.title))
        let $pCard = $('<p>')
        $pCard.attr('class', 'card-text')
        $pCard.text(project.description)
        $pCard.attr('class', project.title)
        $cardbodydiv.attr('class', project.title).append($pCard.attr('class', project.title))
        let $aref =$('<a>')
        $aref.attr('class', 'btn btn-primary btn-outline-primary')
        $aref.attr('href', project.url)
        $aref.text('See Project')
        $aref.attr('class', project.title)
        $cardbodydiv.attr('class', project.title).append($aref.attr('class', project.title))
        $carddiv.attr('class', 'card')
        $carddiv.attr('style', 'width: 18rem;')
        $cardbodydiv.attr('class', 'card-body')
        $h5card.attr('class', 'card-title')
        $pCard.attr('class', 'card-text')
        $aref.attr('class', 'btn btn-dark')
        $cardimg.attr('class', 'card-img-top')
    }) 
}
$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $(".homeajc").offset().top
    }, 2000);
});

$("#project").click(function() {
    $('html, body').animate({
        scrollTop: $(".mainProjects").offset().top
    }, 2000);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".mainContact").offset().top
    }, 2000);
});

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $(".mainAbout").offset().top
    }, 2000);
});

let $cloudAdd1 = $('.cloud11')  
let $cloudAdd2 = $('.cloud22')
let $rain1 = $('.rainimage2')
let $rain2 = $('.rainimage1')

$cloudAdd1.on('click', addrain)
function addrain () {
    if ($rain1.is(':visible')) {
        $rain1.hide()
    } else $rain1.show()
}
$cloudAdd2.on('click', addrain2)
function addrain2 () {
    if ($rain2.is(':visible')) {
        $rain2.hide()
    } else $rain2.show()
}
let $navButton = $('.navbar-toggler') 
let $navLink = $('.nav-item')
let $navDiv = $('.navbar-collapse')

$navLink.on('click', collapsemenu)

function collapsemenu () {
    $navButton.addClass('collapsed')
    $navButton.removeAttr('aria-expanded','true')
    $navButton.attr('aria-expanded', 'false')
    $navDiv.removeClass('show')
}
