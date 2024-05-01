import { createContext } from "react"


class TestClient {

    value:number = 0

    initalize(value:number) {
        this.value = value
    }

    add() {
        this.value = this.value + 1
    }

    sub() {
        this.value = this.value - 1
    }
}

const initalizeContext = {
    something: 1,
    client: new TestClient()
}

export const MyContext = createContext({
    ...initalizeContext
})

export const MyContextProvider = (props:React.PropsWithChildren) => {
    return (
        <MyContext.Provider value={{
            something: 2,
            client: new TestClient()
        }}>
            {props.children}
        </MyContext.Provider>
    )
}



