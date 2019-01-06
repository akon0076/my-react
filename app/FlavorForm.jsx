import React from 'react';
import './table.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('RedLee', 11603080205, 6.0, 24, 4.0),
    createData('Jack', 11603080206, 9.0, 37, 4.3),
    createData('JocHua', 11603080207, 16.0, 24, 6.0),
    createData('CGX', 11603080208, 3.7, 67, 4.3),
    createData('LuoJiang', 11603080209, 16.0, 49, 3.9),
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <div>
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="center">姓名</TableCell>
                        <TableCell align="center">学号</TableCell>
                        <TableCell align="center">年龄</TableCell>
                        <TableCell align="center">体重</TableCell>
                        <TableCell align="center">操作</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.calories}</TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                                <TableCell align="center">{row.protein}</TableCell>
                                <TableCell align="center">
                                    <span className="operation">删除</span>
                                    <span className="operation">修改</span>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
            <span className="operation">修改</span>
        </div>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SimpleTable);