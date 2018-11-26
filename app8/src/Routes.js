import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormCadastro from './components/FormCadastro';
import FormLogin from './components/FormLogin';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';
import Conversa from './components/Conversa';

export default props => (
    <Router navigationBarStyle={{ backgroundColor: "#115E54" }} titleStyle={{ color: "#fff" }}>
        <Scene key='root'>
            <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar initial />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
            <Scene key='boasVindas' component={BoasVindas} title="Bem-Vindo" hideNavBar />
            <Scene key='principal' component={Principal} title="Principal" hideNavBar />
            <Scene key='adicionarContato' component={AdicionarContato} title="Adicionar Contato" />
            <Scene key='conversa' component={Conversa} title="Conversa" />
        </Scene>
    </Router>
);