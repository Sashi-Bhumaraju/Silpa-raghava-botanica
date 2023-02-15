import React  from "react";

class NumberMarker extends React.Component {
    static defaultProps = {
        markerNumber : 1,
        top : 40,
        left: 200
    }
    render()  {

        return (
            <div style={{ position: 'absolute',height:'5px',display: 'flex', padding:'0px 3px', justifyContent:'center',alignItems:'center', top: this.props.top+'px', zIndex: '99', left: this.props.left+'px', borderRadius: '2px', color: 'white', backgroundColor:'red', fontSize: '3px',fontWeight:'bold', boxShadow : '0px 0px 0px #000000' }}>
              {this.props.markerNumber}
          </div>
        );
    }
}

export default NumberMarker