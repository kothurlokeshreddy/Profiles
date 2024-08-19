import { withRouter } from 'react-router-dom'

import './index.css'

const Header = props => {
    const onClickCreateProfile = () => {
        const {history} = props;
        history.push('/')
    }

    const onClickProfileList = () => {
        const {history} = props;
        history.push('/profiles')
    }

    return ( 
        <nav>
            <button type = "button" className='header-containers' onClick = {onClickCreateProfile}>Create Profile</button>
            <button type = "button" className='header-containers' onClick = {onClickProfileList}>Profile List</button>
        </nav>
    )
}

export default withRouter(Header)