import {UserIcon} from '@sanity/icons'

const actor = {
  name: 'actor',
  title: 'Actor',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The unique and the last part of the url',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
}

export default actor