import { Box } from "@mui/material"
import { ReactNode } from "react"

interface BackgroundProps {
  children: ReactNode
}

export const Background: React.FC<BackgroundProps> = ({children}) => {
  return (
    <Box width="100%" minHeight="100vh" bgcolor={theme => theme.palette.background.default}>
      {children}
    </Box>
  )
}