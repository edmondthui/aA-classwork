import React from 'react';
import Clock from './frontend/clock.jsx'
import Tabs from './frontend/tabs.jsx'

const tabs = [
    {title: 'Void', content: "https://media.comicbook.com/2020/10/berserk-god-hand-origin-1241993.jpeg?auto=webp&width=690&height=360&crop=690:360,smart"},
    { title: 'Femto', content: "https://pm1.narvii.com/6579/7deade4dbf1e281b8b81bd3c76cd5c31fc25e4db_00.jpg"},
    { title: 'Slan', content: "https://images.squarespace-cdn.com/content/v1/5ace4845e17ba35c9d8eb95e/1595942435516-XHA6KDKNDKH4B0S3KREO/ke17ZwdGBToddI8pDm48kIgVTnuVR_uq8QzV2HySjFhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwLHbuWTjY77b5Bvch_AfSwy4f8orSsQMaUtm1t2VSzph7Lur6RTOKfXDuursS09Eo/slan+berserk.PNG"},
    { title: 'Ubik', content: "https://pm1.narvii.com/6671/e19e87c8ca52fea5fd8873faaf7c2451be8e9cda_00.jpg"},
    { title: 'Conrad', content: "https://preview.redd.it/h9xjs06020901.png?auto=webp&s=a84ee838e71d6ccfb7bb181ee981cc77cd3fd242"}
]

const App = (props) => {
    return (
    <div>
        <Clock/>
        <Tabs tabs={tabs}/>
    </div>
    );
}
export default App;
