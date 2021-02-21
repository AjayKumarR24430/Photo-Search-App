import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Modal, Button} from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 640,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


const Img = (props) => {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
      <>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {props.name[0]}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={props.name}
            subheader={props.created_at}
          />
          <CardMedia
            className={classes.media}
            image={props.url}
            title={props.title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button variant="primary" style={{width: 120}} onClick={handleShow}>
                Learn More
            </Button>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Likes Count: {props.like_count}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Photo Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src= {props.url} width="400" height="300"/>
          <div className="col-1">
            <ul>
              <li>
              Uploaded By: {props.name}
              Title: {props.title}
              Description: {props.description}
              Likes Count: {props.likes}
              Location: {props.location}
              Username: {props.username}
              Twitter Username: {props.twitter}
              Instagram Username: {props.instagram}
              </li>
            </ul>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}

export default Img;