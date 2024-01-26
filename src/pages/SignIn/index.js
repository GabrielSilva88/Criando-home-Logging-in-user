import React from 'react';

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
    return (
        <Background>
            <Conteiner>
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

                <SubmitButton activeOpacity={1.5}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>
                <Link>
                    <LinkText>Criar uma Conta</LinkText>
                </Link>
            </Conteiner>
        </Background>
    );
}