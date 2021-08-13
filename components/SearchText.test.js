const SearchText = require("./SearchText")
// @ponicode
describe("onChange", () => {
    let inst

    beforeEach(() => {
        inst = new SearchText.SearchText()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onChange("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onChange("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onChange("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
