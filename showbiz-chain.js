const CrawlE = require('crawl-e/v0.4.9');

let crawlE = new CrawlE({
    cinemas: {
        list: {
            url: 'https://www.showbizcinemas.com/locations/',
            box: '.cinemaItemLinks :first-child a',
            website: '@href',
            slug: {
                selector: ':box',
                attribute: 'href',
                mapper: href => href.replace('/cinema-info/','')
            }
        },
        details: {
            url: 'https://www.showbizcinemas.com:cinema.website:',
            name: '.topAddressshowtimeInfo div:nth-child(2) h5',
            address: {
                selector: '.topAddressshowtimeInfo div:nth-child(2) p',
                mapper: value => value.replace('Info: ', '')
            },
            location: '#mapSectionId iframe @src'
        }
    },
    showtimes: {
        url: 'https://www.showbizcinemas.com/movies/nowplaying/:cinema.slug:/',
        movies: {
            box: '.showtimesCinema',
            title: '.showtimesCinema .gridCol-l-9 h3',
            showtimes: {
                box: '.showtimesCinema .gridCol-l-9 .sessions a',
                time: {
                    selector: ':box',
                    attribute: 'ownText()',
                }
            }
        }
    }
});
crawlE.crawl();