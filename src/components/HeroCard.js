import React from "react";
import { addFovourite, removeFavourite } from "../actions";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class HeroCard extends React.Component {
  handleFavouriteClick = () => {
    let hero = this.props.hero;
    this.props.dispatch(addFovourite(hero));
  };

  handleUnFavouriteClick = () => {
    let hero = this.props.hero;
    this.props.dispatch(removeFavourite(hero));
  };

  render() {
    const { hero, isFavourite } = this.props;
    return (
      <div className="hero-card">
        <div className="image">
          <Link to={`/superhero-details/${hero.id}`}>
            <img src={hero.image.url} />
          </Link>
        </div>
        <div className="right">
          <div className="title">{hero.name}</div>

          <div className="footer">
            {isFavourite ? (
              <img
                onClick={this.handleUnFavouriteClick}
                id="unlike"
                style={{ height: 30, width: 30, float: "right" }}
                src="https://image.flaticon.com/icons/svg/148/148836.svg"
              />
            ) : (
              <img
                onClick={this.handleFavouriteClick}
                id="like"
                style={{ height: 30, width: 30, float: "right" }}
                src="https://image.flaticon.com/icons/svg/710/710147.svg"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
  };
}

const connectedHeroCardComponent = connect(mapStateToProps)(HeroCard);

export default connectedHeroCardComponent;
