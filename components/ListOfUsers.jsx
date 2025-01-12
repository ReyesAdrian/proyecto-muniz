'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { getUsuarios } from  "../app/services/usuario"
import { Button } from "./ui/button"
import DeleteButton from "./DeleteUserButton";
import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";
export default function ListOfUsers() {
  const [usuarios, setUsuarios] = React.useState([])
  const router = useRouter()

   useEffect(() => {
    async function getUsers() {
      const data = await getUsuarios()
      setUsuarios(data)
    }
    getUsers()
  }, [])

  const handleEditUser = (id) => {
    const destination = '/dashboard/usuarios/user?id=' + id
    router.push(destination)
  }

  return (
    <>
      {usuarios.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 text-xl">Cargando...</p>
        </div>
      ):
      <Table>
        <TableCaption>Lista de usuarios registrados en el sistema</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"> ID </TableHead>
            <TableHead> Usuario </TableHead>
            <TableHead> Tipo </TableHead>
            <TableHead> Nombre </TableHead>
            <TableHead> Apellido </TableHead>
          <TableHead className="text-right"> Accion </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usuarios.map((item) => (
          <TableRow key={item.idusuario}>
            <TableCell className="font-medium">{item.idusuario}</TableCell>
            <TableCell>{item.usuario}</TableCell>
            <TableCell>{item.tipo}</TableCell>
            <TableCell>{item.nombre}</TableCell>
            <TableCell>{item.apellido}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" onClick={() => handleEditUser(item.idusuario)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </Button>
              <DeleteButton id={item.idusuario} setUsuarios={setUsuarios}/>
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>}
    </>
  );
}