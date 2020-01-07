import * as React from 'react';

interface Props {
    editingUsername: string;
    onEditingUsername: (newName: string) => void;
    onNameSubmit: () => void;
}

export const NameEditComponent = (props: Props) => {
    const { editingUsername, onEditingUsername, onNameSubmit } = props;

    return (
        <>
            <label>Update name:</label>
            <input
                value={editingUsername}
                onChange={e => onEditingUsername(e.target.value)}
            />
            <button onClick={() => onNameSubmit()}>Submit</button>
        </>
    );
};

/*export class NameEditComponent extends React.Component<Props, {}> {
    render(){
        return (
            <>
                <label>Update name:</label>
                <input
                    value={this.props.editingUsername}
                    onChange={e => this.props.onEditingUsername(e.target.value)}
                />
                <button onClick={() => this.props.onNameSubmit()}>Submit</button>
            </>
        );
    }    
}*/