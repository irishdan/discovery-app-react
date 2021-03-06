import React, {PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import {Link} from 'react-router'
import styles from './Settings.css'

const sourceCodeURL = 'https://github.com/irishdan/discovery-app-react'

class SettingsForm extends React.Component {

    constructor() {
        super()
        this.state = {detailsDisplay: {display: 'none'}}
    }

    toggleDetails(e) {
        e.preventDefault()
        const {detailsDisplay} = this.state
        const newDetailsDisplay = {display: detailsDisplay.display === 'none' ? 'block' : 'none'}
        this.setState({detailsDisplay: newDetailsDisplay})
    }

    render() {
        return (
            <div styleName='settings-container'>
                <form onSubmit={this.props.loadSpace} styleName='settings-form'>
                    <div styleName='form-container'>
                        <p styleName='error' style={this.props.errorDisplay}>
                            {this.props.validationError}
                        </p>
                        <div>
                            <h1>Access any Space with Space ID and API Key</h1>
                            <Link onClick={this.toggleDetails.bind(this)} to='#'> Where do I find Space ID and Delivery
                                API Key
                            </Link>
                            <div style={this.state.detailsDisplay}>
                                <ol>
                                    <li>
                                        Log into your NuAPI account
                                    </li>
                                    <li>
                                        Select <strong>APIs</strong> on the top navigation bar
                                    </li>
                                    <li>
                                        Select <strong>API Keys</strong> on the left menu
                                    </li>
                                    <li>
                                        Select <strong>Website Key</strong> or create a new one
                                    </li>
                                    <li>
                                        Copy your <strong>Production</strong> and <strong>Preview</strong> keys
                                    </li>
                                </ol>
                                <img src='api_key.png' width='650'/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor='space' styleName='label-title'>
                                Space ID
                            </label>
                            <input
                                styleName='spaceInput'
                                id='space'
                                type='text'
                                defaultValue={this.props.space}
                                onChange={this.props.handleChange}/>
                        </div>
                        <div>
                            <label htmlFor='deliveryAccessToken' styleName='label-title'>
                                Delivery API key
                            </label>
                            <input
                                id='deliveryAccessToken'
                                type='text'
                                defaultValue={this.props.deliveryAccessToken}
                                onChange={this.props.handleChange}/>
                        </div>
                        <div>
                            <label htmlFor='previewAccessToken' styleName='label-title'>
                                Preview API key
                            </label>
                            <input
                                id='previewAccessToken'
                                type='text'
                                defaultValue={this.props.previewAccessToken}
                                onChange={this.props.handleChange}/>
                        </div>
                        <button type='submit'>Load Application</button>
                    </div>
                </form>
                <div styleName='form-caption'>
                    <section>
                        <h4>What is NuAPI?</h4>
                        <p>
                            <a href='https://localdev.app.dev'>NuAPI</a> is a content management platform for web
                            applications, mobile apps and connected devices.
                            You can check out the <a href={sourceCodeURL}>source code</a>.
                        </p>
                    </section>
                    <section>
                        <h4>Still don't have an application?</h4>
                        <p>
                            <Link
                                to='/entries/by-content-type?space_id=cfexampleapi&preview=false&preview_access_token=e5e8d4c5c122cf28fc1af3ff77d28bef78a3952957f15067bbc29f2f0dde0b50&delivery_access_token=b4c0n73n7fu1'>
                                Load a demo Space
                            </Link> or <a href='https://localdev.app.dev/sign-up' target='_blank'>Create an account</a>
                        </p>
                    </section>
                </div>
            </div>
        )
    }
}

SettingsForm.propTypes = {
    space: PropTypes.string.isRequired,
    selectedAccessToken: PropTypes.string.isRequired,
    deliveryAccessToken: PropTypes.string.isRequired,
    previewAccessToken: PropTypes.string.isRequired,
    selectedApi: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    loadSpace: PropTypes.func.isRequired,
    validationError: PropTypes.string
}

export default CSSModules(SettingsForm, styles)
