interface heartProps {
    isActive : boolean
    onClick : function
    animationTrigger : 'hover' | 'both'
    animationScale : number
    animationDuration : number 
    inactiveColor : string
    activeColor : string
    className : string
    style : object
}

declare module 'react-heart' {
    const heartinput :React.FC<heartProps>
}