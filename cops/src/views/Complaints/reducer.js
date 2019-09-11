
const defaultState = {
    list: [
        {
            title: 'Li Europan lingues',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            image: 'https://via.placeholder.com/800x400',
            loaction: {
                latitude: 12.978622,
                longitude: 80.243273
            },
            status: 'QUEUE'
        },
        {
            title: 'A wonderful serenity has taken possession',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            image: 'https://via.placeholder.com/800x400',
            loaction: {
                latitude: 12.978622,
                longitude: 80.243273
            },
            status: 'ACTION_TAKEN'
        },
        {
            title: 'One morning, when Gregor Samsa woke from troubled',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            image: 'https://via.placeholder.com/800x400',
            loaction: {
                latitude: 12.978622,
                longitude: 80.243273
            },
            status: 'IN_PROGRESS'
        },
        {
            title: 'One morning, when Gregor Samsa woke from troubled',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            image: 'https://via.placeholder.com/800x400',
            loaction: {
                latitude: 12.978622,
                longitude: 80.243273
            },
            status: 'COMPLETED'
        },
        {
            title: 'A wonderful serenity has taken possession',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            image: 'https://via.placeholder.com/800x400',
            loaction: {
                latitude: 12.978622,
                longitude: 80.243273
            },
            status: 'ACTION_TAKEN'
        },
    ]
}

const Complaints = (state = defaultState, { type, payload, ...action }) => {
    switch (type) {
        default:
            return state
    }
}

export default Complaints