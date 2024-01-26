


export const Face = ({imageUrl="me.jpg", toggleIsVisible=() => {}}) => {

    return <svg width="220" height="220" xmlns="http://www.w3.org/2000/svg" onClick={toggleIsVisible}>
        <circle cx="110" cy="110" r="100" stroke="pink" strokeWidth="5" fill="none" />
        <clipPath id="circleView">
            <circle cx="110" cy="110" r="90" />
        </clipPath>
        <image href={imageUrl} width="300" height="300" x="-40" y="-20" clipPath="url(#circleView)" />
    </svg>

}