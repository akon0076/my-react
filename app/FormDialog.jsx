import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import DialogTitle from '@material-ui/core/DialogTitle';

class FormDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "",
            number: "",
            age: ""
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.itemChange = this.itemChange.bind(this);
        this.confirm = this.confirm.bind(this);
    }

    handleClickOpen () {
        this.setState(state => ({ open: true }));
    };

    handleClose () {
        this.props.closeForm();
        this.setState(state => ({
            name: "",
            gender: "",
            number: "",
            age: ""
        }));
    };


    confirm () {
        this.props.addPerson(this.state)
        console.log(this.state);
    };

    itemChange(name, event) {
        console.log(name);
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.handleClose}
                    fullWidth={true}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">新增人员</DialogTitle>
                    <DialogContent>
                        <TextField
                            value={this.state.name}
                            autoFocus
                            margin="dense"
                            name={"name"}
                            label="姓名"
                            type="text"
                            onChange={this.itemChange.bind(this, "name")}
                            fullWidth />
                        <FormControl fullWidth={true}>
                            <InputLabel>性别</InputLabel>
                            <Select
                                value={this.state.gender}
                                onChange={this.itemChange.bind(this, "gender")}
                                input={<Input name="性别" id="age-helper" />}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"男"}>男</MenuItem>
                                <MenuItem value={"女"}>女</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            value={this.state.number}
                            autoFocus
                            margin="dense"
                            label="学号"
                            type="text"
                            onChange={this.itemChange.bind(this, "number")}
                            fullWidth/>
                        <TextField
                            value={this.state.age}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="年龄"
                            type="text"
                            onChange={this.itemChange.bind(this, "age")}
                            fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={(e) => this.handleClose()} color="primary">取消</Button>
                        <Button onClick={(e) => this.confirm()} color="primary">确认</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default FormDialog