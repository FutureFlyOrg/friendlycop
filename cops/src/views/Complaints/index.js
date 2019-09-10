import React from 'react';
import Header from '../../layout/Header';

const list = [
    {
        title: 'Li Europan lingues',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        image: 'https://via.placeholder.com/150',
        loaction: {
            latitude: 12.978622,
            longitude: 80.243273
        },
        status: 'QUEUE'
    },
    {
        title: 'A wonderful serenity has taken possession',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        image: 'https://via.placeholder.com/150',
        loaction: {
            latitude: 12.978622,
            longitude: 80.243273
        },
        status: 'ACTION_TAKEN'
    },
    {
        title: 'One morning, when Gregor Samsa woke from troubled',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        image: 'https://via.placeholder.com/150',
        loaction: {
            latitude: 12.978622,
            longitude: 80.243273
        },
        status: 'IN_PROGRESS'
    },
    {
        title: 'One morning, when Gregor Samsa woke from troubled',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        image: 'https://via.placeholder.com/150',
        loaction: {
            latitude: 12.978622,
            longitude: 80.243273
        },
        status: 'COMPLETED'
    },
    {
        title: 'A wonderful serenity has taken possession',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        image: 'https://via.placeholder.com/150',
        loaction: {
            latitude: 12.978622,
            longitude: 80.243273
        },
        status: 'ACTION_TAKEN'
    },
]

const Login = props => {
    let goBack = () => props.history.goBack();
    return (
        <>
            <Header title="Friendlycop" subTitle="Complaint List" onBack={goBack} />
            <div className=" pt-2 complaint-list list-group list-group-flush">
                {
                    list.map((item, inx) => {
                        let { status, image, title, description } = item;
                        return (
                            <div className="complaint-item list-group-item" key={'complaint-item' + inx}>
                                <div className="image" style={{backgroundImage:`url(${image})`}}>
                                </div>
                                <div className="content">
                                    <div className="title">{title.substring(0,30)}</div>
                                    <div className="description text-sec">{description.substring(0,50)}</div>
                                </div>
                                <div className={"status " + status.toLowerCase().replace(/_/g, '-')}></div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Login;