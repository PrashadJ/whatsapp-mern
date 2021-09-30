import React from 'react';
import './sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<Avatar src="https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?s=612x612" />
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
