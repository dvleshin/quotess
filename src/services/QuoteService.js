import Axios from 'axios'

const topQuotes = [
    {
        id: 'KxGE9g9_9_c5PGhD8eMzkQeF',
        quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
        author: 'Mahatma Gandhi',
        tags: ['life','study','popular'],
        category: 'life'
    },
    {
        id: 'JxHS9g9_8-c5SGhD8eMzkQeF',
        quote: 'That which does not kill us makes us stronger.',
        author: 'Friedrich Nietzsche',
        tags: ['inspire','life','smart'],
        category: 'inspire'
    },
    {
        id: 'HT4yeYoDVqa6BG4fRuORqbbt',
        quote: 'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.',
        author: ' Bernard M. Baruch',
        tags: ['smart','life','personal'],
        category: 'inspire'
    },
    {
        id: 'TqrIuPU9lj0B0guFKg9kzGWm',
        quote: 'We must not allow other people’s limited perceptions to define us.',
        author: 'Virginia Satir',
        tags: ['personal','people','limits'],
        category: 'inspire'
    },
    {
        id: 'aapenryj34b9Fl27nbAkkgVZ',
        quote: 'Do what you can, with what you have, where you are.',
        author: 'Theodore Roosevelt',
        tags: ['personal','limits','famous'],
        category: 'inspire'
    },
    {
        id: 'r85Nfov5KkXX9oyMHABd91hy',
        quote: 'Be yourself; everyone else is already taken.',
        author: 'Oscar Wilde',
        tags: ['personal','life','love'],
        category: 'inspire'
    },
    {
        id: 'PmPk2PGdH6tmDvHm3ejGaD38',
        quote: 'This above all: to thine own self be true.',
        author: 'William Shakespeare',
        tags: ['personal', 'true'],
        category: 'inspire'
    },
    {
        id: 'Jqcdei5PXsZO970D5vxgL8H8',
        quote: 'If you cannot do great things, do small things in a great way.',
        author: 'Napoleon Hill',
        tags: ['great','personal'],
        category: 'personal'
    },
    {
        id: 'hwxvRJ1TvWdy8McL1VONT0BO',
        quote: 'If opportunity doesn’t knock, build a door.',
        author: 'Milton Berle',
        tags: ['opportunity','life','smart'],
        category: 'personal'
    },
    {
        id: 'hOk4u4Iy9EkTi5KU9cHhzWn4',
        quote: 'Wise men speak because they have something to say; fools because they have to say something.',
        author: 'Plato',
        tags: ['people','life'],
        category: 'personal'
    },

]

async function getQuote(cat) {
    const API = `http://quotes.rest/qod.json?category=${cat}`;
    const res = await Axios.get(API);
    try {
        return res.data
    } catch (err) {
        console.log(err);
    }
}

async function getRdnQuote(cat) {
    const API = `http://quotes.rest/qod.json?category=${cat}`;
    const res = await Axios.get(API);
    try {
        return res.data
    } catch (err) {
        console.log(err);
    }
}

const getTop10 = () => {
    return new Promise ((resolve, reject) => {
        resolve(topQuotes)
    })
}


export default {
    getQuote,
    getRdnQuote,
    getTop10
}

