import React, { Component } from 'react';
import MaterialSlider from 'material-ui/lib/slider';
import TextField from 'material-ui/lib/text-field';

import IconButton from 'material-ui/lib/icon-button';

import PlayIcon from 'material-ui/lib/svg-icons/av/play-arrow';
import PauseIcon from 'material-ui/lib/svg-icons/av/pause';

import CardText from 'material-ui/lib/card/card-text';

export default class Slider extends Component {
    render() {
        const { name, value, onChange } = this.props;
        
        return (
            <div className="row">
                <CardText className="col-xs-1">{name}</CardText>
                <MaterialSlider className="col-xs-8" value={value} onChange={onChange}	/>
            </div>
        );
    }
}