import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { Box, HStack } from '@chakra-ui/react'

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: ratherimran99@gmail.com'
  },
  {
    icon: faGithub,
    url: 'https://github.com/emmeiwhite'
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/imran-rafiq-rather/'
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com/users/6938969/imran-rafiq-rather'
  }
]

const links = [
  {
    name: 'Projects',
    id: 1,
    linkTo: 'projects'
  },
  {
    name: 'Contact Me',
    id: 2,
    linkTo: 'contactme'
  }
]

const Header = () => {
  const handleClick = anchor => {
    console.log('Header Clicked!')
    const id = `${anchor}-section`
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      zIndex="1000" // Ensure the header is on top
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b">
      <Box
        color="white"
        maxWidth="1280px"
        margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center">
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {socials.map(social => {
                return (
                  <a
                    href={social.url}
                    key={social.url}>
                    <FontAwesomeIcon
                      icon={social.icon}
                      size="2x"
                    />
                  </a>
                )
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {' '}
              {links.map(link => {
                return (
                  <a
                    href={`#${link.linkTo}`}
                    key={link.id}
                    onClick={() => handleClick(link.linkTo)}>
                    {link.name}
                  </a>
                )
              })}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  )
}
export default Header
