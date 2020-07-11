import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { loginService } from "../services/auth";

interface IUsuario{
    nome: string,
    email: string,
}

interface IAuthContext {
    logado: boolean;
    usuario: IUsuario | null;
    loading: boolean;
    logar(): Promise<void>;
    deslogar(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
    const [usuario, setUsuario] = useState<IUsuario | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function carregarStorageData() {
            const storageUsuario = await AsyncStorage.getItem('@PromoAuth:usuario');
            const storageToken = await AsyncStorage.getItem('@PromoAuth:token');

            if (storageUsuario && storageToken) {
                setUsuario(JSON.parse(storageUsuario));
                setLoading(false);
            }
        }

        carregarStorageData();
    }, []);

    async function logar() {
        const response = await loginService();
        setUsuario(response.usuario);

        await AsyncStorage.setItem('@PromoAuth:usuario', JSON.stringify(response.usuario));
        await AsyncStorage.setItem('@PromoAuth:token', response.token);
    }

    async function deslogar() {
        AsyncStorage.clear().then(() => {
            setUsuario(null);
        })
    }

    return (
        <AuthContext.Provider value={{ logado: !!usuario, usuario, loading, logar, deslogar }}>
            {children}
        </AuthContext.Provider>
    );
}

export function UseAuth() {
    const context = useContext(AuthContext);

    return context;
};