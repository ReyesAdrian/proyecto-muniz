import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Button } from "./ui/button"
import { getDosificacion } from '@/app/services/dosificacion'
import React from 'react'
import DeleteDosificacionButton from "./DeleteDosificacionButton"

export default async function ListOfMaterias({id}) {
    const dosificacion = await getDosificacion({id})
    return (
        <Table>
        <TableCaption>Lista de dosificaciones</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"> ID Usuario </TableHead>
            <TableHead> ID Carrera </TableHead>
            <TableHead> ID Materia </TableHead>
            <TableHead> Unidad </TableHead>
            <TableHead> Tema </TableHead>
            <TableHead> Tiempo </TableHead>
            <TableHead className="text-right"> Accion </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dosificacion.map((item) => (
          <TableRow key={item.idmateria}>
            <TableCell className="font-medium">{item.idusuario}</TableCell>
            <TableCell>{item.idcarrera}</TableCell>
            <TableCell>{item.idmateria}</TableCell>
            <TableCell>{item.unidad}</TableCell>
            <TableCell>{item.tema}</TableCell>
            <TableCell>{item.tiempo}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </Button>
              <DeleteDosificacionButton idusuario={item.idusuario} idcarrera={item.idcarrera} idmateria={item.idmateria} />
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}