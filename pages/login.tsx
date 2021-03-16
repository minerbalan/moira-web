import Layout from "../components/Layout";
import {PrimaryButton} from "../components/button/PrimaryButton";
import TextInput from "../components/input/TextInput";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {loginRequest} from "../redux/login/asyncActions";

const Login = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onClickLoginButton = () => {
        if (!email || !password) {
            return
        }
        dispatch(loginRequest({email, password}))
    }

    return <>
        <Layout title="ログイン">
            <div className="flex flex-col items-center max-w-lg m-auto">
                <h1 className="block text-4xl font-bold w-100 border-b mt-10 mb-5">ログイン</h1>
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