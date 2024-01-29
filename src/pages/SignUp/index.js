import React, { useContext } from 'react';
import { View, Text, Platform } from 'react-native';

import {
    Background,
    Conteiner,
    Input,
    AreaInput,
    SubmitButton,
    SubmitText
} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth'

export default function SingUp() {
    const { user } = useContext(AuthContext)

    function handleSignUp() {
        console.log(user.nome);
    }
    return (
        <Background>
            <Conteiner
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <AreaInput>
                    <Input placeholder="Nome" />
                </AreaInput>

                <AreaInput>
                    <Input placeholder='Seu Email' />
                </AreaInput>

                <AreaInput>
                    <Input placeholder='Sua Senha' />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

            </Conteiner>
        </Background>
    );
}