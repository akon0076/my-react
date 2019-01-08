import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Form from './FormDialog.jsx';
import './table.css';

let log = console.log;
let id = 0;
function createData(name, gender, number, age) {
    id += 1;
    return { id, name, gender, number, age};
}

class MYTable extends React.Component {
    constructor(props = {}) {
        super(props);
        this.state = {
            persons : [
                createData('RedLee', "男", 11603080205, 20),
                createData('Jack',"男", 11603080206, 21),
                createData('JocHua',"男", 11603080207, 22),
                createData('CGX',"男", 11603080208, 23),
                createData('LuoJiang',"男", 11603080209, 24),
            ],
            formIsShow: false,
            person: {}
        }
        this.closeForm = this.closeForm.bind(this);
        this.addPerson = this.addPerson.bind(this);
    }
    remove(id) {
        let temppersons = this.state.persons;
        let index = temppersons.findIndex((person) => {
            person.id == id ? true : false;
        })
        temppersons.splice(index,1);
        this.setState(state => ({
            persons: temppersons
        }));
    }
    update(row) {

    }
    showForm() {
        this.setState(state => ({
            formIsShow: true,
            person: {name: "", gender: "", number: "", age: ""}
        }));
    }
    closeForm() {
        this.setState(state => ({
            formIsShow: false
        }));
    }

    addPerson(person) {
        let persons = this.state.persons;
        persons.push(createData(person.name, person.gender, person.number, person.age));
        this.setState(state => {
            persons: persons
        })
        this.closeForm();
    }
    render() {
        return (
            <div>
                <Card className="bigCard">
                    <Typography className="title" variant="h5" component="h2">
                        人员管理系统
                    </Typography>
                    <Button variant="contained" color="primary" className="addButton" onClick={(e) => this.showForm()}>新增</Button>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">姓名</TableCell>
                                    <TableCell align="center">性别</TableCell>
                                    <TableCell align="center">学号</TableCell>
                                    <TableCell align="center">年龄</TableCell>
                                    <TableCell align="center">操作</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.persons.map(row => {
                                    return (
                                        <TableRow key={row.id}>
                                            <TableCell align="center">{row.name}</TableCell>
                                            <TableCell align="center">{row.gender}</TableCell>
                                            <TableCell align="center">{row.number}</TableCell>
                                            <TableCell align="center">{row.age}</TableCell>
                                            <TableCell align="center">
                                                <span className="remove operation" onClick={(e) => this.remove(row.id)}>删除</span>
                                                <span className="update operation">修改</span>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </Card>
                <Form person={this.state.person} open={this.state.formIsShow} closeForm={this.closeForm} addPerson={this.addPerson}></Form>
            </div>
        )
    }
}


export default MYTable;