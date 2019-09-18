import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Header from '../../layout/Header';
import { SET_COMPLAINT_DETAILS } from '../ComplaintsDetails/constants';
import { compliants } from '../../utils/ApiService';
import { getUserId } from '../../utils';
import { SET_COMPLAINTS_LIST } from './constants';

const Complaints = props => {
    let { list } = props;
    let goBack = () => props.history.goBack();
    // Action
    let { setComplaintDetails, setComplaintsList } = props;

    let moveComplaintDetails = (complaint) => {
        setComplaintDetails(complaint)
        props.history.push('/complaints-details');
    }
    useEffect(() => {
        let token = getUserId();
        compliants.all({ token }).then(res => {
            if (res.status === "success") {
                setComplaintsList(res.data)
            }
        })
    }, [])
    return (
        <>
            <Header title="Friendlycop" subTitle="Complaint List" onBack={goBack} />
            <div className="app-content">
                <div className=" pt-2 complaint-list list-group list-group-flush">
                    {
                        list.map((item, inx) => {
                            let { status, image, comments, description } = item;
                            return (
                                <div
                                    className="complaint-item list-group-item"
                                    onClick={() => moveComplaintDetails(item)}
                                    key={'complaint-item' + inx}
                                >
                                    <div className="image" style={{ backgroundImage: `url(${image})` }}>
                                    </div>
                                    <div className="content">
                                        <div className="title">{comments.substring(0, 100)}</div>
                                        {/* <div className="description text-sec">{description.substring(0, 50)}</div> */}
                                    </div>
                                    <div className={"status " + status.toLowerCase().replace(/_/g, '-')}></div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    list.length === 0 && (
                        <div className="no-results">
                            <i className="fas fa-search"></i>
                            <h3>No results found</h3>
                        </div>
                    )
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
    }),
    setComplaintsList: payload => dispatch({
        type: SET_COMPLAINTS_LIST,
        payload
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Complaints);