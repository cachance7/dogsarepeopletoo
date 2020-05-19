import React from "react";

export default class StepsPreview extends React.Component {
  render() {
    const {steps} = this.props;

    return <div>
      <div className="bg-off-white pv4">
        <div className="ph3 mw7 center">
          <div className="steps">
            {(steps || []).map((step, index) =>
              <dt key={index}> {step} </dt>
            )}
          </div>
        </div>
      </div>
    </div>;
  }
}

