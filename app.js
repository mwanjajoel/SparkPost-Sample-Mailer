/**
 * Created by mwanjajoel on 30/09/2017.
 */

//import SparkPost
let SparkPost = require('sparkpost');

//create a new instance of it and supply your API Key
let client = new SparkPost('{input-your-api-key-here}');

//invoke the transmission API with the send method
client.transmissions.send({

    options: {

        //ensure sandbox is false if you are sending from a verified domain, debug should be true if you want to know the exact error if things fail
        sandbox: false,
        debug: true

    },

    //this specifies the message
    content: {

        from: 'orders@konymovie2017.com',
        subject: 'Kony Movie: Order from Above',
        html: '<html><body><p>Hello, Greetings!</p>' +
        '<p>BREAKING NEWS: AWARD WINNING NEW KONY MOVIE EXPOSES DARK SECRETS ABOUT THE LONG FOUGHT WAR IN UGANDA </p>' +
        '<p>New Award winning  Kony movie “Kony: Order from Above” has exposed new dark secrets of the two decade insurgency, fought in north of Uganda between the National Resistance Army and Joseph Kony’s Lord’s Resistance Army.</p> ' +
        '<p>This movie drama based on actual happenings tells a story of two youth, Otti and Aguti who fall in love during the tumultuous northern Uganda Lord’s Resistance Army (LRA) insurgency.</p> ' +
        '<p>Both are abducted and soon find themselves caught in a triangle of Love with the Notorious Rebel Leader Joseph Kony.</p> ' +
        '<a>Click to this <a href="https://www.youtube.com/watch?v=AGqEJrJO73I">Link </a> to see this movie: THIS TEASER TRAILER REVEALS A PICTURE OF LOVE, LOSS AND HOPE</p>' +
        '</body></html>'

    },

    recipients: {


        list_id: "{insert-your-recipient-id-here}"

    }

}).then(data => {

    console.log('Woohoo! You just sent your mailing!');
    console.log(data);
}).catch(err => {
    console.log('Whoops! Something went wrong');
console.log(err);
});

