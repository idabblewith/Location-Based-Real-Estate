import { Listings } from '@/components/pages/Listings'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/listings')({
  component: Listings
})