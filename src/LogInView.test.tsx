import * as React from "react"
import "@testing-library/jest-dom"
import { render, fireEvent, screen } from "@testing-library/react"
import { LogInView } from "./LogInView"

describe("LoginView tests", () => {
  it("No mostrar cargando y llamar al evento logIn", () => {
    const logIn = jest.fn()
    const props = { logIn, loading: false }
    render(<LogInView {...props} />)

    expect(screen.queryByText("Loading...")).toBeNull()

    // fireEvent.click(screen.queryByText("Login") || <div />)
    fireEvent.click(screen.getByRole("button"))

    expect(logIn).toHaveBeenCalledTimes(1)
  })
  it("mostrar cargando", () => {
    const props = { loading: true }
    render(<LogInView {...props} />)

    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })
})
