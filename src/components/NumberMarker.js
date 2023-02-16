import React  from "react";

class NumberMarker extends React.Component {
    static defaultProps = {
        markerNumber : 1,
        top : 40,
        left: 200,
        rotate: false,
    }
    render()  {
       
        let styles = {isrotate:{ position: 'absolute',height:'7px',display: 'flex', textAlign:'center', padding:'0px 3px', justifyContent:'center',alignItems:'center', top: this.props.top+'px', zIndex: '99', left: this.props.left+'px', borderRadius: '2px', color: 'white',letterSpacing:'0.3px', backgroundColor:'#22311d',  fontSize: '4px',fontWeight:'bold', boxShadow : '0px 0px 0px #000000' }};
         if(this.props.rotate){
             styles = { isrotate : { position: 'absolute',height:'4px',display: 'flex', textAlign:'center',transform:'rotate(270deg)', padding:'0px 1px', justifyContent:'center',alignItems:'center', top: this.props.top+'px', zIndex: '99', left: this.props.left+'px', borderRadius: '1.5px', color: 'white',letterSpacing:'0.12px', backgroundColor:'black',  fontSize: '1.5px',fontWeight:'bold', boxShadow : '0px 0px 0px #000000' }};
        }
        return (
            <div style={styles.isrotate}>
             <div className="marker">{this.props.markerNumber}</div>
          </div>
        );
    }
}

export default NumberMarker