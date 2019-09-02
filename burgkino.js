const CrawlE = require('crawl-e/v0.4.9');
const cheerio = require('cheerio');

let crawlE = new CrawlE({
    cinemas: [
        {
            name: 'Burg Kino',
            address: 'Opernring 19 1010 Vienna',
            website: 'https://www.burgkino.at/',
            phone: '(+43 1) 587 84 06',
            email: 'office@burgkino.at'
        }
    ],
    showtimes: {
        url: 'https://www.burgkino.at/showtimes/:page([today,tomorrow,this-week,next-week]):',
        movies: {
            box: '.views-row',
            title: '.views-row .col-sm-12 h2',
            table: {
                selector: '.views-row .col-sm-8 .view-content',
                headerRow: {
                    date: {
                        selector: '.views-row .col-sm-8 .view-content tr td:nth-child(1)',
                        attribute: 'time',
                        mapper: time => time.replace('Mon, ','').trim()
                    },
                    dateFormat: 'DD.MM.YYYY'
                },
                cells: {
                    showtimes: {
                        box: '.views-row .col-sm-8 .view-content tr td:nth-child(2)',
                        timeFormat: 'HH:mm'
                    }
                }
            }
        },
    }
});
crawlE.crawl();