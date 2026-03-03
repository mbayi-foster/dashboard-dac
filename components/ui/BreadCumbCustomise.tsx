import { Breadcrumb, BreadcrumbItem } from 'flowbite-react'
import React from 'react'
import { HiHome } from 'react-icons/hi'

export default function BreadCumbCustomise() {
  return (
  <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-white px-5 py-3 dark:bg-gray-800 rounded-xl">
      <BreadcrumbItem href="#" icon={HiHome}>
        Tableau de bord
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Utilisateur</BreadcrumbItem>
      <BreadcrumbItem>Ajouter</BreadcrumbItem>
    </Breadcrumb>
  )
}
