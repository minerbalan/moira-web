import Layout from "../components/Layout";
import {PrimaryButton} from "../components/button/PrimaryButton";
import TextInput from "../components/input/TextInput";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginRequest} from "../redux/login/asyncActions";
import Alert from "../components/alert/Alert";
import loginSlice, {LoginState} from "../redux/login/slice";
import {fetchCurrentUserRequest} from "../redux/currentUser/asyncActions";
import {useRouter} from "next/router";

const Login = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const loginState = useSelector((state: { login: LoginState }) => state.login)
    const [showAlert, setShowAlert] = useState(false)


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        dispatch(loginSlice.actions.initLoginState())
    }, [])

    const onClickLoginButton = () => {
        if (!email || !password) {
            return
        }
        dispatch(loginRequest({email, password}))
    }

    useEffect(() => {
        if (loginState.isLogin) {
            dispatch(fetchCurrentUserRequest())
            router.push("/")
        }
    }, [loginState.isLogin])

    useEffect(() => {
        if (loginState.hasError != showAlert) {
            setShowAlert(loginState.hasError)
        }
    }, [loginState.hasError])

    const onClickCloseAlert = () => {
        if (showAlert) {
            setShowAlert(false)
        }
    }

    return <>
        <Layout title="ログイン">
            <div className="flex flex-col items-center max-w-lg m-auto">
                <h1 className="block text-4xl font-bold w-100 border-b mt-10 mb-5">ログイン</h1>
                {
                    showAlert &&
                    <Alert onCloseClick={onClickCloseAlert}>ログインに失敗しました</Alert>
                }

                <TextInput type="email" label="メールアドレス"
                           onChange={(e) => {
                               setEmail(e.target.value)
                           }}/>
                <TextInput type="password" label="パスワード" className="mt-2"
                           onChange={(e) => {
                               setPassword(e.target.value)
                           }}/>
                <PrimaryButton className="mt-8" onClick={() => onClickLoginButton()}>ログインする</PrimaryButton>
            </div>
        </Layout>
    </>
}

export default Login