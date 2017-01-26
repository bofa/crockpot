import React, { Component } from 'react';
import Immutable, { Map } from 'immutable';

import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import CircularProgress from 'material-ui/lib/circular-progress';
import Badge from 'material-ui/lib/Badge';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';

import Slider from './Slider';

const ingredients = [
    {
        id: 'morsel',
        img: 'http://vignette1.wikia.nocookie.net/dont-starve-game/images/2/2e/Morsel.png',
        health: 0,
        hunger: 12.5, 
        sanity: -10,
        meatValue: 0.5,
    },
    {
        id: 'froglegs',
        img: 'http://vignette2.wikia.nocookie.net/dont-starve-game/images/9/9f/Frog_Leg.png',
        health: 0,
        hunger: 12.5, 
        sanity: -10,
        perish: 6,
        meatValue: 0.5,
    },
    {
        id: 'berries',
        img: 'http://vignette3.wikia.nocookie.net/dont-starve-game/images/2/24/Berries.png',
        health: 0,
        hunger: 9.375, 
        sanity: 0,
        perish: 6,
        fruitValue: 0.5,
    },
    {
        id: 'carrot',
        img: 'http://vignette2.wikia.nocookie.net/dont-starve-game/images/c/c3/Carrot.png',
        health: 1,
        hunger: 12.5, 
        sanity: 0,
        perish: 10,
        vegetableValue: 0.5,
    }
];

const recepies = [
    {
        id: 'meatballs',
        img: 'http://vignette3.wikia.nocookie.net/dont-starve-game/images/b/bf/Meatballs.png',
        
        health: 3,
        hunger: 62.5, 
        sanity: 5,
        perish: 10,
        crock: {
            meatValue: 0.5,
            prio: -1,
            exclude: [
                'twigs',
            ],
        }


    }
];

export default class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            sanityWeight: 1/3,
            hungerWeight: 1/3,
            healthWeight: 1/3,
            ingredientsCount: new Map(),
        };
    }

    ingredientsClick = (ingredient, e) => {
        this.setState({
            ingredientsCount: this.state.ingredientsCount.update(ingredient.id, 0, count => count + 1),
        });
    };

    render() {
        const { sanityWeight, hungerWeight, healthWeight, ingredientsCount } = this.state;

        const ingredientsComponents = ingredients.map(i => (
            <div>
                <Badge
                    onClick={() => this.ingredientsClick(i)}
                    badgeContent={ingredientsCount.get(i.id)}
                    primary={true}
                >
                    <img key={i.id} src={i.img} height="50" width="50" />      
                </Badge>
            </div>
        ));

        recepies.forEach()

        return (
            <div>
                <Slider name="Sanity" value={sanityWeight} onChange={(e, sanityWeight) => this.setState({ sanityWeight })} />
                <Slider name="Hunger" value={hungerWeight} onChange={(e, hungerWeight) => this.setState({ hungerWeight })} />
                <Slider name="Health" value={healthWeight} onChange={(e, healthWeight) => this.setState({ healthWeight })} />
                <div className="row">
                    {ingredientsComponents}
                </div>
                <br/>
                <div>
                    recepie
                </div>
            </div>
        );
    }
}