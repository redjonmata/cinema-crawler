const CrawlE = require('crawl-e/v0.4.9');

let crawlE = new CrawlE({
    cinemas: {
        list: {
            url: 'https://www.cineplexx.at/kinos/',
            box: '.media',
            website: '.whitebox a @href',
            slug: {
                selector: '.media .whitebox a',
                attribute: 'href',
                mapper: href => href.replace('https://www.cineplexx.at/center/','').replace('/','')
            },
            id:  '.media .media-body .media-body-footer a @href' ,
        },
        details: {
            url: ':cinema.website:',
            name: '#details div:nth-child(2) div:nth-child(2) div h1',
            address: {
                selector: '#details div:nth-child(2) div:nth-child(3) div.span8 div div address',
                mapper: selector => selector.substring(0, selector.length - 23).trim()
            },
            phone: {
                selector: '#details div:nth-child(2) div:nth-child(3) div.span8 div div address',
                mapper: selector => selector.slice(-23).trim()
            }
        }
    },
    showtimes: {
        url: ':cinema.id:',
        movies: {
            box: '.detailview-element',
            title: '.detailview-element div:nth-child(1) div div:nth-child(1) h2',
            showtimes: {
                box: '.detailview-element div:nth-child(1)',
                date: '.detailview-element div:nth-child(1) div div:nth-child(1) .info .starBoxSmall :nth-child(4)',
                dateFormat: 'DD.MM.YYYY',
                time: '.detailview-element div:nth-child(1) div div:nth-child(2) .span3 .time-desc',
                timeFormat: 'HH:MM',
            }
        }
    }
});
crawlE.crawl();