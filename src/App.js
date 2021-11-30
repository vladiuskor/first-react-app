import Style from './App.module.css';

function formatUserName (firstName, lastName) {
     return `Welcome to website, ${firstName} ${lastName}`
}

const Mainheader = () => {
   const text = 'This test text for homework page';
   return (
       <h1 style={{
           textAlign: 'center',
           fontSize: '40px',
           textTransform: 'uppercase'
       }}>{text}</h1>
   );
}

const Subheader = () => {
    const text = 'Hello, New Stranger!';
    return(
        <h2>{formatUserName('Sara', 'Connor')}</h2>
    )
}

const SubSubHeader = () => {
    return (
        <h3>{formatUserName('John', 'Doe')}</h3>
    )
}

const Paragraph = () => {
    const text = 'Here we have the list:';
    return (
        <p>{text}</p>
    )
}

const UnorderedList = () => {

    const dataForList = {
        firstItemText: 'Just text here',
        secondItemSpan: 'Here we have text and link!',
        secondItemLinkHref: 'https://uk.reactjs.org/docs',
        secondItemLinkText: 'It is link to our docs',
        thirdItemSpan: 'And the picture!!!',
        thirdItemImgSrc: 'https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/non-bird-species-illustrations/fox_1200x675.jpg'
    }

    return(
        <ul>
            <li tabIndex="_1">
                {dataForList.firstItemText}
            </li>
            <li>
                <span>{dataForList.secondItemSpan}</span>
                <a href={dataForList.secondItemLinkHref} target="_blank">{dataForList.secondItemLinkText}</a>
            </li>
            <li>
                <span>{dataForList.thirdItemSpan}</span>
                <img src={dataForList.thirdItemImgSrc} alt="Fox" width="300"/>
            </li>
        </ul>
    )
}


const Homepage = () => {
    return (
        <div className={Style.container}>
            <Mainheader />
            <br/>
            <Subheader />
            <br/>
            <SubSubHeader />
            <br/>
            <Paragraph />
            <UnorderedList />
        </div>
    )
}

export default Homepage;