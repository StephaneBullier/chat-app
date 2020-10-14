const date = new Date()

const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Intl.DateTimeFormat('fr-FR', {
            dateStyle: 'short',
            timeStyle: 'short'
        }).format(date)
    }
}

const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAt: new Intl.DateTimeFormat('fr-FR', {
            dateStyle: 'short',
            timeStyle: 'short'
        }).format(date)
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}
