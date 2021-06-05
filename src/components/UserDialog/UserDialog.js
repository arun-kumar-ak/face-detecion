import React from 'react';

import { List, ListItem, ListItemText, Avatar, Dialog, IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

import { useSelector, useDispatch } from 'react-redux';
import { IS_DIALOG_OPEN } from '../../redux/constants';

import './UserDialog.scss';

const UserDialog = () => {
    const state = useSelector(state => state)
    const user = state.responseData.data;
    const dialogData = state.dialogData;
    const dispatch = useDispatch();
    return (
        <div>
            <Dialog open={dialogData.open} onClose={() => dispatch({type: IS_DIALOG_OPEN, payload: !dialogData.open})} className="dialog">
                <div className="inner-dialog">
                    <Avatar className="person-icon-avatar">
                        <PersonIcon />
                    </Avatar>
                    <List>
                        <ListItem className="list-item">
                            <ListItemText>
                                {user.username}
                                {/* Arun Kumar */}
                            </ListItemText>
                        </ListItem>
                        <ListItem className="list-item">
                            <ListItemText>
                                {user.email}
                                {/* arunkumar@gmail.com */}
                            </ListItemText>
                        </ListItem>
                    </List>
                </div>
            </Dialog>
            <IconButton className="dialog-icon-button" onClick={() => dispatch({type: IS_DIALOG_OPEN, payload: !dialogData.open})}>
                <Avatar className="avatar">
                    {user.username[0]}
                    {/* A */}
                </Avatar>
            </IconButton>
        </div>
    )
}

export default UserDialog;