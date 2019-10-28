import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

import LetterAvatar from '../../reusables/LetterAvatar';

const styles = theme => ({
    main: {
        flex: '1',
        marginRight: '1em',
        marginTop: 20
    },
    titleLink: { textDecoration: 'none', color: 'inherit' },
    card: {
        padding: '16px 0',
        overflow: 'inherit',
        textAlign: 'right'
    },
    title: {
        padding: '0 16px'
    },
    value: {
        padding: '0 16px',
        minHeight: 48
    },
    avatar: {
        background: theme.palette.background.avatar
    },
    listItemText: {
        overflowY: 'hidden',
        height: '4em',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical'
    }
});

const ReturnReportPerBranch = ({ dailyReturnsPerBranch, classes }) => (
    <div className={classes.main}>
        <LetterAvatar
            letters={dailyReturnsPerBranch.branch.city.split('').slice(0, 2)}
        />
        <Card className={classes.card}>
            <Typography className={classes.title} color="textPrimary">
                {dailyReturnsPerBranch.branch.city}
            </Typography>

            <Typography className={classes.title} color="textSecondary">
                {dailyReturnsPerBranch.branch.location}
            </Typography>

            <Typography className={classes.title} color="textSecondary">
                {dailyReturnsPerBranch.dailyReturns.length} Record(s)
            </Typography>

            <Typography variant="headline" component="h2" className={classes.value}>
                Revenue: $
                {dailyReturnsPerBranch.dailyReturns.reduce(
                    (acc, cur) => acc + cur.price,
                    0
                )}
            </Typography>

            <Divider />
            <List dense={true}>
                {dailyReturnsPerBranch.dailyReturns.map(record => (
                    <ListItem
                        key={record.rentId}
                        button
                        component={Link}
                        to={`/rents/${record.rentId}/show`}
                    >
                        <ListItemText
                            primary={`Rent ID: ${record.rentId}`}
                            secondary={`Type: ${record.vehicleTypeName} --------- Price: $${record.price}`}
                            className={classes.listItemText}
                            style={{ paddingRight: 0 }}
                        />
                    </ListItem>
                ))}
            </List>
        </Card>
    </div>
);

export default withStyles(styles)(ReturnReportPerBranch);
