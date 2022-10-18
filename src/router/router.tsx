import type * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

type RouterProps = {
  children: React.ReactNode
}

const Router = (props: RouterProps) => {
  return <BrowserRouter>{props.children}</BrowserRouter>
}

export default Router
