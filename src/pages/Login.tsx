import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonLoading,
  IonImg
} from '@ionic/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, setToken } from '../redux/actions/Auth';
import { RootState } from '../redux/rootReducer';
import { useForm, Controller } from 'react-hook-form';
import './Login.css';

const Login: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const _doLogin = (formValue: any) => {
    // dispatch(login(formValue));
    dispatch(setToken('testJWToken')); // This is used for just testing purpose to set dummy token when api is failed.
  };
  const { handleSubmit, errors, setValue, control } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  return (
    <IonPage>
      <IonContent fullscreen className="login-content">
        <form style={{ height: "100%" }} onSubmit={handleSubmit(_doLogin)}>
          <div style={{ height: "33%" }}>
            <IonImg
              src="assets/icon/logo.png"
              style={{ width: "34%" }}
            />
          </div>
          <div style={{ height: "33%" }}>
            <div className="item-input" >
              <Controller
                as={
                  <IonInput
                    placeholder="Username"
                    type="text"
                    className="input-login"
                    onIonChange={e => {
                      setValue('username', e.detail.value!);
                    }}
                  />
                }
                control={control}
                name="username"
                rules={{
                  required: true,
                }}
              />
              {errors.username ? (
                <span style={{ paddingLeft: 2, color: "red" }}>Username is required</span>
              ) : (
                  <span style={{ paddingLeft: 2, color: "red" }}>&nbsp;</span>
                )}
            </div>
            <div className="item-input" >
              <Controller
                as={
                  <IonInput
                    placeholder="Password"
                    type="text"
                    className="input-login"
                    onIonChange={e => {
                      setValue('password', e.detail.value!);
                    }}
                  />
                }
                control={control}
                name="password"
                rules={{
                  required: true,
                }}
              />
              {errors.password ? (
                <span style={{ paddingLeft: 2, color: "red" }}>Password is required</span>
              ) : (
                  <span style={{ paddingLeft: 2, color: "red" }}>&nbsp;</span>
                )}
            </div>
          </div>
          <div style={{ height: "33%" }}>
            <IonButton
              type="submit"
              expand="block"
              className="btn-login">
              Continue
            </IonButton>
          </div>
          <IonLoading
            cssClass='my-custom-class'
            isOpen={loading}
            message={'Please wait...'}
          />
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
