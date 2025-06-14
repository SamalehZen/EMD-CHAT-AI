"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

type DialogDeleteChatProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  chatTitle: string
  onConfirmDelete: () => Promise<void>
}

export function DialogDeleteChat({
  isOpen,
  setIsOpen,
  chatTitle,
  onConfirmDelete,
}: DialogDeleteChatProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Supprimer le chat ?</AlertDialogTitle>
          <AlertDialogDescription>
            Ceci supprimera "{chatTitle}"
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              setIsOpen(false)
              await onConfirmDelete()
            }}
          >
            Supprimer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
