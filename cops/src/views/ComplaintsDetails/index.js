import React from 'react';
import { connect } from 'react-redux';
import Header from '../../layout/Header';
import Map from '../../components/Map';

const ComplaintDetails = props => {
    let goBack = () => props.history.goBack();
    let { title, description, image, loaction: position, status } = props

    let btnText = "";
    switch (status) {
        case 'QUEUE':
            btnText = "Accept Complaint";
            break;
        case 'ACTION_TAKEN':
            btnText = "Tack Action"
            break;
        case 'IN_PROGRESS':
            btnText = "Action Completed";
            break;
        default:
            btnText = "Complaint Resolved";
            break;
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
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <Map
                        position={{
                            lat: position.latitude,
                            lng: position.longitude
                        }}
                        isMarkerShown={true}
                    />
                </div>
            </div>
            <div className="app-footer">
                <div className={`btn btn-lg rounded-0 btn-block ${status === "COMPLETED" ? 'btn-success' : 'btn-primary'}`}>{btnText}</div>
            </div>
        </>
    )
}

const mapStateToProps = ({ ComplaintDetails }) => ({
    ...ComplaintDetails
})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintDetails);