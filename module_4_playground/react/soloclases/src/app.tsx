import * as React from "react";
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';

interface Props {

}

interface State {
    username: string;
    editingUsername: string;
}

//Componente de tipo clase
export class App extends React.Component<Props, State> {
    state:State = {username: 'nadie', editingUsername: 'nadie'};

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                username: 'de servidor',
                editingUsername: 'de servidor'
            });
        }, 2000);
    }

    handleChangeUsername = () => {
        this.setState({username: this.state.editingUsername});
    };

    handleChangeEditingUsername = (editingUsername: string) => {
        this.setState({editingUsername});
    };

    render(){
        //<> o <React.Fragment> es como un div fantasma, luego en el html no genera nada.
        //Sirve para cumplir la condición de que el return tenga un único padre
        return(
            <>
                <HelloComponent username={this.state.username} />
                <NameEditComponent
                    editingUsername={this.state.editingUsername}
                    onEditingUsername={this.handleChangeEditingUsername}
                    onNameSubmit={this.handleChangeUsername}
                />
            </>
        );
    }
}

//Componente funcional
/*export const App = () => {
    return <HelloComponent username="Joaquin" />;
}*/