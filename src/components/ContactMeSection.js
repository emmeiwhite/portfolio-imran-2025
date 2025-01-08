import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack
} from '@chakra-ui/react'
import * as Yup from 'yup'
import FullScreenSection from './FullScreenSection'
import useSubmit from '../hooks/useSubmit'
import { useAlertContext } from '../context/alertContext'

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit()
  const { onOpen } = useAlertContext()

  // Step a: Initialize useFormik
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: async (values, { resetForm }) => {
      // Submit the form
      await submit(values)

      if (response?.type === 'success') {
        onOpen({
          type: 'success',
          message: `Thanks for your submission ${values.firstName}, we will get back to you shortly!`
        })
        resetForm() // Reset the form if submission is successful
      } else if (response?.type === 'error') {
        onOpen({
          type: 'error',
          message: 'Oops! Something went wrong, please try again later!'
        })
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      type: Yup.string().required('Required'),
      comment: Yup.string().required('Required')
    })
  })

  // Step e: Trigger alerts when response changes
  useEffect(() => {
    if (response) {
      if (response.type === 'success') {
        onOpen({
          type: 'success',
          message: `Thanks for your submission ${formik.values.firstName}, we will get back to you shortly!`
        })
        formik.resetForm()
      } else {
        onOpen({
          type: 'error',
          message: 'Oops! Something went wrong, please try again later!'
        })
      }
    }
  }, [response, formik.values.firstName, formik.resetForm, onOpen])

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}>
      <VStack
        w="1024px"
        p={32}
        alignItems="flex-start">
        <Heading
          as="h1"
          id="contactme-section">
          Contact me
        </Heading>
        <Box
          p={6}
          rounded="md"
          w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              {/* Name Field */}
              <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              {/* Email Field */}
              <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              {/* Type of Enquiry Field */}
              <FormControl isInvalid={formik.touched.type && !!formik.errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps('type')}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>

              {/* Message Field */}
              <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              {/* Submit Button */}
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  )
}

export default ContactMeSection
