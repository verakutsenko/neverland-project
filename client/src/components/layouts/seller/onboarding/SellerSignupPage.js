import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NButton from '../../../UI/NButton';
import { Spinner } from 'react-bootstrap';
import BrandStyles from "../../../BrandStyles";
import PasswordInput from '../../../UI/PasswordInput';
import EmailInput from '../../../UI/EmailInput';
import OnboardingImageWrapper from './OnboardingImageWrapper';
import OnboardingHeader from './OnboardingHeader';
import { onSignUpFirebase } from '../../../../actions/auth';

const styles = {
  container: {
    backgroundColor: BrandStyles.color.beige,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
};

class SellerSignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      isSubmitting: false,
      isSellerOnboarding: true,
      toNextStep: false
    };
    this.onClickBackButton = this.onClickBackButton.bind(this);
  }

  onChangeInput(key, value) {
    console.log("onChangeInput", key, value)
    this.setState({
      [key]: value,
    });
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateInput() {
    let isValid = true;
    console.log('validateInput', this.state);
    if (this.state.email === '') {
      console.log('email is empty');
      this.setState({
        emailError: 'Please enter a valid e-mail.',
      });
      isValid = false;
    } else {
      isValid = !this.state.email.hasError;
      if (isValid) {
        this.setState({
          emailError: '',
        });
      }
    }

    if (this.state.password === '') {
      this.setState({
        passwordError: 'Please enter a password.',
      });
      isValid = false;
    } else {
      isValid = !this.state.password.hasError;
      if (isValid) {
        this.setState({
          passwordError: '',
        });
      }
    }

    console.log('IS VALID', isValid);
    return isValid;
  }

  redirectToNextStep() {

  }

  async onSubmitForm() {
    if (this.validateInput()) {
      console.log('ON SUBMIT FORM is it seller? ', this.state.isSellerOnboarding);
      console.log(this.state);
      this.setState({ isSubmitting: true });

      console.log('onFormSubmit in HomeMainSignupContainer');
      const { onSignUpFirebase } = this.props;
      this.setState({ success: null, error: null, loading: true });
      let data = this.state;
      try {
        // transform data
        let transformedData = {
          email: data.email.email,
          password: data.password.password,
          isSellerOnboarding: this.state.isSellerOnboarding,
        };
        console.log("sign up with: ", transformedData)
        console.log(this.props.history)
        const success = await onSignUpFirebase(transformedData, 'default');
        this.setState({ toNextStep: true, success, error: null, isLoadingSubmitSignup: false });
        this.redirectToNextStep();
      } catch (error) {
        this.setState({
          isLoadingSubmitSignup: false,
          success: null,
          error: error.message,
        });
      }
    }
  }

  onClickBackButton() {
    if (this.props.history) {
      this.props.history.goBack();
    }
  }

  renderError(error) {
    if (error.length < 1) {
      return null;
    }

    return <span style={BrandStyles.components.errorMessage}>{error}</span>;
  }

  renderFacebookErrorCode() {
    const errorCode = this.props.fbError;
    let message = '';
    switch (errorCode) {
      case 'auth/user-not-found':
        message = "We couldn't find account associated with this FB account.";
        break;
      case 'auth/facebook-login-failed':
        message = "We couldn't get your account details. Please try again later.";
        break;
    }

    return <span style={styles.errorMessage}>{message}</span>;
  }

  render() {
    if (this.state.toNextStep) {
      return (<Redirect to="/seller/onboarding/basics" />);
    }
    let spinner = null;
    if (this.state.isSubmitting) {
      spinner = <Spinner />;
    }
    let emailInputStyle = BrandStyles.components.input;
    if (this.state.emailError) {
      emailInputStyle = BrandStyles.components.errorInput;
    }
    let passInputStyle = BrandStyles.components.input;
    if (this.state.passwordError && this.state.passwordError.length > 0) {
      passInputStyle = BrandStyles.components.errorInput;
    }
    let containerStyle = {...BrandStyles.components.onboarding.container, flexDirection: 'column'};
    return (
      <OnboardingImageWrapper>
        <OnboardingHeader onClickBackButton={this.onClickBackButton} />
        <div>
          <div style={containerStyle}>
            <div style={{ height: 64 }} />
            <span
              style={{
                color: BrandStyles.color.blue,
                fontSize: 12,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              LET'S GET STARTED
            </span>
            <span
              style={{
                color: BrandStyles.color.black,
                fontSize: 32,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              SIGN UP
            </span>
            <div style={{ height: 32 }} />
            <form style={{ justifyContent: 'center' }}>
              <EmailInput onChange={this.onChangeInput.bind(this)} error={this.state.emailError} />
              <div style={{height: 8}} />
              <PasswordInput
                onChange={this.onChangeInput.bind(this)}
                error={this.state.passwordError}
              />
              <div style={{height: 8}} />
              <div>
                <NButton
                  buttonStyle={{
                    justifyContent: 'center',
                  }}
                  isLoading={this.props.isLoadingSubmitSignup}
                  title="Sign Up"
                  onClick={() => {
                    this.onSubmitForm();
                  }}
                >
                  <span
                    style={{
                      color: BrandStyles.color.beige,
                      fontWeight: 'bold',
                    }}
                  >
                    {' '}
                    Sign Up{' '}
                  </span>
                  {spinner}
                </NButton>
              </div>
            </form>
          </div>
        </div>
      </OnboardingImageWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {onSignUpFirebase})(SellerSignupPage);