import React from 'react'
import Container from '@components/DivContainer/DivContainer'
import Title from '@components/Title/Title'
import Subtitle from '@components/Subtitle/Subtitle'
import Figure from '@components/Figure/Figure'
import Span from '@components/Span/Span'
import Link from '@components/Link/Link'
import './Notfound.scss'
import '@styles/Button.scss'


const NotFound = () => {
    return (
        <Container className="Container--notfound">
            <div className="card--notfound">
                <Title className="Title--notFound">Opss..! 404</Title>
                <Subtitle className="Subtitle--notFound">The link that you followed is probably broken, or the page was deleted or no longer exists.</Subtitle>
                <Figure className="Figure--notFound">
                    <img src="https://seocruz.com/wp-content/uploads/2020/08/astronauta-perdido-1.png" alt="lost astronaut" />
                </Figure>
                <button type="button" className=" Button Button--notFound">Page not NotFound</button>
                <Subtitle className="Subtitle--notFound">The link that you followed is probably broken, or the page was deleted or no longer exists</Subtitle>
                <p><Span className="Span--email">Return to the</Span><Link>Home page</Link></p>
            </div>
        </Container>
    )
}

export default NotFound