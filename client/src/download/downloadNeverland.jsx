import React, {Component} from 'react';
import { connect } from 'react-redux';

class DownloadNeverland extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fIndex: 0

    }
  }

  componentDidMount() {

  }

  genFunction() {
    const functions = ["aging", "life", "stress", "sleep"];
    return (
        <span>{functions[this.state.fIndex]}</span>
    );
  }

  onClickWaitlist() {
    // window.location = "https://docs.google.com/forms/d/e/1FAIpQLSeZcRVCsn-_cOXdcMyjEfR7PQ9N536zi0NGdVZRbcfE4KUCpg/viewform"
    window.location = "items-services://?action=download-manifest&url=localhost:3000/download/manifest.plist"
  }

  render() {
    return (
      <div> 
      <div className="section hero">
          <div className="container">
            <div className="row">
              <div className="one-half column">
                <h5 className="">Enterprise In-House App distribution.</h5>
                <a className="button button-primary" href="itms-services://?action=download-manifest&url=https://www.dropbox.com/s/3r3l9h4pd3su3r2/manifest.plist?dl=0">Download Your App</a>
              </div>
            </div>
          </div>
        </div>
          <div className="row-nm hero-container">
                  <a className="btn-download" href="itms-services://?action=download-manifest&url=https://localhost:3000/download/manifest.plist">Download</a>
                    <button onClick={this.onClickWaitlist} className="botanica-button btn-lg"> JOIN WAITLIST </button>
                </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    waitlist: state.waitlist
  })

export default connect(mapStateToProps, {})(DownloadNeverland);