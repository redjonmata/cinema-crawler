const CrawlE = require('crawl-e/v0.4.9');

let crawlE = new CrawlE({
    cinemas: [
        {
            name: 'City Cinema Vienna',
            address: 'Akademiestr. 131010 Wien, Austri',
            website: 'http://stadtkinowien.at/stadtkino/',
            phone: 'Cinema: (01) 712 62 76',
            email: 'stadtkino@stadtkinowien.at',
            location: '#sidebar iframe @src'
        }
    ],
    showtimes: {
        url: 'http://stadtkinowien.at/stadtkino/kinoprogramm/:date:',
        urlDateFormat: 'YYYY/M/DD',
        urlDateCount: 30,
        movies: {
            box: '.entry',
            title: '.entry .content h1 a strong',
            showtimes: {
                box: '.entry time strong',
                timeFormat: 'HH.mm'
            }
        }
    }
});
crawlE.crawl();