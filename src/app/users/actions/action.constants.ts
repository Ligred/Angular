import { InjectionToken } from '@angular/core';
import { ActionConfig } from './action.interface';

export let modalAction = new InjectionToken<ActionConfig>('action.config');

export const modalActionConfig: ActionConfig = {
    title: 'Create New User',
    btnCaption: 'Add',
    btnClass: 'btn-success'
};
