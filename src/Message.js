import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Message.css"

export default function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>Farhan Begg
                    <span className="message__timestamp">
                        This is a time stamp
                    </span>
                </h4>

                <p>This is a message</p>

            </div>
            
        </div>
    )
}
