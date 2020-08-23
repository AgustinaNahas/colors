import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    "@keyframes spin": {
        "0%": {
            transform: 'rotate(0deg) translateX(-50%) translateY(-50%)',
        },
        "100%": {
            transform: 'rotate(1080deg) translateX(-50%) translateY(-50%)',
        }
    },
    box: {
        width: 690,
        height: 600,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transition: 'all 1s ease-in-out',
        transform: 'rotate(0deg) translateX(-50%) translateY(-50%)',
        transformOrigin: '50% 64%',
        '&.spin':{
            animationIterationCount: 'infinite',
            animation: `$spin 3000ms linear`
        }
    },
    color:{
        width: 100,
        height: 100,
        borderRadius: '100%',
        position: 'absolute'
    }
}));

export default function Color(props) {
    const { spin, ...others } = props;
    const classes = useStyles();

    return (
        <div className={`${classes.box} ${spin ? 'spin' : ''} `}>
            <div className={classes.color} {...others}>
            </div>

        </div>
    );
}