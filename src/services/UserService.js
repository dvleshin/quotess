const KEY = 'userFavQuotes'

const quotes = [{
        id: 'fXFfFJft9zH4yKmEao7puAeF',
        quote: 'Best thing you could probably do as a father is make sure they see how much you love their mother.',
        author: 'Matthew McConaughey',
        tags: ['family', 'life', 'love', 'marriage'],
        category: 'life'
    },
    {
        id: 'KxGE9g9_9_c5PGhD8eMzkQeF',
        quote: 'Regardless of how you feel inside, always try to look like a winner. Even if you are behind, a sustained look of control and confidence can give you a mental edge that results in victory.',
        author: 'Arthur Ashe',
        tags: ['confidence', 'control', 'inspire', 'victory', 'winning'],
        category: 'inspire'
    },
    {
        id: 'wxjxtOMYECsLApSLwUTzVweF',
        quote: 'An artist is never ahead of his time but most people are far behind theirs.',
        author: 'Edgard Varese',
        tags: ['art', 'artist', 'people', 'time', 'time', 'artist', 'control', 'qod'],
        category: 'art'
    }
]

const loadQuotes = (filterBy = null) => {
    let userFavQuotes = _loadFromStorage(KEY)

    return new Promise ((resolve, reject) => {
        if (!userFavQuotes || !userFavQuotes.length) {
            userFavQuotes = quotes
            _saveToStorage(KEY, userFavQuotes)
        }
        resolve(userFavQuotes)
    })
}

const saveQuote = (quote) => {    
    let userFavQuotes = _loadFromStorage(KEY)

    return new Promise ((resolve, reject) => {
        if (!userFavQuotes || !userFavQuotes.length) {
            userFavQuotes = [quote]
        } else {
            const idx = userFavQuotes.findIndex(currQuote => currQuote.id === quote.id)
            if (idx !== -1) {
                reject('The quote is already added')
            } else {
                userFavQuotes.unshift(quote)
            }
        }
        _saveToStorage(KEY, userFavQuotes)
        resolve (userFavQuotes)
    })
}

const deleteQuote = (id) => {
    let userFavQuotes = _loadFromStorage(KEY)

    return new Promise((resolve, reject) => { 
        const idx = userFavQuotes.findIndex(quote => quote.id === id)
        if (idx !== -1) {
            userFavQuotes.splice(idx, 1)
        }
        _saveToStorage(KEY, userFavQuotes)
        resolve(userFavQuotes)
      })
}


function _saveToStorage(key, value) {
    var strValue = JSON.stringify(value);
    localStorage.setItem(key, strValue);
}

function _loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}


export default {
    loadQuotes,
    saveQuote,
    deleteQuote
}