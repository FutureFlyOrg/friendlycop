import React from 'react';
import { connect } from 'react-redux';
import Header from '../../layout/Header';
import Map from '../../components/Map';
import { compliants } from '../../utils/ApiService';
import { getUserId } from '../../utils';
import { UPDATE_COMPLAINT_STATUS } from './constants';

const ComplaintDetails = props => {
    let goBack = () => props.history.goBack();
    let { comments, image, location, status, id } = props

    // Actions
    let { updateComplaintStatus } = props;

    let btn = {};
    
    switch (status) {
        case 'QUEUE':
            btn.text = "Accept Complaint";
            btn.color = "btn-danger";
            break;
        case 'ACTION_TAKEN':
            btn.text = "Tack Action";
            btn.color = "btn-warning";
            break;
        case 'IN_PROGRESS':
            btn.text = "Action Completed";
            btn.color = "btn-info";
            break;
        default:
            btn.text = "Complaint Resolved";
            btn.color = "btn-success";
            break;
    }

    let onChangeStatus = () => {
        let actionBy = getUserId();
        if (status === "QUEUE") {
            status = "ACTION_TAKEN";
        }
        else if (status === "ACTION_TAKEN") {
            status = "IN_PROGRESS";
        }
        else if (status === "IN_PROGRESS") {
            status = "COMPLETED";
        }
        else {
            return;
        }
        compliants.updateStatus(id, { status, actionBy }).then(res => {
            if (res.status === "success") {
                updateComplaintStatus(status)
            }
        })
    }
    return (
        <>
            <Header title="Friendlycop" subTitle="Complaint Details" onBack={goBack} />
            <div className="app-content">
                <div className="complaint-details">
                    <div className="image">
                        <img src={image} className="img-fluid" alt="" />
                    </div>
                    <div className="content px-2">
                        <p>{comments}</p>
                    </div>
                    <Map
                        position={{
                            lat: location._latitude,
                            lng: location._longitude
                        }}
                        isMarkerShown={true}
                    />
                </div>
            </div>
            <div className="app-footer">
                <div
                    className={`btn btn-lg rounded-0 btn-block ${btn.color}`}
                    onClick={onChangeStatus}
                >{btn.text}</div>
            </div>
        </>
    )
}

const mapStateToProps = ({ ComplaintDetails }) => ({
    ...ComplaintDetails
})
const mapDispatchToProps = dispatch => ({
    updateComplaintStatus: payload => dispatch({
        type: UPDATE_COMPLAINT_STATUS,
        payload
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintDetails);