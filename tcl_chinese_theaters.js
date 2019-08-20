const CrawlE = require('crawl-e/v0.4.9');

let crawlE = new CrawlE({
    cinemas: [
        {
            name: 'TCL Chinese Theatre',
            address: '6925 Hollywood Blvd, Hollywood, CA 90028',
            website: 'http://www.tclchinesetheatres.com/contacts-us/',
            phone: '1 323 461 3331',
            email: 'manager@chinesetheatres.com',
            location: '.google-map iframe @src'
        }
    ],
    showtimes: {
        url: 'http://www.tclchinesetheatres.com/tickets-showtimes/?date=:date:',
        urlDateFormat: 'M/DD/YYYY',
        urlDateCount: 30,
        movies: {
            box: '.teatro_box',
            title: '.teatro_box .movie .movie_desc a h3',
            showtimes: {
                box: '.teatro_box .time_and_info .time div',
                timeFormat: 'H:mm'
            }
        }
    }
});
crawlE.crawl();