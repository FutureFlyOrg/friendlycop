import React from 'react';
import { connect } from 'react-redux'
import Header from '../../layout/Header';
import { SET_COMPLAINT_DETAILS } from '../ComplaintsDetails/constants';

const Complaints = props => {
    let { list } = props;
    let goBack = () => props.history.goBack();
    // Action
    let { setComplaintDetails } = props;

    let moveComplaintDetails = (complaint) => {
        setComplaintDetails(complaint)
        props.history.push('/complaints-details');
    }
    return (
        <>
            <Header title="Friendlycop" subTitle="Complaint List" onBack={goBack} />
            <div className=" pt-2 complaint-list list-group list-group-flush">
                {
                    list.map((item, inx) => {
                        let { status, image, title, description } = item;
                        return (
                            <div
                                className="complaint-item list-group-item"
                                onClick={() => moveComplaintDetails(item)}
                                key={'complaint-item' + inx}
                            >
                                <div className="image" style={{ backgroundImage: `url(${image})` }}>
                                </div>
                                <div className="content">
                                    <div className="title">{title.substring(0, 30)}</div>
                                    <div className="description text-sec">{description.substring(0, 50)}</div>
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

const mapStateToProps = ({ Complaints }) => ({
    ...Complaints
})
const mapDispatchToProps = dispatch => ({
    setComplaintDetails: payload => dispatch({
        type: SET_COMPLAINT_DETAILS,
        payload
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Complaints);