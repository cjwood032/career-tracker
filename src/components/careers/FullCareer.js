import React from 'react';
import {connect} from 'react-redux'
import {fetchCareers} from '../../actions/careerActions'
import { Link } from 'react-router-dom';
class FullCareer extends React.Component {
  
  componentDidMount(){
   this.props.fetchCareers() 
  }
  
  render() {
    const paramsCareerId= parseInt(this.props.match.params.id)
    const filteredItem = this.props.careers.filter(career => career.id===paramsCareerId)
    const filteredArray = filteredItem.map(career =>
      <div className="CareerContainer" key={career.id}>
      <h2><Link className="nav-link" to="/Careers">Back</Link></h2>
      <h2 className="CareerCompany">Company: {career.company}</h2>
      <h3 className="CareerName" src={career.title}>Position Title: {career.title}</h3>
      <a href={career.link} className="CareerLink"> {career.link} </a>
      <p className="CareerDescription">~Description~<br></br>{career.description} </p>
      </div>
    )

    return (
      <div className="CareerPage">
        {filteredArray}
      </div>
      
      )
  }
};

const mapStateToProps = (state) => {
  return({
  careers: state.careers
  })
}
const mapDispatchToProps = dispatch => {
  return{
  fetchCareers: () => dispatch(fetchCareers())}
}
export default connect(mapStateToProps, mapDispatchToProps) (FullCareer);
// return to line 18<DetailsContainer career={career}/>