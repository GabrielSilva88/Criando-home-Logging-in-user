import React from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import {
    Background,
    AreaInput,
    Conteiner,
    Input,
    Logo,
    SubmitButton,
    SubmitText,
    Link,
    LinkText
} from './styles';

export default function SingIn() {
    
    const navigation = useNavigation();
    
    return (
        <Background>
            <Conteiner
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >   
                <Logo
                    source={require('../../assets/Logo.png')}
                />
                <AreaInput>
                    <Input
                        placeholder='Seu E-mail'
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder='Seu Senha'
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.9}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>
                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma Conta</LinkText>
                </Link>
            </Conteiner>
        </Background>
    );
}