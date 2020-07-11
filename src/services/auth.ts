interface IResponse {
    token: string,
    usuario: {
        nome: string,
        email: string,
    }
};

export function loginService(): Promise<IResponse> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'token',
                usuario: {
                    nome: 'Silverio',
                    email: 'silver@familia.com.br'
                }
            })
        }, 2500);
    });
}