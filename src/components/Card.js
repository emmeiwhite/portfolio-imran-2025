import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      align="stretch"
      spacing={4}
      p={4}>
      {/* Image Section */}
      <Image
        src={imageSrc}
        alt={title}
        boxSize="100%"
        objectFit="cover"
      />

      {/* Text Section */}
      <VStack
        align="stretch"
        spacing={2}
        px={4}>
        <Heading
          as="h3"
          size="md"
          color="black">
          {title}
        </Heading>
        <Text
          color="gray.600"
          fontSize="sm">
          {description}
        </Text>
      </VStack>

      {/* Arrow Section */}
      <HStack
        justify="flex-end"
        w="100%"
        px={4}>
        <Text color="gray.600">See More</Text>
        <FontAwesomeIcon
          icon={faArrowRight}
          size="1x"
          color="gray"
        />
      </HStack>
    </VStack>
  )
}

export default Card
