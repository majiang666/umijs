import router from 'umi/router';
const CardIndex = (props,context) => {
    // console.log(props);
    // console.log(context);
    return(
        <div>
            card index
            <button onClick={() => router.push('/')}>go home</button>
        </div>
    )
}

export default CardIndex;