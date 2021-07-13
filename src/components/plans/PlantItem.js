import React from 'react';
import {connect} from 'react-redux';
import {updateCurrentPlan, deletePlan} from '../../actions';
import {Link} from 'react-router-dom';

class PlanItem extends React.Component {



    render(){

        return (

            <div className="item" key={this.props.id}>
                <i className="large middle aligned clipboard icon" />
                <div className="content">
                
                    <div className="header">
                        {this.props.plan.nombre}
                    </div>
                    <div className="meta">
                        {'Monto: ' + this.props.plan.monto}
                    </div>
                    <div className="meta">
                        {'Monto con descuento: '+this.props.plan.montoDescuento}
                    </div>
                </div>
                <div className="right floated content">
                    <div className="ui two buttons">
                        <Link to="/planedit" className="ui basic green button" onClick={()=>this.props.updateCurrentPlan(this.props.plan)} >
                            Actualizar
                        </Link>
                        <Link to="/" className="ui basic red button" onClick={()=>this.props.deletePlan(this.props.plan)}>
                            Borrar
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

}


export default connect(null, { updateCurrentPlan, deletePlan})( PlanItem);