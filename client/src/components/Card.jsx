import React, { Component } from 'react'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
const Card_ = props => {
    return (
            <Card>
                <CardActionArea>
                    <CardMedia component="img" height="180" image={require('../assets/' + props.imgUrl)} title={props.title} />
                    <CardContent>
                    <h4 className="p-2">
                        {props.title}
                    </h4>
                    <p className="p-2">
                        {props.body}
                    </p>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link style={{textDecoration: 'none'}} className="p-2" to={'/projects/'+props.linkto}>Learn More <i className="pl-2 link fa fa-external-link"></i></Link>
                    </Button>
                </CardActions>
            </Card>
        )
}

export default Card_;