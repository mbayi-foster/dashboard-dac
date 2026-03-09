import { Breadcrumb, BreadcrumbItem } from 'flowbite-react'
import { ChevronRight } from 'lucide-react' 

export default function BreadCumbCustomise({title}:{title:string}) {
  return (
   <div className="text-sm text-gray-400 mb-2 flex justify-start items-center">
       <a href="/"><span className="text-primary font-medium">Tableau de bord</span></a> 
        <span className="text-gray-300"><ChevronRight size={15} /></span> 
        {title}
    </div>
  )
}
