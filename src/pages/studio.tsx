import React from "react"
import Link from "../components/Link"
import Emoji from "../components/Emoji"
import ButtonLink from "../components/ButtonLink"
import { Box, Container, Divider, Heading, Text } from "@chakra-ui/react"

const StudioRedirectPage = () => (
  <Container
    w="100%"
    display="flex"
    maxWidth="5xl"
    flexDirection="column"
    alignItems="center"
    alignSelf="flex-start"
    marginY="16"
  >
    <Box paddingX="8" paddingY="4" width="100%">
      <Emoji fontSize="8xl" mb="10" text=":sunset_over_buildings:" />
      <Heading
        fontSize={{ base: "5xl", lg: "6xl" }}
        fontStyle="normal"
        fontWeight="bold"
        letterSpacing="normal"
        as="h1"
        textAlign="left"
      >
        We've sunset Studio
      </Heading>
      <p>
        Ethereum Studio is no longer actively maintained. We'd like to thank the{" "}
        <Link to="https://superblocks.com/">Superblocks</Link>
        team and the many open source contributors who generously helped support
        this project.
      </p>
      <p>
        You can find the source code for this project here:
        <ul>
          <li>
            <Link to="https://github.com/SuperblocksHQ/ethereum-studio">
              Web IDE
            </Link>
          </li>
          <li>
            <Link to="https://github.com/SuperblocksHQ/studio-api-services-project">
              API server
            </Link>
          </li>
        </ul>
      </p>
      <Divider
        marginY="16"
        width="10%"
        height="1"
        opacity="1"
        backgroundColor="homeDivider"
      />
      <Heading
        fontSize="3xl"
        fontStyle="normal"
        fontWeight="bold"
        letterSpacing="normal"
        textAlign="left"
        as="h2"
      >
        What to use instead
      </Heading>
      <p>
        We recommend using Remix as an alternative web IDE for your Solidity
        development. Additionally, we encourage you to consider{" "}
        <Link to="/developers/local-environment/">
          setting up a local development environment
        </Link>
        . Check out our developer portal for tools, documentation, and more.
      </p>
      <ButtonLink mr={1} variant="outline" to="https://remix.ethereum.org">
        Use Remix
      </ButtonLink>
      <ButtonLink variant="outline" to="/developers/">
        Developer portal
      </ButtonLink>
    </Box>
  </Container>
)

export default StudioRedirectPage
