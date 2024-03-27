import { IListGroup } from '../../common/components/list-group/list-group.component';
import { IBtn } from '../../common/components/button/button.component';
import { InputGroup } from '../../common/components/forms/input-group/input-group.component';

export const propsList: IListGroup = {
    collection: [], // Initially empty, will be populated dynamically
    propText: 'title',
};

export const propsBtn: IBtn = {
    label: 'Save',
    type: 'submit',
    classes: {
        contextual: 'primary',
        size: 'md',
    },
};

export const propsInput: InputGroup = {
    label: 'New todo',
    name: 'title',
    type: 'text',
};
