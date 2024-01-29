import React from 'react';
import { View, Text, Platform } from 'react-native';

import {
    Background,
    Conteiner,
    Input,
    AreaInput,
    SubmitButton,
    SubmitText
} from '../SignIn/styles';

export default function SingUp() {
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

                <SubmitButton>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

            </Conteiner>
        </Background>
    );
}