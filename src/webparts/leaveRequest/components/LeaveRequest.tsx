import * as React from 'react';
import styles from './LeaveRequest.module.scss';
import { ILeaveRequestProps } from './ILeaveRequestProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class LeaveRequest extends React.Component<ILeaveRequestProps, {}> {
  public render(): React.ReactElement<ILeaveRequestProps> {
    return (
      <div className={ styles.leaveRequest }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to GearVn - Leave Request</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
