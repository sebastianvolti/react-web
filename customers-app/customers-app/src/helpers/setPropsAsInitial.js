import React, {Component} from 'react';

export const setPropsAsInitial = WrappedComponent => (
    class extends Component {
        render() {                                    
        return <WrappedComponent 
                {...this.props} 
                initialValues={this.props} //initial values solo se ejecuta una vez al inicio
                enableReinitialize/>;      //enableReinitialize obliga a ejecutar nuevamente initialValues  
        }
    }   
)

//Este componente es un High Order Component (HOC), es una funcion que retorna un nuevo componente
//en base al componente inicial. (en este caso nos sirvió para no usar connect en un componente de presentacion)