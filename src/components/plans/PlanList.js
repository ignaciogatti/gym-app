import React from 'react';
import {connect} from 'react-redux';
import {fetchPlans} from '../../actions';
import PlanItem from './PlantItem'

class PlanList extends React.Component {

    componentDidMount(){
        this.props.fetchPlans();
    }

    renderList(){
    
        return this.props.plans.map( (plan, index) =>{
            
            return (
                <PlanItem plan={plan} id={index} /> 
            );
        })
    } 


    render(){
        console.log(this.props.plans);
        return (
            <div>
                <h3>Planes</h3>
                <div class="ui relaxed divided list">
                    {this.renderList()}
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = (state) =>{
    return { 
        plans : state.plans
     };
}


export default connect(mapStateToProps, {fetchPlans})(PlanList);