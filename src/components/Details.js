import React from "react";
import { connect } from "react-redux";
import { fetchHeroAbout } from "../actions/details";

class Details extends React.Component {
  componentDidMount() {
    const { match } = this.props;

    if (match.params.heroId) {
      this.props.dispatch(fetchHeroAbout(match.params.heroId));
    }
  }

  render() {
    const {
      match: { params },
      detail,
    } = this.props;
    const hero = this.props.match.params;
    console.log(this.props);
    return (
      <div>
        <h1 className="heading">About the super hero</h1>
        <div id="about-section">
          <img id="hero-img" src={hero.image} alt="image of the superhero" />
          <h2>{hero.name}</h2>
          <div id="hero-info">the name of the hero is:</div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ detail }) {
  return {
    detail,
  };
}

export default connect(mapStateToProps)(Details);
