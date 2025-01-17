export default function Tabs({children, buttons, ButtonsContainer = "menu"}){
    //const ButtonsContainer = buttonsContainer //variable with Uppercase
    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}